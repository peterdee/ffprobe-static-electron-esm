## ffprobe-static-electron-esm

The module returns a file path to the installed ffprobe binary for the target operating system. 

It is a modified version from the original [ffprobe-static](https://github.com/pietrop/ffprobe-static) to use [`electron-builder` file macros  in `package.json`, where OS name are `mac`, `linux` or `win`](https://www.electron.build/file-patterns/#file-macros)

In `ffprobe-static`, recognising the target OS is done with [`os.platform()`](https://nodejs.org/api/os.html#os_os_platform) where mac os x is  recognised as`darwin` rather then `mac`.

There is also [`ffmpeg-static-electron-esm`](https://github.com/peterdee/ffmpeg-static-electron-esm)

### Install

```shell script
npm i github:peterdee/ffprobe-static-electron-esm
```

### Usage

```javascript
import ffprobePath from 'ffprobe-static-electron-esm';
console.log(ffprobePath.path);
```

### License

[MIT](./LICENSE.md)
