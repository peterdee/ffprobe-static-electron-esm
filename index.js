const os = require('node:os');
const path = require('node:path');
const url = require('node:url');

const unsupportedPlatformError = new Error(`Unsupported platform: ${platform}`);

let platform = os.platform();
if (platform == 'darwin') {
	platform = 'mac';
}
if (platform == 'win32') {
	platform = 'win';
}

if (platform !== 'linux' && platform !== 'mac'
  && platform !== 'win' && platform !== 'browser') {
  throw unsupportedPlatformError;
}

const arch = os.arch();
if (platform === 'mac' && (arch !== 'x64' &&  arch !== 'arm64' )) {
  throw unsupportedPlatformError;
}

// fix __dirname for ESM
let dirnamePath = __dirname;
if (!dirnamePath) {
  dirnamePath = path.dirname(url.fileURLToPath(import.meta.url));
}

var ffprobePath = path.join(
  dirnamePath,
  'bin',
  platform,
  arch,
  platform === 'win'
    ? 'ffprobe.exe'
    : 'ffprobe',
);

exports.path = ffprobePath;
