import os from 'node:os';
import path from 'node:path';
import url from 'node:url';

let platform = os.platform();
if (platform == 'darwin') {
	platform = 'mac';
}
if (platform == 'win32') {
	platform = 'win';
}

const unsupportedPlatformError = new Error(`Unsupported platform: ${platform}`);

if (platform !== 'linux' && platform !== 'mac'
  && platform !== 'win' && platform !== 'browser') {
  throw unsupportedPlatformError;
}

const arch = os.arch();
if (platform === 'mac' && (arch !== 'x64' &&  arch !== 'arm64' )) {
  throw unsupportedPlatformError;
}

export default path.join(
  path.dirname(url.fileURLToPath(import.meta.url)),
  'bin',
  platform,
  arch,
  platform === 'win'
    ? 'ffprobe.exe'
    : 'ffprobe',
);
