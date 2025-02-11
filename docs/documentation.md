# DND Scribe Documentation

## Project Structure

```
├── .env
├── .eslintrc.json
├── .git
│   ├── COMMIT_EDITMSG
│   ├── FETCH_HEAD
│   ├── HEAD
│   ├── ORIG_HEAD
│   ├── config
│   ├── description
│   ├── hooks
│   │   ├── applypatch-msg.sample
│   │   ├── commit-msg.sample
│   │   ├── fsmonitor-watchman.sample
│   │   ├── post-update.sample
│   │   ├── pre-applypatch.sample
│   │   ├── pre-commit.sample
│   │   ├── pre-merge-commit.sample
│   │   ├── pre-push.sample
│   │   ├── pre-rebase.sample
│   │   ├── pre-receive.sample
│   │   ├── prepare-commit-msg.sample
│   │   ├── push-to-checkout.sample
│   │   └── update.sample
│   ├── index
│   ├── info
│   │   └── exclude
│   ├── logs
│   │   ├── HEAD
│   │   └── refs
│   │       ├── heads
│   │       │   └── main
│   │       └── remotes
│   │           └── origin
│   │               └── main
│   ├── objects
│   │   ├── 08
│   │   │   └── b9cc6fed0792aed79bd5c9093550312e0a0dac
│   │   ├── 0b
│   │   │   └── 465c30e966337a49c16c187c1bb5e8c27f112c
│   │   ├── 0d
│   │   │   └── bd57bdb6f2c175a9daf2ae8757fb5a0786507b
│   │   ├── 0f
│   │   │   └── b89b849ac69a8ba4c1c716863cd827c768cb95
│   │   ├── 12
│   │   │   └── 4c2e3ffe65df1365613229cba4d0931cb639d9
│   │   ├── 14
│   │   │   ├── 597789ea645c6183e68b5ee7368e63abb9bcbc
│   │   │   └── a16b5e09727dc831f1d16d1506987508d7451e
│   │   ├── 16
│   │   │   └── 48081f23220bb863776b62b65839b3566883c5
│   │   ├── 18
│   │   │   └── 77cc6319bc85b0063400312f3b47ac17eca38c
│   │   ├── 1a
│   │   │   └── 62c1201b36bd4afbefd5aaa0682010c9ecee09
│   │   ├── 1b
│   │   │   └── cbc9a9b9c8190e307b8a5f43307f37b9460758
│   │   ├── 1d
│   │   │   └── b3fd94de865b741851471e3c3d2c6c89bdbfe5
│   │   ├── 28
│   │   │   └── 7145468c3fd32eb05dc396561f80e8f8c24c83
│   │   ├── 2a
│   │   │   └── 074d908c619aac2d92bd6277baddcee80d3cf2
│   │   ├── 2f
│   │   │   └── 2ecb65b88a3dd54f709441e70e09110a50dd59
│   │   ├── 33
│   │   │   └── 180cf8df9ea5684d7ced3c5ae450594b1a62ab
│   │   ├── 37
│   │   │   └── 6ce49fbba0aecff490e56946f58b1073bcb98e
│   │   ├── 41
│   │   │   └── df52a0a52fcc76c796a4d758caf67753835c09
│   │   ├── 42
│   │   │   └── eb3a66b178519a145f1f5aafaa6f1893ae86ce
│   │   ├── 45
│   │   │   └── de47d29c36b9ece7d68cadde82277ee95b16d0
│   │   ├── 46
│   │   │   └── 52c1bd6d486a4355d951f45582f3479963ab36
│   │   ├── 47
│   │   │   └── 6b7d0690d5da4079e6d909494bc0cb46b34dbc
│   │   ├── 4c
│   │   │   └── affdd24088195f576ff2cffe03f78cbb84c7cb
│   │   ├── 4d
│   │   │   └── 8c1c201443a1417ff3be2ad96ec73805286504
│   │   ├── 54
│   │   │   └── 4a49bd3585995f18cf19bb88b053d16280edf0
│   │   ├── 55
│   │   │   └── 38d9eded1a82fe6231fcc86a38f6296045e084
│   │   ├── 56
│   │   │   ├── 451bdee31b9db5bc79099e8c6e9372bcd9ef7a
│   │   │   └── 91c31f3e6f072b3fcbe998f8206e862af2547f
│   │   ├── 5a
│   │   │   └── 30ad5f56f7d75f4867f65b223863edf906d316
│   │   ├── 5b
│   │   │   └── c5c1ed8801fb73bed2de01faf86f850b5b35d2
│   │   ├── 5d
│   │   │   └── 0c59b53a58eefa8c939e7f9727fd34f5921dd3
│   │   ├── 5e
│   │   │   └── b757780702fb7dc0c69d623b00e7060597f923
│   │   ├── 5f
│   │   │   └── 2aecdf2d2c73e7972bf3d9138769521e5b5b95
│   │   ├── 61
│   │   │   └── c4ad8fb182dc00ace55a61dbc9a959cb35afeb
│   │   ├── 64
│   │   │   └── 76bc00ea3d2a5a398b545d3fb2cb72b108a1ac
│   │   ├── 65
│   │   │   └── 5921e9641ee88ebb71002bfe56b8a12ea252aa
│   │   ├── 6a
│   │   │   └── dc3669d0448b2f6cdd49c35c2090582d4f3c4b
│   │   ├── 71
│   │   │   └── 884da3122d5dd306c712f815ca2a7d5657308e
│   │   ├── 74
│   │   │   └── 1deeb135693353e9f0b681366d8135bbd60a35
│   │   ├── 75
│   │   │   ├── 8ed21faf480a82b6d2eb25a0f64b3d00545f5a
│   │   │   └── b1fdc35f77d479da41ef34f8eb3a24e274e0f6
│   │   ├── 79
│   │   │   └── a1e6090904a86c212af4610432d55b3258a586
│   │   ├── 7c
│   │   │   └── 6fe0575dfc3187f89125d7fc74ffa1d02ffc96
│   │   ├── 7e
│   │   │   └── d17822f4ddd4bc87688d65c136304f19f58c5d
│   │   ├── 80
│   │   │   └── 757daf71ec2d3037d6b8d4f1f714b5bce95be5
│   │   ├── 88
│   │   │   └── 0a9595463f74e7f212e56b34539180821a5f4b
│   │   ├── 89
│   │   │   └── f51ab1ecf3b3245e9454a1f36ffede90d40934
│   │   ├── 8a
│   │   │   └── 593dddb92eca44e008ff88f7796c9eb0990071
│   │   ├── 8c
│   │   │   └── 6fc09c5b8fd036d149efaaf37f556c76208e59
│   │   ├── 91
│   │   │   └── 993d58e19c74c7b91e1c933e542b41f3c42032
│   │   ├── 95
│   │   │   └── 9ca17e23b462039ce7399c695c858fb8149539
│   │   ├── 96
│   │   │   └── e35d3e657057718eeef0c9730ba21b2811a511
│   │   ├── 99
│   │   │   └── 4938a4f0da4f630ac541873bf60d7f3d4c9c7b
│   │   ├── a0
│   │   │   ├── 44d3faeed6f8d1bc370031374b7d63fea347f1
│   │   │   └── b49f3f78743381bfab7b2fd8cef067db5f9a58
│   │   ├── a2
│   │   │   └── 71b3b8ef03c4ee6efdbaaf3782c272df365198
│   │   ├── a5
│   │   │   └── 948d307920b4dd616b3ce67113ae1674d3185a
│   │   ├── a8
│   │   │   └── 4b40094ee2acf765c8ee0b267ce5163974d673
│   │   ├── ab
│   │   │   └── e025bb51805f498412e29e5aee5395abe58076
│   │   ├── b3
│   │   │   ├── 7476168a2eee3e8c43fbd026964b0ccac5333a
│   │   │   └── d946f6c63f79c30a84b76d80e0fc9bc65b3ab4
│   │   ├── b7
│   │   │   ├── 909f6d4f73527583effcda2834588cd632514a
│   │   │   └── 955801994d7ae6087a1fa251870b2581ec20e5
│   │   ├── bd
│   │   │   ├── 2c9da4fd77a53f168e846daf6059323c971167
│   │   │   └── dbf56a8638e2acf6a2e2fdba1bfa9c85a08471
│   │   ├── c1
│   │   │   └── d846144c4c6526983cc78382507b0369f3fe19
│   │   ├── c2
│   │   │   └── 45b65b581708aba136c202b1bcd981cb7c208e
│   │   ├── c3
│   │   │   └── ec7b724075c80cdf5dc1e32ce692dbc7ce6006
│   │   ├── c7
│   │   │   └── fa0e258283aece7a8e5d22c897ffaeb23df58b
│   │   ├── ca
│   │   │   └── 8527e0ddebfc43ad3bfab4cfd6437e7169f789
│   │   ├── cc
│   │   │   └── eceb287c324d909529553362252f499401a832
│   │   ├── d4
│   │   │   └── f147a36f659f7cd55b00b13d614f42c5c0df60
│   │   ├── dc
│   │   │   └── 1130e5a42faa3250f15c764577b1b32e08c00d
│   │   ├── e2
│   │   │   └── 09ae8de990d94e004c3244971886573dcad8d7
│   │   ├── e5
│   │   │   └── 0e406d8ad150f0f24963e97a941f25773a4cf9
│   │   ├── e6
│   │   │   └── b397a1c62342b15dfe9518fc1abef865970551
│   │   ├── e8
│   │   │   └── 354f1770ef8ff8ebc190c9ecf3849b908e5566
│   │   ├── f2
│   │   │   ├── 0e7d1e04fcf02453a64bb001f4cb2d7eeda713
│   │   │   └── f6025d7ade52a7a463b9f2883cf0daa081a4d5
│   │   ├── f3
│   │   │   ├── b4671736cb6889e41e7d7861a17eadd82b70f2
│   │   │   └── b5d86ff272000c8298e631367154cb163ddfc0
│   │   ├── f8
│   │   │   └── 291105ddec44e5ea5f64814fc85e34bc028b64
│   │   ├── f9
│   │   │   └── fa9f17381e59577d18bb6f2e5324a4fbdf2189
│   │   ├── info
│   │   └── pack
│   └── refs
│       ├── heads
│       │   └── main
│       ├── remotes
│       │   └── origin
│       │       └── main
│       └── tags
├── .gitignore
├── .prettierrc
├── CHANGELOG.md
├── README.md
├── ROADMAP.md
├── dist
│   ├── commands
│   │   ├── join.js
│   │   ├── join.js.map
│   │   ├── leave.js
│   │   ├── leave.js.map
│   │   ├── ping.js
│   │   └── ping.js.map
│   ├── deploy-commands.js
│   ├── deploy-commands.js.map
│   ├── index.js
│   ├── index.js.map
│   ├── services
│   │   ├── audioRecorder.js
│   │   ├── audioRecorder.js.map
│   │   ├── aws-setup.js
│   │   ├── aws-setup.js.map
│   │   ├── voiceHandler.js
│   │   └── voiceHandler.js.map
│   ├── types
│   │   ├── commands.js
│   │   ├── commands.js.map
│   │   ├── discord.js
│   │   ├── discord.js.map
│   │   ├── voice.js
│   │   └── voice.js.map
│   └── utils
│       ├── audioProcessor.js
│       └── audioProcessor.js.map
├── docs
├── ffmpeg.zip
├── node_modules
│   ├── .bin
│   │   ├── acorn
│   │   ├── color-support
│   │   ├── eslint
│   │   ├── fxparser
│   │   ├── js-yaml
│   │   ├── mkdirp
│   │   ├── node-gyp-build
│   │   ├── node-gyp-build-optional
│   │   ├── node-gyp-build-test
│   │   ├── node-pre-gyp
│   │   ├── node-which
│   │   ├── nopt
│   │   ├── prettier
│   │   ├── rimraf
│   │   ├── semver
│   │   ├── ts-node
│   │   ├── ts-node-cwd
│   │   ├── ts-node-esm
│   │   ├── ts-node-script
│   │   ├── ts-node-transpile-only
│   │   ├── ts-script
│   │   ├── tsc
│   │   ├── tsserver
│   │   └── uuid
│   ├── .package-lock.json
│   ├── @aws-crypto
│   │   ├── crc32
│   │   │   ├── CHANGELOG.md
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── build
│   │   │   │   ├── main
│   │   │   │   │   ├── aws_crc32.d.ts
│   │   │   │   │   ├── aws_crc32.js
│   │   │   │   │   ├── aws_crc32.js.map
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── index.js.map
│   │   │   │   └── module
│   │   │   │       ├── aws_crc32.d.ts
│   │   │   │       ├── aws_crc32.js
│   │   │   │       ├── aws_crc32.js.map
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── index.js
│   │   │   │       └── index.js.map
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── aws_crc32.ts
│   │   │   │   └── index.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsconfig.module.json
│   │   ├── crc32c
│   │   │   ├── CHANGELOG.md
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── build
│   │   │   │   ├── main
│   │   │   │   │   ├── aws_crc32c.d.ts
│   │   │   │   │   ├── aws_crc32c.js
│   │   │   │   │   ├── aws_crc32c.js.map
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── index.js.map
│   │   │   │   └── module
│   │   │   │       ├── aws_crc32c.d.ts
│   │   │   │       ├── aws_crc32c.js
│   │   │   │       ├── aws_crc32c.js.map
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── index.js
│   │   │   │       └── index.js.map
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── aws_crc32c.ts
│   │   │   │   └── index.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsconfig.module.json
│   │   ├── sha1-browser
│   │   │   ├── CHANGELOG.md
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── build
│   │   │   │   ├── main
│   │   │   │   │   ├── constants.d.ts
│   │   │   │   │   ├── constants.js
│   │   │   │   │   ├── constants.js.map
│   │   │   │   │   ├── crossPlatformSha1.d.ts
│   │   │   │   │   ├── crossPlatformSha1.js
│   │   │   │   │   ├── crossPlatformSha1.js.map
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── index.js.map
│   │   │   │   │   ├── isEmptyData.d.ts
│   │   │   │   │   ├── isEmptyData.js
│   │   │   │   │   ├── isEmptyData.js.map
│   │   │   │   │   ├── webCryptoSha1.d.ts
│   │   │   │   │   ├── webCryptoSha1.js
│   │   │   │   │   └── webCryptoSha1.js.map
│   │   │   │   └── module
│   │   │   │       ├── constants.d.ts
│   │   │   │       ├── constants.js
│   │   │   │       ├── constants.js.map
│   │   │   │       ├── crossPlatformSha1.d.ts
│   │   │   │       ├── crossPlatformSha1.js
│   │   │   │       ├── crossPlatformSha1.js.map
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── index.js
│   │   │   │       ├── index.js.map
│   │   │   │       ├── isEmptyData.d.ts
│   │   │   │       ├── isEmptyData.js
│   │   │   │       ├── isEmptyData.js.map
│   │   │   │       ├── webCryptoSha1.d.ts
│   │   │   │       ├── webCryptoSha1.js
│   │   │   │       └── webCryptoSha1.js.map
│   │   │   ├── node_modules
│   │   │   │   └── @smithy
│   │   │   │       ├── is-array-buffer
│   │   │   │       │   ├── LICENSE
│   │   │   │       │   ├── README.md
│   │   │   │       │   ├── dist-cjs
│   │   │   │       │   │   └── index.js
│   │   │   │       │   ├── dist-es
│   │   │   │       │   │   └── index.js
│   │   │   │       │   ├── dist-types
│   │   │   │       │   │   ├── index.d.ts
│   │   │   │       │   │   └── ts3.4
│   │   │   │       │   │       └── index.d.ts
│   │   │   │       │   └── package.json
│   │   │   │       ├── util-buffer-from
│   │   │   │       │   ├── LICENSE
│   │   │   │       │   ├── README.md
│   │   │   │       │   ├── dist-cjs
│   │   │   │       │   │   └── index.js
│   │   │   │       │   ├── dist-es
│   │   │   │       │   │   └── index.js
│   │   │   │       │   ├── dist-types
│   │   │   │       │   │   ├── index.d.ts
│   │   │   │       │   │   └── ts3.4
│   │   │   │       │   │       └── index.d.ts
│   │   │   │       │   └── package.json
│   │   │   │       └── util-utf8
│   │   │   │           ├── LICENSE
│   │   │   │           ├── README.md
│   │   │   │           ├── dist-cjs
│   │   │   │           │   ├── fromUtf8.browser.js
│   │   │   │           │   ├── fromUtf8.js
│   │   │   │           │   ├── index.js
│   │   │   │           │   ├── toUint8Array.js
│   │   │   │           │   ├── toUtf8.browser.js
│   │   │   │           │   └── toUtf8.js
│   │   │   │           ├── dist-es
│   │   │   │           │   ├── fromUtf8.browser.js
│   │   │   │           │   ├── fromUtf8.js
│   │   │   │           │   ├── index.js
│   │   │   │           │   ├── toUint8Array.js
│   │   │   │           │   ├── toUtf8.browser.js
│   │   │   │           │   └── toUtf8.js
│   │   │   │           ├── dist-types
│   │   │   │           │   ├── fromUtf8.browser.d.ts
│   │   │   │           │   ├── fromUtf8.d.ts
│   │   │   │           │   ├── index.d.ts
│   │   │   │           │   ├── toUint8Array.d.ts
│   │   │   │           │   ├── toUtf8.browser.d.ts
│   │   │   │           │   ├── toUtf8.d.ts
│   │   │   │           │   └── ts3.4
│   │   │   │           │       ├── fromUtf8.browser.d.ts
│   │   │   │           │       ├── fromUtf8.d.ts
│   │   │   │           │       ├── index.d.ts
│   │   │   │           │       ├── toUint8Array.d.ts
│   │   │   │           │       ├── toUtf8.browser.d.ts
│   │   │   │           │       └── toUtf8.d.ts
│   │   │   │           └── package.json
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── constants.ts
│   │   │   │   ├── crossPlatformSha1.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── isEmptyData.ts
│   │   │   │   └── webCryptoSha1.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsconfig.module.json
│   │   ├── sha256-browser
│   │   │   ├── CHANGELOG.md
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── build
│   │   │   │   ├── main
│   │   │   │   │   ├── constants.d.ts
│   │   │   │   │   ├── constants.js
│   │   │   │   │   ├── constants.js.map
│   │   │   │   │   ├── crossPlatformSha256.d.ts
│   │   │   │   │   ├── crossPlatformSha256.js
│   │   │   │   │   ├── crossPlatformSha256.js.map
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── index.js.map
│   │   │   │   │   ├── isEmptyData.d.ts
│   │   │   │   │   ├── isEmptyData.js
│   │   │   │   │   ├── isEmptyData.js.map
│   │   │   │   │   ├── webCryptoSha256.d.ts
│   │   │   │   │   ├── webCryptoSha256.js
│   │   │   │   │   └── webCryptoSha256.js.map
│   │   │   │   └── module
│   │   │   │       ├── constants.d.ts
│   │   │   │       ├── constants.js
│   │   │   │       ├── constants.js.map
│   │   │   │       ├── crossPlatformSha256.d.ts
│   │   │   │       ├── crossPlatformSha256.js
│   │   │   │       ├── crossPlatformSha256.js.map
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── index.js
│   │   │   │       ├── index.js.map
│   │   │   │       ├── isEmptyData.d.ts
│   │   │   │       ├── isEmptyData.js
│   │   │   │       ├── isEmptyData.js.map
│   │   │   │       ├── webCryptoSha256.d.ts
│   │   │   │       ├── webCryptoSha256.js
│   │   │   │       └── webCryptoSha256.js.map
│   │   │   ├── node_modules
│   │   │   │   └── @smithy
│   │   │   │       ├── is-array-buffer
│   │   │   │       │   ├── LICENSE
│   │   │   │       │   ├── README.md
│   │   │   │       │   ├── dist-cjs
│   │   │   │       │   │   └── index.js
│   │   │   │       │   ├── dist-es
│   │   │   │       │   │   └── index.js
│   │   │   │       │   ├── dist-types
│   │   │   │       │   │   ├── index.d.ts
│   │   │   │       │   │   └── ts3.4
│   │   │   │       │   │       └── index.d.ts
│   │   │   │       │   └── package.json
│   │   │   │       ├── util-buffer-from
│   │   │   │       │   ├── LICENSE
│   │   │   │       │   ├── README.md
│   │   │   │       │   ├── dist-cjs
│   │   │   │       │   │   └── index.js
│   │   │   │       │   ├── dist-es
│   │   │   │       │   │   └── index.js
│   │   │   │       │   ├── dist-types
│   │   │   │       │   │   ├── index.d.ts
│   │   │   │       │   │   └── ts3.4
│   │   │   │       │   │       └── index.d.ts
│   │   │   │       │   └── package.json
│   │   │   │       └── util-utf8
│   │   │   │           ├── LICENSE
│   │   │   │           ├── README.md
│   │   │   │           ├── dist-cjs
│   │   │   │           │   ├── fromUtf8.browser.js
│   │   │   │           │   ├── fromUtf8.js
│   │   │   │           │   ├── index.js
│   │   │   │           │   ├── toUint8Array.js
│   │   │   │           │   ├── toUtf8.browser.js
│   │   │   │           │   └── toUtf8.js
│   │   │   │           ├── dist-es
│   │   │   │           │   ├── fromUtf8.browser.js
│   │   │   │           │   ├── fromUtf8.js
│   │   │   │           │   ├── index.js
│   │   │   │           │   ├── toUint8Array.js
│   │   │   │           │   ├── toUtf8.browser.js
│   │   │   │           │   └── toUtf8.js
│   │   │   │           ├── dist-types
│   │   │   │           │   ├── fromUtf8.browser.d.ts
│   │   │   │           │   ├── fromUtf8.d.ts
│   │   │   │           │   ├── index.d.ts
│   │   │   │           │   ├── toUint8Array.d.ts
│   │   │   │           │   ├── toUtf8.browser.d.ts
│   │   │   │           │   ├── toUtf8.d.ts
│   │   │   │           │   └── ts3.4
│   │   │   │           │       ├── fromUtf8.browser.d.ts
│   │   │   │           │       ├── fromUtf8.d.ts
│   │   │   │           │       ├── index.d.ts
│   │   │   │           │       ├── toUint8Array.d.ts
│   │   │   │           │       ├── toUtf8.browser.d.ts
│   │   │   │           │       └── toUtf8.d.ts
│   │   │   │           └── package.json
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── constants.ts
│   │   │   │   ├── crossPlatformSha256.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── isEmptyData.ts
│   │   │   │   └── webCryptoSha256.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsconfig.module.json
│   │   ├── sha256-js
│   │   │   ├── CHANGELOG.md
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── build
│   │   │   │   ├── main
│   │   │   │   │   ├── RawSha256.d.ts
│   │   │   │   │   ├── RawSha256.js
│   │   │   │   │   ├── RawSha256.js.map
│   │   │   │   │   ├── constants.d.ts
│   │   │   │   │   ├── constants.js
│   │   │   │   │   ├── constants.js.map
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── index.js.map
│   │   │   │   │   ├── jsSha256.d.ts
│   │   │   │   │   ├── jsSha256.js
│   │   │   │   │   ├── jsSha256.js.map
│   │   │   │   │   ├── knownHashes.fixture.d.ts
│   │   │   │   │   ├── knownHashes.fixture.js
│   │   │   │   │   └── knownHashes.fixture.js.map
│   │   │   │   └── module
│   │   │   │       ├── RawSha256.d.ts
│   │   │   │       ├── RawSha256.js
│   │   │   │       ├── RawSha256.js.map
│   │   │   │       ├── constants.d.ts
│   │   │   │       ├── constants.js
│   │   │   │       ├── constants.js.map
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── index.js
│   │   │   │       ├── index.js.map
│   │   │   │       ├── jsSha256.d.ts
│   │   │   │       ├── jsSha256.js
│   │   │   │       ├── jsSha256.js.map
│   │   │   │       ├── knownHashes.fixture.d.ts
│   │   │   │       ├── knownHashes.fixture.js
│   │   │   │       └── knownHashes.fixture.js.map
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── RawSha256.ts
│   │   │   │   ├── constants.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── jsSha256.ts
│   │   │   │   └── knownHashes.fixture.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsconfig.module.json
│   │   ├── supports-web-crypto
│   │   │   ├── CHANGELOG.md
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── build
│   │   │   │   ├── main
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── index.js.map
│   │   │   │   │   ├── supportsWebCrypto.d.ts
│   │   │   │   │   ├── supportsWebCrypto.js
│   │   │   │   │   └── supportsWebCrypto.js.map
│   │   │   │   └── module
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── index.js
│   │   │   │       ├── index.js.map
│   │   │   │       ├── supportsWebCrypto.d.ts
│   │   │   │       ├── supportsWebCrypto.js
│   │   │   │       └── supportsWebCrypto.js.map
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── index.ts
│   │   │   │   └── supportsWebCrypto.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsconfig.module.json
│   │   └── util
│   │       ├── CHANGELOG.md
│   │       ├── LICENSE
│   │       ├── README.md
│   │       ├── build
│   │       │   ├── main
│   │       │   │   ├── convertToBuffer.d.ts
│   │       │   │   ├── convertToBuffer.js
│   │       │   │   ├── convertToBuffer.js.map
│   │       │   │   ├── index.d.ts
│   │       │   │   ├── index.js
│   │       │   │   ├── index.js.map
│   │       │   │   ├── isEmptyData.d.ts
│   │       │   │   ├── isEmptyData.js
│   │       │   │   ├── isEmptyData.js.map
│   │       │   │   ├── numToUint8.d.ts
│   │       │   │   ├── numToUint8.js
│   │       │   │   ├── numToUint8.js.map
│   │       │   │   ├── uint32ArrayFrom.d.ts
│   │       │   │   ├── uint32ArrayFrom.js
│   │       │   │   └── uint32ArrayFrom.js.map
│   │       │   └── module
│   │       │       ├── convertToBuffer.d.ts
│   │       │       ├── convertToBuffer.js
│   │       │       ├── convertToBuffer.js.map
│   │       │       ├── index.d.ts
│   │       │       ├── index.js
│   │       │       ├── index.js.map
│   │       │       ├── isEmptyData.d.ts
│   │       │       ├── isEmptyData.js
│   │       │       ├── isEmptyData.js.map
│   │       │       ├── numToUint8.d.ts
│   │       │       ├── numToUint8.js
│   │       │       ├── numToUint8.js.map
│   │       │       ├── uint32ArrayFrom.d.ts
│   │       │       ├── uint32ArrayFrom.js
│   │       │       └── uint32ArrayFrom.js.map
│   │       ├── node_modules
│   │       │   └── @smithy
│   │       │       ├── is-array-buffer
│   │       │       │   ├── LICENSE
│   │       │       │   ├── README.md
│   │       │       │   ├── dist-cjs
│   │       │       │   │   └── index.js
│   │       │       │   ├── dist-es
│   │       │       │   │   └── index.js
│   │       │       │   ├── dist-types
│   │       │       │   │   ├── index.d.ts
│   │       │       │   │   └── ts3.4
│   │       │       │   │       └── index.d.ts
│   │       │       │   └── package.json
│   │       │       ├── util-buffer-from
│   │       │       │   ├── LICENSE
│   │       │       │   ├── README.md
│   │       │       │   ├── dist-cjs
│   │       │       │   │   └── index.js
│   │       │       │   ├── dist-es
│   │       │       │   │   └── index.js
│   │       │       │   ├── dist-types
│   │       │       │   │   ├── index.d.ts
│   │       │       │   │   └── ts3.4
│   │       │       │   │       └── index.d.ts
│   │       │       │   └── package.json
│   │       │       └── util-utf8
│   │       │           ├── LICENSE
│   │       │           ├── README.md
│   │       │           ├── dist-cjs
│   │       │           │   ├── fromUtf8.browser.js
│   │       │           │   ├── fromUtf8.js
│   │       │           │   ├── index.js
│   │       │           │   ├── toUint8Array.js
│   │       │           │   ├── toUtf8.browser.js
│   │       │           │   └── toUtf8.js
│   │       │           ├── dist-es
│   │       │           │   ├── fromUtf8.browser.js
│   │       │           │   ├── fromUtf8.js
│   │       │           │   ├── index.js
│   │       │           │   ├── toUint8Array.js
│   │       │           │   ├── toUtf8.browser.js
│   │       │           │   └── toUtf8.js
│   │       │           ├── dist-types
│   │       │           │   ├── fromUtf8.browser.d.ts
│   │       │           │   ├── fromUtf8.d.ts
│   │       │           │   ├── index.d.ts
│   │       │           │   ├── toUint8Array.d.ts
│   │       │           │   ├── toUtf8.browser.d.ts
│   │       │           │   ├── toUtf8.d.ts
│   │       │           │   └── ts3.4
│   │       │           │       ├── fromUtf8.browser.d.ts
│   │       │           │       ├── fromUtf8.d.ts
│   │       │           │       ├── index.d.ts
│   │       │           │       ├── toUint8Array.d.ts
│   │       │           │       ├── toUtf8.browser.d.ts
│   │       │           │       └── toUtf8.d.ts
│   │       │           └── package.json
│   │       ├── package.json
│   │       ├── src
│   │       │   ├── convertToBuffer.ts
│   │       │   ├── index.ts
│   │       │   ├── isEmptyData.ts
│   │       │   ├── numToUint8.ts
│   │       │   └── uint32ArrayFrom.ts
│   │       ├── tsconfig.json
│   │       └── tsconfig.module.json
│   ├── @aws-sdk
│   │   ├── client-iam
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── auth
│   │   │   │   │   └── httpAuthSchemeProvider.js
│   │   │   │   ├── endpoint
│   │   │   │   │   ├── endpointResolver.js
│   │   │   │   │   └── ruleset.js
│   │   │   │   ├── index.js
│   │   │   │   ├── runtimeConfig.browser.js
│   │   │   │   ├── runtimeConfig.js
│   │   │   │   ├── runtimeConfig.native.js
│   │   │   │   └── runtimeConfig.shared.js
│   │   │   ├── dist-es
│   │   │   │   ├── IAM.js
│   │   │   │   ├── IAMClient.js
│   │   │   │   ├── auth
│   │   │   │   │   ├── httpAuthExtensionConfiguration.js
│   │   │   │   │   └── httpAuthSchemeProvider.js
│   │   │   │   ├── commands
│   │   │   │   │   ├── AddClientIDToOpenIDConnectProviderCommand.js
│   │   │   │   │   ├── AddRoleToInstanceProfileCommand.js
│   │   │   │   │   ├── AddUserToGroupCommand.js
│   │   │   │   │   ├── AttachGroupPolicyCommand.js
│   │   │   │   │   ├── AttachRolePolicyCommand.js
│   │   │   │   │   ├── AttachUserPolicyCommand.js
│   │   │   │   │   ├── ChangePasswordCommand.js
│   │   │   │   │   ├── CreateAccessKeyCommand.js
│   │   │   │   │   ├── CreateAccountAliasCommand.js
│   │   │   │   │   ├── CreateGroupCommand.js
│   │   │   │   │   ├── CreateInstanceProfileCommand.js
│   │   │   │   │   ├── CreateLoginProfileCommand.js
│   │   │   │   │   ├── CreateOpenIDConnectProviderCommand.js
│   │   │   │   │   ├── CreatePolicyCommand.js
│   │   │   │   │   ├── CreatePolicyVersionCommand.js
│   │   │   │   │   ├── CreateRoleCommand.js
│   │   │   │   │   ├── CreateSAMLProviderCommand.js
│   │   │   │   │   ├── CreateServiceLinkedRoleCommand.js
│   │   │   │   │   ├── CreateServiceSpecificCredentialCommand.js
│   │   │   │   │   ├── CreateUserCommand.js
│   │   │   │   │   ├── CreateVirtualMFADeviceCommand.js
│   │   │   │   │   ├── DeactivateMFADeviceCommand.js
│   │   │   │   │   ├── DeleteAccessKeyCommand.js
│   │   │   │   │   ├── DeleteAccountAliasCommand.js
│   │   │   │   │   ├── DeleteAccountPasswordPolicyCommand.js
│   │   │   │   │   ├── DeleteGroupCommand.js
│   │   │   │   │   ├── DeleteGroupPolicyCommand.js
│   │   │   │   │   ├── DeleteInstanceProfileCommand.js
│   │   │   │   │   ├── DeleteLoginProfileCommand.js
│   │   │   │   │   ├── DeleteOpenIDConnectProviderCommand.js
│   │   │   │   │   ├── DeletePolicyCommand.js
│   │   │   │   │   ├── DeletePolicyVersionCommand.js
│   │   │   │   │   ├── DeleteRoleCommand.js
│   │   │   │   │   ├── DeleteRolePermissionsBoundaryCommand.js
│   │   │   │   │   ├── DeleteRolePolicyCommand.js
│   │   │   │   │   ├── DeleteSAMLProviderCommand.js
│   │   │   │   │   ├── DeleteSSHPublicKeyCommand.js
│   │   │   │   │   ├── DeleteServerCertificateCommand.js
│   │   │   │   │   ├── DeleteServiceLinkedRoleCommand.js
│   │   │   │   │   ├── DeleteServiceSpecificCredentialCommand.js
│   │   │   │   │   ├── DeleteSigningCertificateCommand.js
│   │   │   │   │   ├── DeleteUserCommand.js
│   │   │   │   │   ├── DeleteUserPermissionsBoundaryCommand.js
│   │   │   │   │   ├── DeleteUserPolicyCommand.js
│   │   │   │   │   ├── DeleteVirtualMFADeviceCommand.js
│   │   │   │   │   ├── DetachGroupPolicyCommand.js
│   │   │   │   │   ├── DetachRolePolicyCommand.js
│   │   │   │   │   ├── DetachUserPolicyCommand.js
│   │   │   │   │   ├── DisableOrganizationsRootCredentialsManagementCommand.js
│   │   │   │   │   ├── DisableOrganizationsRootSessionsCommand.js
│   │   │   │   │   ├── EnableMFADeviceCommand.js
│   │   │   │   │   ├── EnableOrganizationsRootCredentialsManagementCommand.js
│   │   │   │   │   ├── EnableOrganizationsRootSessionsCommand.js
│   │   │   │   │   ├── GenerateCredentialReportCommand.js
│   │   │   │   │   ├── GenerateOrganizationsAccessReportCommand.js
│   │   │   │   │   ├── GenerateServiceLastAccessedDetailsCommand.js
│   │   │   │   │   ├── GetAccessKeyLastUsedCommand.js
│   │   │   │   │   ├── GetAccountAuthorizationDetailsCommand.js
│   │   │   │   │   ├── GetAccountPasswordPolicyCommand.js
│   │   │   │   │   ├── GetAccountSummaryCommand.js
│   │   │   │   │   ├── GetContextKeysForCustomPolicyCommand.js
│   │   │   │   │   ├── GetContextKeysForPrincipalPolicyCommand.js
│   │   │   │   │   ├── GetCredentialReportCommand.js
│   │   │   │   │   ├── GetGroupCommand.js
│   │   │   │   │   ├── GetGroupPolicyCommand.js
│   │   │   │   │   ├── GetInstanceProfileCommand.js
│   │   │   │   │   ├── GetLoginProfileCommand.js
│   │   │   │   │   ├── GetMFADeviceCommand.js
│   │   │   │   │   ├── GetOpenIDConnectProviderCommand.js
│   │   │   │   │   ├── GetOrganizationsAccessReportCommand.js
│   │   │   │   │   ├── GetPolicyCommand.js
│   │   │   │   │   ├── GetPolicyVersionCommand.js
│   │   │   │   │   ├── GetRoleCommand.js
│   │   │   │   │   ├── GetRolePolicyCommand.js
│   │   │   │   │   ├── GetSAMLProviderCommand.js
│   │   │   │   │   ├── GetSSHPublicKeyCommand.js
│   │   │   │   │   ├── GetServerCertificateCommand.js
│   │   │   │   │   ├── GetServiceLastAccessedDetailsCommand.js
│   │   │   │   │   ├── GetServiceLastAccessedDetailsWithEntitiesCommand.js
│   │   │   │   │   ├── GetServiceLinkedRoleDeletionStatusCommand.js
│   │   │   │   │   ├── GetUserCommand.js
│   │   │   │   │   ├── GetUserPolicyCommand.js
│   │   │   │   │   ├── ListAccessKeysCommand.js
│   │   │   │   │   ├── ListAccountAliasesCommand.js
│   │   │   │   │   ├── ListAttachedGroupPoliciesCommand.js
│   │   │   │   │   ├── ListAttachedRolePoliciesCommand.js
│   │   │   │   │   ├── ListAttachedUserPoliciesCommand.js
│   │   │   │   │   ├── ListEntitiesForPolicyCommand.js
│   │   │   │   │   ├── ListGroupPoliciesCommand.js
│   │   │   │   │   ├── ListGroupsCommand.js
│   │   │   │   │   ├── ListGroupsForUserCommand.js
│   │   │   │   │   ├── ListInstanceProfileTagsCommand.js
│   │   │   │   │   ├── ListInstanceProfilesCommand.js
│   │   │   │   │   ├── ListInstanceProfilesForRoleCommand.js
│   │   │   │   │   ├── ListMFADeviceTagsCommand.js
│   │   │   │   │   ├── ListMFADevicesCommand.js
│   │   │   │   │   ├── ListOpenIDConnectProviderTagsCommand.js
│   │   │   │   │   ├── ListOpenIDConnectProvidersCommand.js
│   │   │   │   │   ├── ListOrganizationsFeaturesCommand.js
│   │   │   │   │   ├── ListPoliciesCommand.js
│   │   │   │   │   ├── ListPoliciesGrantingServiceAccessCommand.js
│   │   │   │   │   ├── ListPolicyTagsCommand.js
│   │   │   │   │   ├── ListPolicyVersionsCommand.js
│   │   │   │   │   ├── ListRolePoliciesCommand.js
│   │   │   │   │   ├── ListRoleTagsCommand.js
│   │   │   │   │   ├── ListRolesCommand.js
│   │   │   │   │   ├── ListSAMLProviderTagsCommand.js
│   │   │   │   │   ├── ListSAMLProvidersCommand.js
│   │   │   │   │   ├── ListSSHPublicKeysCommand.js
│   │   │   │   │   ├── ListServerCertificateTagsCommand.js
│   │   │   │   │   ├── ListServerCertificatesCommand.js
│   │   │   │   │   ├── ListServiceSpecificCredentialsCommand.js
│   │   │   │   │   ├── ListSigningCertificatesCommand.js
│   │   │   │   │   ├── ListUserPoliciesCommand.js
│   │   │   │   │   ├── ListUserTagsCommand.js
│   │   │   │   │   ├── ListUsersCommand.js
│   │   │   │   │   ├── ListVirtualMFADevicesCommand.js
│   │   │   │   │   ├── PutGroupPolicyCommand.js
│   │   │   │   │   ├── PutRolePermissionsBoundaryCommand.js
│   │   │   │   │   ├── PutRolePolicyCommand.js
│   │   │   │   │   ├── PutUserPermissionsBoundaryCommand.js
│   │   │   │   │   ├── PutUserPolicyCommand.js
│   │   │   │   │   ├── RemoveClientIDFromOpenIDConnectProviderCommand.js
│   │   │   │   │   ├── RemoveRoleFromInstanceProfileCommand.js
│   │   │   │   │   ├── RemoveUserFromGroupCommand.js
│   │   │   │   │   ├── ResetServiceSpecificCredentialCommand.js
│   │   │   │   │   ├── ResyncMFADeviceCommand.js
│   │   │   │   │   ├── SetDefaultPolicyVersionCommand.js
│   │   │   │   │   ├── SetSecurityTokenServicePreferencesCommand.js
│   │   │   │   │   ├── SimulateCustomPolicyCommand.js
│   │   │   │   │   ├── SimulatePrincipalPolicyCommand.js
│   │   │   │   │   ├── TagInstanceProfileCommand.js
│   │   │   │   │   ├── TagMFADeviceCommand.js
│   │   │   │   │   ├── TagOpenIDConnectProviderCommand.js
│   │   │   │   │   ├── TagPolicyCommand.js
│   │   │   │   │   ├── TagRoleCommand.js
│   │   │   │   │   ├── TagSAMLProviderCommand.js
│   │   │   │   │   ├── TagServerCertificateCommand.js
│   │   │   │   │   ├── TagUserCommand.js
│   │   │   │   │   ├── UntagInstanceProfileCommand.js
│   │   │   │   │   ├── UntagMFADeviceCommand.js
│   │   │   │   │   ├── UntagOpenIDConnectProviderCommand.js
│   │   │   │   │   ├── UntagPolicyCommand.js
│   │   │   │   │   ├── UntagRoleCommand.js
│   │   │   │   │   ├── UntagSAMLProviderCommand.js
│   │   │   │   │   ├── UntagServerCertificateCommand.js
│   │   │   │   │   ├── UntagUserCommand.js
│   │   │   │   │   ├── UpdateAccessKeyCommand.js
│   │   │   │   │   ├── UpdateAccountPasswordPolicyCommand.js
│   │   │   │   │   ├── UpdateAssumeRolePolicyCommand.js
│   │   │   │   │   ├── UpdateGroupCommand.js
│   │   │   │   │   ├── UpdateLoginProfileCommand.js
│   │   │   │   │   ├── UpdateOpenIDConnectProviderThumbprintCommand.js
│   │   │   │   │   ├── UpdateRoleCommand.js
│   │   │   │   │   ├── UpdateRoleDescriptionCommand.js
│   │   │   │   │   ├── UpdateSAMLProviderCommand.js
│   │   │   │   │   ├── UpdateSSHPublicKeyCommand.js
│   │   │   │   │   ├── UpdateServerCertificateCommand.js
│   │   │   │   │   ├── UpdateServiceSpecificCredentialCommand.js
│   │   │   │   │   ├── UpdateSigningCertificateCommand.js
│   │   │   │   │   ├── UpdateUserCommand.js
│   │   │   │   │   ├── UploadSSHPublicKeyCommand.js
│   │   │   │   │   ├── UploadServerCertificateCommand.js
│   │   │   │   │   ├── UploadSigningCertificateCommand.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── endpoint
│   │   │   │   │   ├── EndpointParameters.js
│   │   │   │   │   ├── endpointResolver.js
│   │   │   │   │   └── ruleset.js
│   │   │   │   ├── extensionConfiguration.js
│   │   │   │   ├── index.js
│   │   │   │   ├── models
│   │   │   │   │   ├── IAMServiceException.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── models_0.js
│   │   │   │   │   └── models_1.js
│   │   │   │   ├── pagination
│   │   │   │   │   ├── GetAccountAuthorizationDetailsPaginator.js
│   │   │   │   │   ├── GetGroupPaginator.js
│   │   │   │   │   ├── Interfaces.js
│   │   │   │   │   ├── ListAccessKeysPaginator.js
│   │   │   │   │   ├── ListAccountAliasesPaginator.js
│   │   │   │   │   ├── ListAttachedGroupPoliciesPaginator.js
│   │   │   │   │   ├── ListAttachedRolePoliciesPaginator.js
│   │   │   │   │   ├── ListAttachedUserPoliciesPaginator.js
│   │   │   │   │   ├── ListEntitiesForPolicyPaginator.js
│   │   │   │   │   ├── ListGroupPoliciesPaginator.js
│   │   │   │   │   ├── ListGroupsForUserPaginator.js
│   │   │   │   │   ├── ListGroupsPaginator.js
│   │   │   │   │   ├── ListInstanceProfileTagsPaginator.js
│   │   │   │   │   ├── ListInstanceProfilesForRolePaginator.js
│   │   │   │   │   ├── ListInstanceProfilesPaginator.js
│   │   │   │   │   ├── ListMFADeviceTagsPaginator.js
│   │   │   │   │   ├── ListMFADevicesPaginator.js
│   │   │   │   │   ├── ListOpenIDConnectProviderTagsPaginator.js
│   │   │   │   │   ├── ListPoliciesPaginator.js
│   │   │   │   │   ├── ListPolicyTagsPaginator.js
│   │   │   │   │   ├── ListPolicyVersionsPaginator.js
│   │   │   │   │   ├── ListRolePoliciesPaginator.js
│   │   │   │   │   ├── ListRoleTagsPaginator.js
│   │   │   │   │   ├── ListRolesPaginator.js
│   │   │   │   │   ├── ListSAMLProviderTagsPaginator.js
│   │   │   │   │   ├── ListSSHPublicKeysPaginator.js
│   │   │   │   │   ├── ListServerCertificateTagsPaginator.js
│   │   │   │   │   ├── ListServerCertificatesPaginator.js
│   │   │   │   │   ├── ListSigningCertificatesPaginator.js
│   │   │   │   │   ├── ListUserPoliciesPaginator.js
│   │   │   │   │   ├── ListUserTagsPaginator.js
│   │   │   │   │   ├── ListUsersPaginator.js
│   │   │   │   │   ├── ListVirtualMFADevicesPaginator.js
│   │   │   │   │   ├── SimulateCustomPolicyPaginator.js
│   │   │   │   │   ├── SimulatePrincipalPolicyPaginator.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── protocols
│   │   │   │   │   └── Aws_query.js
│   │   │   │   ├── runtimeConfig.browser.js
│   │   │   │   ├── runtimeConfig.js
│   │   │   │   ├── runtimeConfig.native.js
│   │   │   │   ├── runtimeConfig.shared.js
│   │   │   │   ├── runtimeExtensions.js
│   │   │   │   └── waiters
│   │   │   │       ├── index.js
│   │   │   │       ├── waitForInstanceProfileExists.js
│   │   │   │       ├── waitForPolicyExists.js
│   │   │   │       ├── waitForRoleExists.js
│   │   │   │       └── waitForUserExists.js
│   │   │   ├── dist-types
│   │   │   │   ├── IAM.d.ts
│   │   │   │   ├── IAMClient.d.ts
│   │   │   │   ├── auth
│   │   │   │   │   ├── httpAuthExtensionConfiguration.d.ts
│   │   │   │   │   └── httpAuthSchemeProvider.d.ts
│   │   │   │   ├── commands
│   │   │   │   │   ├── AddClientIDToOpenIDConnectProviderCommand.d.ts
│   │   │   │   │   ├── AddRoleToInstanceProfileCommand.d.ts
│   │   │   │   │   ├── AddUserToGroupCommand.d.ts
│   │   │   │   │   ├── AttachGroupPolicyCommand.d.ts
│   │   │   │   │   ├── AttachRolePolicyCommand.d.ts
│   │   │   │   │   ├── AttachUserPolicyCommand.d.ts
│   │   │   │   │   ├── ChangePasswordCommand.d.ts
│   │   │   │   │   ├── CreateAccessKeyCommand.d.ts
│   │   │   │   │   ├── CreateAccountAliasCommand.d.ts
│   │   │   │   │   ├── CreateGroupCommand.d.ts
│   │   │   │   │   ├── CreateInstanceProfileCommand.d.ts
│   │   │   │   │   ├── CreateLoginProfileCommand.d.ts
│   │   │   │   │   ├── CreateOpenIDConnectProviderCommand.d.ts
│   │   │   │   │   ├── CreatePolicyCommand.d.ts
│   │   │   │   │   ├── CreatePolicyVersionCommand.d.ts
│   │   │   │   │   ├── CreateRoleCommand.d.ts
│   │   │   │   │   ├── CreateSAMLProviderCommand.d.ts
│   │   │   │   │   ├── CreateServiceLinkedRoleCommand.d.ts
│   │   │   │   │   ├── CreateServiceSpecificCredentialCommand.d.ts
│   │   │   │   │   ├── CreateUserCommand.d.ts
│   │   │   │   │   ├── CreateVirtualMFADeviceCommand.d.ts
│   │   │   │   │   ├── DeactivateMFADeviceCommand.d.ts
│   │   │   │   │   ├── DeleteAccessKeyCommand.d.ts
│   │   │   │   │   ├── DeleteAccountAliasCommand.d.ts
│   │   │   │   │   ├── DeleteAccountPasswordPolicyCommand.d.ts
│   │   │   │   │   ├── DeleteGroupCommand.d.ts
│   │   │   │   │   ├── DeleteGroupPolicyCommand.d.ts
│   │   │   │   │   ├── DeleteInstanceProfileCommand.d.ts
│   │   │   │   │   ├── DeleteLoginProfileCommand.d.ts
│   │   │   │   │   ├── DeleteOpenIDConnectProviderCommand.d.ts
│   │   │   │   │   ├── DeletePolicyCommand.d.ts
│   │   │   │   │   ├── DeletePolicyVersionCommand.d.ts
│   │   │   │   │   ├── DeleteRoleCommand.d.ts
│   │   │   │   │   ├── DeleteRolePermissionsBoundaryCommand.d.ts
│   │   │   │   │   ├── DeleteRolePolicyCommand.d.ts
│   │   │   │   │   ├── DeleteSAMLProviderCommand.d.ts
│   │   │   │   │   ├── DeleteSSHPublicKeyCommand.d.ts
│   │   │   │   │   ├── DeleteServerCertificateCommand.d.ts
│   │   │   │   │   ├── DeleteServiceLinkedRoleCommand.d.ts
│   │   │   │   │   ├── DeleteServiceSpecificCredentialCommand.d.ts
│   │   │   │   │   ├── DeleteSigningCertificateCommand.d.ts
│   │   │   │   │   ├── DeleteUserCommand.d.ts
│   │   │   │   │   ├── DeleteUserPermissionsBoundaryCommand.d.ts
│   │   │   │   │   ├── DeleteUserPolicyCommand.d.ts
│   │   │   │   │   ├── DeleteVirtualMFADeviceCommand.d.ts
│   │   │   │   │   ├── DetachGroupPolicyCommand.d.ts
│   │   │   │   │   ├── DetachRolePolicyCommand.d.ts
│   │   │   │   │   ├── DetachUserPolicyCommand.d.ts
│   │   │   │   │   ├── DisableOrganizationsRootCredentialsManagementCommand.d.ts
│   │   │   │   │   ├── DisableOrganizationsRootSessionsCommand.d.ts
│   │   │   │   │   ├── EnableMFADeviceCommand.d.ts
│   │   │   │   │   ├── EnableOrganizationsRootCredentialsManagementCommand.d.ts
│   │   │   │   │   ├── EnableOrganizationsRootSessionsCommand.d.ts
│   │   │   │   │   ├── GenerateCredentialReportCommand.d.ts
│   │   │   │   │   ├── GenerateOrganizationsAccessReportCommand.d.ts
│   │   │   │   │   ├── GenerateServiceLastAccessedDetailsCommand.d.ts
│   │   │   │   │   ├── GetAccessKeyLastUsedCommand.d.ts
│   │   │   │   │   ├── GetAccountAuthorizationDetailsCommand.d.ts
│   │   │   │   │   ├── GetAccountPasswordPolicyCommand.d.ts
│   │   │   │   │   ├── GetAccountSummaryCommand.d.ts
│   │   │   │   │   ├── GetContextKeysForCustomPolicyCommand.d.ts
│   │   │   │   │   ├── GetContextKeysForPrincipalPolicyCommand.d.ts
│   │   │   │   │   ├── GetCredentialReportCommand.d.ts
│   │   │   │   │   ├── GetGroupCommand.d.ts
│   │   │   │   │   ├── GetGroupPolicyCommand.d.ts
│   │   │   │   │   ├── GetInstanceProfileCommand.d.ts
│   │   │   │   │   ├── GetLoginProfileCommand.d.ts
│   │   │   │   │   ├── GetMFADeviceCommand.d.ts
│   │   │   │   │   ├── GetOpenIDConnectProviderCommand.d.ts
│   │   │   │   │   ├── GetOrganizationsAccessReportCommand.d.ts
│   │   │   │   │   ├── GetPolicyCommand.d.ts
│   │   │   │   │   ├── GetPolicyVersionCommand.d.ts
│   │   │   │   │   ├── GetRoleCommand.d.ts
│   │   │   │   │   ├── GetRolePolicyCommand.d.ts
│   │   │   │   │   ├── GetSAMLProviderCommand.d.ts
│   │   │   │   │   ├── GetSSHPublicKeyCommand.d.ts
│   │   │   │   │   ├── GetServerCertificateCommand.d.ts
│   │   │   │   │   ├── GetServiceLastAccessedDetailsCommand.d.ts
│   │   │   │   │   ├── GetServiceLastAccessedDetailsWithEntitiesCommand.d.ts
│   │   │   │   │   ├── GetServiceLinkedRoleDeletionStatusCommand.d.ts
│   │   │   │   │   ├── GetUserCommand.d.ts
│   │   │   │   │   ├── GetUserPolicyCommand.d.ts
│   │   │   │   │   ├── ListAccessKeysCommand.d.ts
│   │   │   │   │   ├── ListAccountAliasesCommand.d.ts
│   │   │   │   │   ├── ListAttachedGroupPoliciesCommand.d.ts
│   │   │   │   │   ├── ListAttachedRolePoliciesCommand.d.ts
│   │   │   │   │   ├── ListAttachedUserPoliciesCommand.d.ts
│   │   │   │   │   ├── ListEntitiesForPolicyCommand.d.ts
│   │   │   │   │   ├── ListGroupPoliciesCommand.d.ts
│   │   │   │   │   ├── ListGroupsCommand.d.ts
│   │   │   │   │   ├── ListGroupsForUserCommand.d.ts
│   │   │   │   │   ├── ListInstanceProfileTagsCommand.d.ts
│   │   │   │   │   ├── ListInstanceProfilesCommand.d.ts
│   │   │   │   │   ├── ListInstanceProfilesForRoleCommand.d.ts
│   │   │   │   │   ├── ListMFADeviceTagsCommand.d.ts
│   │   │   │   │   ├── ListMFADevicesCommand.d.ts
│   │   │   │   │   ├── ListOpenIDConnectProviderTagsCommand.d.ts
│   │   │   │   │   ├── ListOpenIDConnectProvidersCommand.d.ts
│   │   │   │   │   ├── ListOrganizationsFeaturesCommand.d.ts
│   │   │   │   │   ├── ListPoliciesCommand.d.ts
│   │   │   │   │   ├── ListPoliciesGrantingServiceAccessCommand.d.ts
│   │   │   │   │   ├── ListPolicyTagsCommand.d.ts
│   │   │   │   │   ├── ListPolicyVersionsCommand.d.ts
│   │   │   │   │   ├── ListRolePoliciesCommand.d.ts
│   │   │   │   │   ├── ListRoleTagsCommand.d.ts
│   │   │   │   │   ├── ListRolesCommand.d.ts
│   │   │   │   │   ├── ListSAMLProviderTagsCommand.d.ts
│   │   │   │   │   ├── ListSAMLProvidersCommand.d.ts
│   │   │   │   │   ├── ListSSHPublicKeysCommand.d.ts
│   │   │   │   │   ├── ListServerCertificateTagsCommand.d.ts
│   │   │   │   │   ├── ListServerCertificatesCommand.d.ts
│   │   │   │   │   ├── ListServiceSpecificCredentialsCommand.d.ts
│   │   │   │   │   ├── ListSigningCertificatesCommand.d.ts
│   │   │   │   │   ├── ListUserPoliciesCommand.d.ts
│   │   │   │   │   ├── ListUserTagsCommand.d.ts
│   │   │   │   │   ├── ListUsersCommand.d.ts
│   │   │   │   │   ├── ListVirtualMFADevicesCommand.d.ts
│   │   │   │   │   ├── PutGroupPolicyCommand.d.ts
│   │   │   │   │   ├── PutRolePermissionsBoundaryCommand.d.ts
│   │   │   │   │   ├── PutRolePolicyCommand.d.ts
│   │   │   │   │   ├── PutUserPermissionsBoundaryCommand.d.ts
│   │   │   │   │   ├── PutUserPolicyCommand.d.ts
│   │   │   │   │   ├── RemoveClientIDFromOpenIDConnectProviderCommand.d.ts
│   │   │   │   │   ├── RemoveRoleFromInstanceProfileCommand.d.ts
│   │   │   │   │   ├── RemoveUserFromGroupCommand.d.ts
│   │   │   │   │   ├── ResetServiceSpecificCredentialCommand.d.ts
│   │   │   │   │   ├── ResyncMFADeviceCommand.d.ts
│   │   │   │   │   ├── SetDefaultPolicyVersionCommand.d.ts
│   │   │   │   │   ├── SetSecurityTokenServicePreferencesCommand.d.ts
│   │   │   │   │   ├── SimulateCustomPolicyCommand.d.ts
│   │   │   │   │   ├── SimulatePrincipalPolicyCommand.d.ts
│   │   │   │   │   ├── TagInstanceProfileCommand.d.ts
│   │   │   │   │   ├── TagMFADeviceCommand.d.ts
│   │   │   │   │   ├── TagOpenIDConnectProviderCommand.d.ts
│   │   │   │   │   ├── TagPolicyCommand.d.ts
│   │   │   │   │   ├── TagRoleCommand.d.ts
│   │   │   │   │   ├── TagSAMLProviderCommand.d.ts
│   │   │   │   │   ├── TagServerCertificateCommand.d.ts
│   │   │   │   │   ├── TagUserCommand.d.ts
│   │   │   │   │   ├── UntagInstanceProfileCommand.d.ts
│   │   │   │   │   ├── UntagMFADeviceCommand.d.ts
│   │   │   │   │   ├── UntagOpenIDConnectProviderCommand.d.ts
│   │   │   │   │   ├── UntagPolicyCommand.d.ts
│   │   │   │   │   ├── UntagRoleCommand.d.ts
│   │   │   │   │   ├── UntagSAMLProviderCommand.d.ts
│   │   │   │   │   ├── UntagServerCertificateCommand.d.ts
│   │   │   │   │   ├── UntagUserCommand.d.ts
│   │   │   │   │   ├── UpdateAccessKeyCommand.d.ts
│   │   │   │   │   ├── UpdateAccountPasswordPolicyCommand.d.ts
│   │   │   │   │   ├── UpdateAssumeRolePolicyCommand.d.ts
│   │   │   │   │   ├── UpdateGroupCommand.d.ts
│   │   │   │   │   ├── UpdateLoginProfileCommand.d.ts
│   │   │   │   │   ├── UpdateOpenIDConnectProviderThumbprintCommand.d.ts
│   │   │   │   │   ├── UpdateRoleCommand.d.ts
│   │   │   │   │   ├── UpdateRoleDescriptionCommand.d.ts
│   │   │   │   │   ├── UpdateSAMLProviderCommand.d.ts
│   │   │   │   │   ├── UpdateSSHPublicKeyCommand.d.ts
│   │   │   │   │   ├── UpdateServerCertificateCommand.d.ts
│   │   │   │   │   ├── UpdateServiceSpecificCredentialCommand.d.ts
│   │   │   │   │   ├── UpdateSigningCertificateCommand.d.ts
│   │   │   │   │   ├── UpdateUserCommand.d.ts
│   │   │   │   │   ├── UploadSSHPublicKeyCommand.d.ts
│   │   │   │   │   ├── UploadServerCertificateCommand.d.ts
│   │   │   │   │   ├── UploadSigningCertificateCommand.d.ts
│   │   │   │   │   └── index.d.ts
│   │   │   │   ├── endpoint
│   │   │   │   │   ├── EndpointParameters.d.ts
│   │   │   │   │   ├── endpointResolver.d.ts
│   │   │   │   │   └── ruleset.d.ts
│   │   │   │   ├── extensionConfiguration.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── models
│   │   │   │   │   ├── IAMServiceException.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── models_0.d.ts
│   │   │   │   │   └── models_1.d.ts
│   │   │   │   ├── pagination
│   │   │   │   │   ├── GetAccountAuthorizationDetailsPaginator.d.ts
│   │   │   │   │   ├── GetGroupPaginator.d.ts
│   │   │   │   │   ├── Interfaces.d.ts
│   │   │   │   │   ├── ListAccessKeysPaginator.d.ts
│   │   │   │   │   ├── ListAccountAliasesPaginator.d.ts
│   │   │   │   │   ├── ListAttachedGroupPoliciesPaginator.d.ts
│   │   │   │   │   ├── ListAttachedRolePoliciesPaginator.d.ts
│   │   │   │   │   ├── ListAttachedUserPoliciesPaginator.d.ts
│   │   │   │   │   ├── ListEntitiesForPolicyPaginator.d.ts
│   │   │   │   │   ├── ListGroupPoliciesPaginator.d.ts
│   │   │   │   │   ├── ListGroupsForUserPaginator.d.ts
│   │   │   │   │   ├── ListGroupsPaginator.d.ts
│   │   │   │   │   ├── ListInstanceProfileTagsPaginator.d.ts
│   │   │   │   │   ├── ListInstanceProfilesForRolePaginator.d.ts
│   │   │   │   │   ├── ListInstanceProfilesPaginator.d.ts
│   │   │   │   │   ├── ListMFADeviceTagsPaginator.d.ts
│   │   │   │   │   ├── ListMFADevicesPaginator.d.ts
│   │   │   │   │   ├── ListOpenIDConnectProviderTagsPaginator.d.ts
│   │   │   │   │   ├── ListPoliciesPaginator.d.ts
│   │   │   │   │   ├── ListPolicyTagsPaginator.d.ts
│   │   │   │   │   ├── ListPolicyVersionsPaginator.d.ts
│   │   │   │   │   ├── ListRolePoliciesPaginator.d.ts
│   │   │   │   │   ├── ListRoleTagsPaginator.d.ts
│   │   │   │   │   ├── ListRolesPaginator.d.ts
│   │   │   │   │   ├── ListSAMLProviderTagsPaginator.d.ts
│   │   │   │   │   ├── ListSSHPublicKeysPaginator.d.ts
│   │   │   │   │   ├── ListServerCertificateTagsPaginator.d.ts
│   │   │   │   │   ├── ListServerCertificatesPaginator.d.ts
│   │   │   │   │   ├── ListSigningCertificatesPaginator.d.ts
│   │   │   │   │   ├── ListUserPoliciesPaginator.d.ts
│   │   │   │   │   ├── ListUserTagsPaginator.d.ts
│   │   │   │   │   ├── ListUsersPaginator.d.ts
│   │   │   │   │   ├── ListVirtualMFADevicesPaginator.d.ts
│   │   │   │   │   ├── SimulateCustomPolicyPaginator.d.ts
│   │   │   │   │   ├── SimulatePrincipalPolicyPaginator.d.ts
│   │   │   │   │   └── index.d.ts
│   │   │   │   ├── protocols
│   │   │   │   │   └── Aws_query.d.ts
│   │   │   │   ├── runtimeConfig.browser.d.ts
│   │   │   │   ├── runtimeConfig.d.ts
│   │   │   │   ├── runtimeConfig.native.d.ts
│   │   │   │   ├── runtimeConfig.shared.d.ts
│   │   │   │   ├── runtimeExtensions.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── IAM.d.ts
│   │   │   │   │   ├── IAMClient.d.ts
│   │   │   │   │   ├── auth
│   │   │   │   │   │   ├── httpAuthExtensionConfiguration.d.ts
│   │   │   │   │   │   └── httpAuthSchemeProvider.d.ts
│   │   │   │   │   ├── commands
│   │   │   │   │   │   ├── AddClientIDToOpenIDConnectProviderCommand.d.ts
│   │   │   │   │   │   ├── AddRoleToInstanceProfileCommand.d.ts
│   │   │   │   │   │   ├── AddUserToGroupCommand.d.ts
│   │   │   │   │   │   ├── AttachGroupPolicyCommand.d.ts
│   │   │   │   │   │   ├── AttachRolePolicyCommand.d.ts
│   │   │   │   │   │   ├── AttachUserPolicyCommand.d.ts
│   │   │   │   │   │   ├── ChangePasswordCommand.d.ts
│   │   │   │   │   │   ├── CreateAccessKeyCommand.d.ts
│   │   │   │   │   │   ├── CreateAccountAliasCommand.d.ts
│   │   │   │   │   │   ├── CreateGroupCommand.d.ts
│   │   │   │   │   │   ├── CreateInstanceProfileCommand.d.ts
│   │   │   │   │   │   ├── CreateLoginProfileCommand.d.ts
│   │   │   │   │   │   ├── CreateOpenIDConnectProviderCommand.d.ts
│   │   │   │   │   │   ├── CreatePolicyCommand.d.ts
│   │   │   │   │   │   ├── CreatePolicyVersionCommand.d.ts
│   │   │   │   │   │   ├── CreateRoleCommand.d.ts
│   │   │   │   │   │   ├── CreateSAMLProviderCommand.d.ts
│   │   │   │   │   │   ├── CreateServiceLinkedRoleCommand.d.ts
│   │   │   │   │   │   ├── CreateServiceSpecificCredentialCommand.d.ts
│   │   │   │   │   │   ├── CreateUserCommand.d.ts
│   │   │   │   │   │   ├── CreateVirtualMFADeviceCommand.d.ts
│   │   │   │   │   │   ├── DeactivateMFADeviceCommand.d.ts
│   │   │   │   │   │   ├── DeleteAccessKeyCommand.d.ts
│   │   │   │   │   │   ├── DeleteAccountAliasCommand.d.ts
│   │   │   │   │   │   ├── DeleteAccountPasswordPolicyCommand.d.ts
│   │   │   │   │   │   ├── DeleteGroupCommand.d.ts
│   │   │   │   │   │   ├── DeleteGroupPolicyCommand.d.ts
│   │   │   │   │   │   ├── DeleteInstanceProfileCommand.d.ts
│   │   │   │   │   │   ├── DeleteLoginProfileCommand.d.ts
│   │   │   │   │   │   ├── DeleteOpenIDConnectProviderCommand.d.ts
│   │   │   │   │   │   ├── DeletePolicyCommand.d.ts
│   │   │   │   │   │   ├── DeletePolicyVersionCommand.d.ts
│   │   │   │   │   │   ├── DeleteRoleCommand.d.ts
│   │   │   │   │   │   ├── DeleteRolePermissionsBoundaryCommand.d.ts
│   │   │   │   │   │   ├── DeleteRolePolicyCommand.d.ts
│   │   │   │   │   │   ├── DeleteSAMLProviderCommand.d.ts
│   │   │   │   │   │   ├── DeleteSSHPublicKeyCommand.d.ts
│   │   │   │   │   │   ├── DeleteServerCertificateCommand.d.ts
│   │   │   │   │   │   ├── DeleteServiceLinkedRoleCommand.d.ts
│   │   │   │   │   │   ├── DeleteServiceSpecificCredentialCommand.d.ts
│   │   │   │   │   │   ├── DeleteSigningCertificateCommand.d.ts
│   │   │   │   │   │   ├── DeleteUserCommand.d.ts
│   │   │   │   │   │   ├── DeleteUserPermissionsBoundaryCommand.d.ts
│   │   │   │   │   │   ├── DeleteUserPolicyCommand.d.ts
│   │   │   │   │   │   ├── DeleteVirtualMFADeviceCommand.d.ts
│   │   │   │   │   │   ├── DetachGroupPolicyCommand.d.ts
│   │   │   │   │   │   ├── DetachRolePolicyCommand.d.ts
│   │   │   │   │   │   ├── DetachUserPolicyCommand.d.ts
│   │   │   │   │   │   ├── DisableOrganizationsRootCredentialsManagementCommand.d.ts
│   │   │   │   │   │   ├── DisableOrganizationsRootSessionsCommand.d.ts
│   │   │   │   │   │   ├── EnableMFADeviceCommand.d.ts
│   │   │   │   │   │   ├── EnableOrganizationsRootCredentialsManagementCommand.d.ts
│   │   │   │   │   │   ├── EnableOrganizationsRootSessionsCommand.d.ts
│   │   │   │   │   │   ├── GenerateCredentialReportCommand.d.ts
│   │   │   │   │   │   ├── GenerateOrganizationsAccessReportCommand.d.ts
│   │   │   │   │   │   ├── GenerateServiceLastAccessedDetailsCommand.d.ts
│   │   │   │   │   │   ├── GetAccessKeyLastUsedCommand.d.ts
│   │   │   │   │   │   ├── GetAccountAuthorizationDetailsCommand.d.ts
│   │   │   │   │   │   ├── GetAccountPasswordPolicyCommand.d.ts
│   │   │   │   │   │   ├── GetAccountSummaryCommand.d.ts
│   │   │   │   │   │   ├── GetContextKeysForCustomPolicyCommand.d.ts
│   │   │   │   │   │   ├── GetContextKeysForPrincipalPolicyCommand.d.ts
│   │   │   │   │   │   ├── GetCredentialReportCommand.d.ts
│   │   │   │   │   │   ├── GetGroupCommand.d.ts
│   │   │   │   │   │   ├── GetGroupPolicyCommand.d.ts
│   │   │   │   │   │   ├── GetInstanceProfileCommand.d.ts
│   │   │   │   │   │   ├── GetLoginProfileCommand.d.ts
│   │   │   │   │   │   ├── GetMFADeviceCommand.d.ts
│   │   │   │   │   │   ├── GetOpenIDConnectProviderCommand.d.ts
│   │   │   │   │   │   ├── GetOrganizationsAccessReportCommand.d.ts
│   │   │   │   │   │   ├── GetPolicyCommand.d.ts
│   │   │   │   │   │   ├── GetPolicyVersionCommand.d.ts
│   │   │   │   │   │   ├── GetRoleCommand.d.ts
│   │   │   │   │   │   ├── GetRolePolicyCommand.d.ts
│   │   │   │   │   │   ├── GetSAMLProviderCommand.d.ts
│   │   │   │   │   │   ├── GetSSHPublicKeyCommand.d.ts
│   │   │   │   │   │   ├── GetServerCertificateCommand.d.ts
│   │   │   │   │   │   ├── GetServiceLastAccessedDetailsCommand.d.ts
│   │   │   │   │   │   ├── GetServiceLastAccessedDetailsWithEntitiesCommand.d.ts
│   │   │   │   │   │   ├── GetServiceLinkedRoleDeletionStatusCommand.d.ts
│   │   │   │   │   │   ├── GetUserCommand.d.ts
│   │   │   │   │   │   ├── GetUserPolicyCommand.d.ts
│   │   │   │   │   │   ├── ListAccessKeysCommand.d.ts
│   │   │   │   │   │   ├── ListAccountAliasesCommand.d.ts
│   │   │   │   │   │   ├── ListAttachedGroupPoliciesCommand.d.ts
│   │   │   │   │   │   ├── ListAttachedRolePoliciesCommand.d.ts
│   │   │   │   │   │   ├── ListAttachedUserPoliciesCommand.d.ts
│   │   │   │   │   │   ├── ListEntitiesForPolicyCommand.d.ts
│   │   │   │   │   │   ├── ListGroupPoliciesCommand.d.ts
│   │   │   │   │   │   ├── ListGroupsCommand.d.ts
│   │   │   │   │   │   ├── ListGroupsForUserCommand.d.ts
│   │   │   │   │   │   ├── ListInstanceProfileTagsCommand.d.ts
│   │   │   │   │   │   ├── ListInstanceProfilesCommand.d.ts
│   │   │   │   │   │   ├── ListInstanceProfilesForRoleCommand.d.ts
│   │   │   │   │   │   ├── ListMFADeviceTagsCommand.d.ts
│   │   │   │   │   │   ├── ListMFADevicesCommand.d.ts
│   │   │   │   │   │   ├── ListOpenIDConnectProviderTagsCommand.d.ts
│   │   │   │   │   │   ├── ListOpenIDConnectProvidersCommand.d.ts
│   │   │   │   │   │   ├── ListOrganizationsFeaturesCommand.d.ts
│   │   │   │   │   │   ├── ListPoliciesCommand.d.ts
│   │   │   │   │   │   ├── ListPoliciesGrantingServiceAccessCommand.d.ts
│   │   │   │   │   │   ├── ListPolicyTagsCommand.d.ts
│   │   │   │   │   │   ├── ListPolicyVersionsCommand.d.ts
│   │   │   │   │   │   ├── ListRolePoliciesCommand.d.ts
│   │   │   │   │   │   ├── ListRoleTagsCommand.d.ts
│   │   │   │   │   │   ├── ListRolesCommand.d.ts
│   │   │   │   │   │   ├── ListSAMLProviderTagsCommand.d.ts
│   │   │   │   │   │   ├── ListSAMLProvidersCommand.d.ts
│   │   │   │   │   │   ├── ListSSHPublicKeysCommand.d.ts
│   │   │   │   │   │   ├── ListServerCertificateTagsCommand.d.ts
│   │   │   │   │   │   ├── ListServerCertificatesCommand.d.ts
│   │   │   │   │   │   ├── ListServiceSpecificCredentialsCommand.d.ts
│   │   │   │   │   │   ├── ListSigningCertificatesCommand.d.ts
│   │   │   │   │   │   ├── ListUserPoliciesCommand.d.ts
│   │   │   │   │   │   ├── ListUserTagsCommand.d.ts
│   │   │   │   │   │   ├── ListUsersCommand.d.ts
│   │   │   │   │   │   ├── ListVirtualMFADevicesCommand.d.ts
│   │   │   │   │   │   ├── PutGroupPolicyCommand.d.ts
│   │   │   │   │   │   ├── PutRolePermissionsBoundaryCommand.d.ts
│   │   │   │   │   │   ├── PutRolePolicyCommand.d.ts
│   │   │   │   │   │   ├── PutUserPermissionsBoundaryCommand.d.ts
│   │   │   │   │   │   ├── PutUserPolicyCommand.d.ts
│   │   │   │   │   │   ├── RemoveClientIDFromOpenIDConnectProviderCommand.d.ts
│   │   │   │   │   │   ├── RemoveRoleFromInstanceProfileCommand.d.ts
│   │   │   │   │   │   ├── RemoveUserFromGroupCommand.d.ts
│   │   │   │   │   │   ├── ResetServiceSpecificCredentialCommand.d.ts
│   │   │   │   │   │   ├── ResyncMFADeviceCommand.d.ts
│   │   │   │   │   │   ├── SetDefaultPolicyVersionCommand.d.ts
│   │   │   │   │   │   ├── SetSecurityTokenServicePreferencesCommand.d.ts
│   │   │   │   │   │   ├── SimulateCustomPolicyCommand.d.ts
│   │   │   │   │   │   ├── SimulatePrincipalPolicyCommand.d.ts
│   │   │   │   │   │   ├── TagInstanceProfileCommand.d.ts
│   │   │   │   │   │   ├── TagMFADeviceCommand.d.ts
│   │   │   │   │   │   ├── TagOpenIDConnectProviderCommand.d.ts
│   │   │   │   │   │   ├── TagPolicyCommand.d.ts
│   │   │   │   │   │   ├── TagRoleCommand.d.ts
│   │   │   │   │   │   ├── TagSAMLProviderCommand.d.ts
│   │   │   │   │   │   ├── TagServerCertificateCommand.d.ts
│   │   │   │   │   │   ├── TagUserCommand.d.ts
│   │   │   │   │   │   ├── UntagInstanceProfileCommand.d.ts
│   │   │   │   │   │   ├── UntagMFADeviceCommand.d.ts
│   │   │   │   │   │   ├── UntagOpenIDConnectProviderCommand.d.ts
│   │   │   │   │   │   ├── UntagPolicyCommand.d.ts
│   │   │   │   │   │   ├── UntagRoleCommand.d.ts
│   │   │   │   │   │   ├── UntagSAMLProviderCommand.d.ts
│   │   │   │   │   │   ├── UntagServerCertificateCommand.d.ts
│   │   │   │   │   │   ├── UntagUserCommand.d.ts
│   │   │   │   │   │   ├── UpdateAccessKeyCommand.d.ts
│   │   │   │   │   │   ├── UpdateAccountPasswordPolicyCommand.d.ts
│   │   │   │   │   │   ├── UpdateAssumeRolePolicyCommand.d.ts
│   │   │   │   │   │   ├── UpdateGroupCommand.d.ts
│   │   │   │   │   │   ├── UpdateLoginProfileCommand.d.ts
│   │   │   │   │   │   ├── UpdateOpenIDConnectProviderThumbprintCommand.d.ts
│   │   │   │   │   │   ├── UpdateRoleCommand.d.ts
│   │   │   │   │   │   ├── UpdateRoleDescriptionCommand.d.ts
│   │   │   │   │   │   ├── UpdateSAMLProviderCommand.d.ts
│   │   │   │   │   │   ├── UpdateSSHPublicKeyCommand.d.ts
│   │   │   │   │   │   ├── UpdateServerCertificateCommand.d.ts
│   │   │   │   │   │   ├── UpdateServiceSpecificCredentialCommand.d.ts
│   │   │   │   │   │   ├── UpdateSigningCertificateCommand.d.ts
│   │   │   │   │   │   ├── UpdateUserCommand.d.ts
│   │   │   │   │   │   ├── UploadSSHPublicKeyCommand.d.ts
│   │   │   │   │   │   ├── UploadServerCertificateCommand.d.ts
│   │   │   │   │   │   ├── UploadSigningCertificateCommand.d.ts
│   │   │   │   │   │   └── index.d.ts
│   │   │   │   │   ├── endpoint
│   │   │   │   │   │   ├── EndpointParameters.d.ts
│   │   │   │   │   │   ├── endpointResolver.d.ts
│   │   │   │   │   │   └── ruleset.d.ts
│   │   │   │   │   ├── extensionConfiguration.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── models
│   │   │   │   │   │   ├── IAMServiceException.d.ts
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── models_0.d.ts
│   │   │   │   │   │   └── models_1.d.ts
│   │   │   │   │   ├── pagination
│   │   │   │   │   │   ├── GetAccountAuthorizationDetailsPaginator.d.ts
│   │   │   │   │   │   ├── GetGroupPaginator.d.ts
│   │   │   │   │   │   ├── Interfaces.d.ts
│   │   │   │   │   │   ├── ListAccessKeysPaginator.d.ts
│   │   │   │   │   │   ├── ListAccountAliasesPaginator.d.ts
│   │   │   │   │   │   ├── ListAttachedGroupPoliciesPaginator.d.ts
│   │   │   │   │   │   ├── ListAttachedRolePoliciesPaginator.d.ts
│   │   │   │   │   │   ├── ListAttachedUserPoliciesPaginator.d.ts
│   │   │   │   │   │   ├── ListEntitiesForPolicyPaginator.d.ts
│   │   │   │   │   │   ├── ListGroupPoliciesPaginator.d.ts
│   │   │   │   │   │   ├── ListGroupsForUserPaginator.d.ts
│   │   │   │   │   │   ├── ListGroupsPaginator.d.ts
│   │   │   │   │   │   ├── ListInstanceProfileTagsPaginator.d.ts
│   │   │   │   │   │   ├── ListInstanceProfilesForRolePaginator.d.ts
│   │   │   │   │   │   ├── ListInstanceProfilesPaginator.d.ts
│   │   │   │   │   │   ├── ListMFADeviceTagsPaginator.d.ts
│   │   │   │   │   │   ├── ListMFADevicesPaginator.d.ts
│   │   │   │   │   │   ├── ListOpenIDConnectProviderTagsPaginator.d.ts
│   │   │   │   │   │   ├── ListPoliciesPaginator.d.ts
│   │   │   │   │   │   ├── ListPolicyTagsPaginator.d.ts
│   │   │   │   │   │   ├── ListPolicyVersionsPaginator.d.ts
│   │   │   │   │   │   ├── ListRolePoliciesPaginator.d.ts
│   │   │   │   │   │   ├── ListRoleTagsPaginator.d.ts
│   │   │   │   │   │   ├── ListRolesPaginator.d.ts
│   │   │   │   │   │   ├── ListSAMLProviderTagsPaginator.d.ts
│   │   │   │   │   │   ├── ListSSHPublicKeysPaginator.d.ts
│   │   │   │   │   │   ├── ListServerCertificateTagsPaginator.d.ts
│   │   │   │   │   │   ├── ListServerCertificatesPaginator.d.ts
│   │   │   │   │   │   ├── ListSigningCertificatesPaginator.d.ts
│   │   │   │   │   │   ├── ListUserPoliciesPaginator.d.ts
│   │   │   │   │   │   ├── ListUserTagsPaginator.d.ts
│   │   │   │   │   │   ├── ListUsersPaginator.d.ts
│   │   │   │   │   │   ├── ListVirtualMFADevicesPaginator.d.ts
│   │   │   │   │   │   ├── SimulateCustomPolicyPaginator.d.ts
│   │   │   │   │   │   ├── SimulatePrincipalPolicyPaginator.d.ts
│   │   │   │   │   │   └── index.d.ts
│   │   │   │   │   ├── protocols
│   │   │   │   │   │   └── Aws_query.d.ts
│   │   │   │   │   ├── runtimeConfig.browser.d.ts
│   │   │   │   │   ├── runtimeConfig.d.ts
│   │   │   │   │   ├── runtimeConfig.native.d.ts
│   │   │   │   │   ├── runtimeConfig.shared.d.ts
│   │   │   │   │   ├── runtimeExtensions.d.ts
│   │   │   │   │   └── waiters
│   │   │   │   │       ├── index.d.ts
│   │   │   │   │       ├── waitForInstanceProfileExists.d.ts
│   │   │   │   │       ├── waitForPolicyExists.d.ts
│   │   │   │   │       ├── waitForRoleExists.d.ts
│   │   │   │   │       └── waitForUserExists.d.ts
│   │   │   │   └── waiters
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── waitForInstanceProfileExists.d.ts
│   │   │   │       ├── waitForPolicyExists.d.ts
│   │   │   │       ├── waitForRoleExists.d.ts
│   │   │   │       └── waitForUserExists.d.ts
│   │   │   └── package.json
│   │   ├── client-s3
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── auth
│   │   │   │   │   └── httpAuthSchemeProvider.js
│   │   │   │   ├── endpoint
│   │   │   │   │   ├── endpointResolver.js
│   │   │   │   │   └── ruleset.js
│   │   │   │   ├── index.js
│   │   │   │   ├── runtimeConfig.browser.js
│   │   │   │   ├── runtimeConfig.js
│   │   │   │   ├── runtimeConfig.native.js
│   │   │   │   └── runtimeConfig.shared.js
│   │   │   ├── dist-es
│   │   │   │   ├── S3.js
│   │   │   │   ├── S3Client.js
│   │   │   │   ├── auth
│   │   │   │   │   ├── httpAuthExtensionConfiguration.js
│   │   │   │   │   └── httpAuthSchemeProvider.js
│   │   │   │   ├── commands
│   │   │   │   │   ├── AbortMultipartUploadCommand.js
│   │   │   │   │   ├── CompleteMultipartUploadCommand.js
│   │   │   │   │   ├── CopyObjectCommand.js
│   │   │   │   │   ├── CreateBucketCommand.js
│   │   │   │   │   ├── CreateBucketMetadataTableConfigurationCommand.js
│   │   │   │   │   ├── CreateMultipartUploadCommand.js
│   │   │   │   │   ├── CreateSessionCommand.js
│   │   │   │   │   ├── DeleteBucketAnalyticsConfigurationCommand.js
│   │   │   │   │   ├── DeleteBucketCommand.js
│   │   │   │   │   ├── DeleteBucketCorsCommand.js
│   │   │   │   │   ├── DeleteBucketEncryptionCommand.js
│   │   │   │   │   ├── DeleteBucketIntelligentTieringConfigurationCommand.js
│   │   │   │   │   ├── DeleteBucketInventoryConfigurationCommand.js
│   │   │   │   │   ├── DeleteBucketLifecycleCommand.js
│   │   │   │   │   ├── DeleteBucketMetadataTableConfigurationCommand.js
│   │   │   │   │   ├── DeleteBucketMetricsConfigurationCommand.js
│   │   │   │   │   ├── DeleteBucketOwnershipControlsCommand.js
│   │   │   │   │   ├── DeleteBucketPolicyCommand.js
│   │   │   │   │   ├── DeleteBucketReplicationCommand.js
│   │   │   │   │   ├── DeleteBucketTaggingCommand.js
│   │   │   │   │   ├── DeleteBucketWebsiteCommand.js
│   │   │   │   │   ├── DeleteObjectCommand.js
│   │   │   │   │   ├── DeleteObjectTaggingCommand.js
│   │   │   │   │   ├── DeleteObjectsCommand.js
│   │   │   │   │   ├── DeletePublicAccessBlockCommand.js
│   │   │   │   │   ├── GetBucketAccelerateConfigurationCommand.js
│   │   │   │   │   ├── GetBucketAclCommand.js
│   │   │   │   │   ├── GetBucketAnalyticsConfigurationCommand.js
│   │   │   │   │   ├── GetBucketCorsCommand.js
│   │   │   │   │   ├── GetBucketEncryptionCommand.js
│   │   │   │   │   ├── GetBucketIntelligentTieringConfigurationCommand.js
│   │   │   │   │   ├── GetBucketInventoryConfigurationCommand.js
│   │   │   │   │   ├── GetBucketLifecycleConfigurationCommand.js
│   │   │   │   │   ├── GetBucketLocationCommand.js
│   │   │   │   │   ├── GetBucketLoggingCommand.js
│   │   │   │   │   ├── GetBucketMetadataTableConfigurationCommand.js
│   │   │   │   │   ├── GetBucketMetricsConfigurationCommand.js
│   │   │   │   │   ├── GetBucketNotificationConfigurationCommand.js
│   │   │   │   │   ├── GetBucketOwnershipControlsCommand.js
│   │   │   │   │   ├── GetBucketPolicyCommand.js
│   │   │   │   │   ├── GetBucketPolicyStatusCommand.js
│   │   │   │   │   ├── GetBucketReplicationCommand.js
│   │   │   │   │   ├── GetBucketRequestPaymentCommand.js
│   │   │   │   │   ├── GetBucketTaggingCommand.js
│   │   │   │   │   ├── GetBucketVersioningCommand.js
│   │   │   │   │   ├── GetBucketWebsiteCommand.js
│   │   │   │   │   ├── GetObjectAclCommand.js
│   │   │   │   │   ├── GetObjectAttributesCommand.js
│   │   │   │   │   ├── GetObjectCommand.js
│   │   │   │   │   ├── GetObjectLegalHoldCommand.js
│   │   │   │   │   ├── GetObjectLockConfigurationCommand.js
│   │   │   │   │   ├── GetObjectRetentionCommand.js
│   │   │   │   │   ├── GetObjectTaggingCommand.js
│   │   │   │   │   ├── GetObjectTorrentCommand.js
│   │   │   │   │   ├── GetPublicAccessBlockCommand.js
│   │   │   │   │   ├── HeadBucketCommand.js
│   │   │   │   │   ├── HeadObjectCommand.js
│   │   │   │   │   ├── ListBucketAnalyticsConfigurationsCommand.js
│   │   │   │   │   ├── ListBucketIntelligentTieringConfigurationsCommand.js
│   │   │   │   │   ├── ListBucketInventoryConfigurationsCommand.js
│   │   │   │   │   ├── ListBucketMetricsConfigurationsCommand.js
│   │   │   │   │   ├── ListBucketsCommand.js
│   │   │   │   │   ├── ListDirectoryBucketsCommand.js
│   │   │   │   │   ├── ListMultipartUploadsCommand.js
│   │   │   │   │   ├── ListObjectVersionsCommand.js
│   │   │   │   │   ├── ListObjectsCommand.js
│   │   │   │   │   ├── ListObjectsV2Command.js
│   │   │   │   │   ├── ListPartsCommand.js
│   │   │   │   │   ├── PutBucketAccelerateConfigurationCommand.js
│   │   │   │   │   ├── PutBucketAclCommand.js
│   │   │   │   │   ├── PutBucketAnalyticsConfigurationCommand.js
│   │   │   │   │   ├── PutBucketCorsCommand.js
│   │   │   │   │   ├── PutBucketEncryptionCommand.js
│   │   │   │   │   ├── PutBucketIntelligentTieringConfigurationCommand.js
│   │   │   │   │   ├── PutBucketInventoryConfigurationCommand.js
│   │   │   │   │   ├── PutBucketLifecycleConfigurationCommand.js
│   │   │   │   │   ├── PutBucketLoggingCommand.js
│   │   │   │   │   ├── PutBucketMetricsConfigurationCommand.js
│   │   │   │   │   ├── PutBucketNotificationConfigurationCommand.js
│   │   │   │   │   ├── PutBucketOwnershipControlsCommand.js
│   │   │   │   │   ├── PutBucketPolicyCommand.js
│   │   │   │   │   ├── PutBucketReplicationCommand.js
│   │   │   │   │   ├── PutBucketRequestPaymentCommand.js
│   │   │   │   │   ├── PutBucketTaggingCommand.js
│   │   │   │   │   ├── PutBucketVersioningCommand.js
│   │   │   │   │   ├── PutBucketWebsiteCommand.js
│   │   │   │   │   ├── PutObjectAclCommand.js
│   │   │   │   │   ├── PutObjectCommand.js
│   │   │   │   │   ├── PutObjectLegalHoldCommand.js
│   │   │   │   │   ├── PutObjectLockConfigurationCommand.js
│   │   │   │   │   ├── PutObjectRetentionCommand.js
│   │   │   │   │   ├── PutObjectTaggingCommand.js
│   │   │   │   │   ├── PutPublicAccessBlockCommand.js
│   │   │   │   │   ├── RestoreObjectCommand.js
│   │   │   │   │   ├── SelectObjectContentCommand.js
│   │   │   │   │   ├── UploadPartCommand.js
│   │   │   │   │   ├── UploadPartCopyCommand.js
│   │   │   │   │   ├── WriteGetObjectResponseCommand.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── endpoint
│   │   │   │   │   ├── EndpointParameters.js
│   │   │   │   │   ├── endpointResolver.js
│   │   │   │   │   └── ruleset.js
│   │   │   │   ├── extensionConfiguration.js
│   │   │   │   ├── index.js
│   │   │   │   ├── models
│   │   │   │   │   ├── S3ServiceException.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── models_0.js
│   │   │   │   │   └── models_1.js
│   │   │   │   ├── pagination
│   │   │   │   │   ├── Interfaces.js
│   │   │   │   │   ├── ListBucketsPaginator.js
│   │   │   │   │   ├── ListDirectoryBucketsPaginator.js
│   │   │   │   │   ├── ListObjectsV2Paginator.js
│   │   │   │   │   ├── ListPartsPaginator.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── protocols
│   │   │   │   │   └── Aws_restXml.js
│   │   │   │   ├── runtimeConfig.browser.js
│   │   │   │   ├── runtimeConfig.js
│   │   │   │   ├── runtimeConfig.native.js
│   │   │   │   ├── runtimeConfig.shared.js
│   │   │   │   ├── runtimeExtensions.js
│   │   │   │   └── waiters
│   │   │   │       ├── index.js
│   │   │   │       ├── waitForBucketExists.js
│   │   │   │       ├── waitForBucketNotExists.js
│   │   │   │       ├── waitForObjectExists.js
│   │   │   │       └── waitForObjectNotExists.js
│   │   │   ├── dist-types
│   │   │   │   ├── S3.d.ts
│   │   │   │   ├── S3Client.d.ts
│   │   │   │   ├── auth
│   │   │   │   │   ├── httpAuthExtensionConfiguration.d.ts
│   │   │   │   │   └── httpAuthSchemeProvider.d.ts
│   │   │   │   ├── commands
│   │   │   │   │   ├── AbortMultipartUploadCommand.d.ts
│   │   │   │   │   ├── CompleteMultipartUploadCommand.d.ts
│   │   │   │   │   ├── CopyObjectCommand.d.ts
│   │   │   │   │   ├── CreateBucketCommand.d.ts
│   │   │   │   │   ├── CreateBucketMetadataTableConfigurationCommand.d.ts
│   │   │   │   │   ├── CreateMultipartUploadCommand.d.ts
│   │   │   │   │   ├── CreateSessionCommand.d.ts
│   │   │   │   │   ├── DeleteBucketAnalyticsConfigurationCommand.d.ts
│   │   │   │   │   ├── DeleteBucketCommand.d.ts
│   │   │   │   │   ├── DeleteBucketCorsCommand.d.ts
│   │   │   │   │   ├── DeleteBucketEncryptionCommand.d.ts
│   │   │   │   │   ├── DeleteBucketIntelligentTieringConfigurationCommand.d.ts
│   │   │   │   │   ├── DeleteBucketInventoryConfigurationCommand.d.ts
│   │   │   │   │   ├── DeleteBucketLifecycleCommand.d.ts
│   │   │   │   │   ├── DeleteBucketMetadataTableConfigurationCommand.d.ts
│   │   │   │   │   ├── DeleteBucketMetricsConfigurationCommand.d.ts
│   │   │   │   │   ├── DeleteBucketOwnershipControlsCommand.d.ts
│   │   │   │   │   ├── DeleteBucketPolicyCommand.d.ts
│   │   │   │   │   ├── DeleteBucketReplicationCommand.d.ts
│   │   │   │   │   ├── DeleteBucketTaggingCommand.d.ts
│   │   │   │   │   ├── DeleteBucketWebsiteCommand.d.ts
│   │   │   │   │   ├── DeleteObjectCommand.d.ts
│   │   │   │   │   ├── DeleteObjectTaggingCommand.d.ts
│   │   │   │   │   ├── DeleteObjectsCommand.d.ts
│   │   │   │   │   ├── DeletePublicAccessBlockCommand.d.ts
│   │   │   │   │   ├── GetBucketAccelerateConfigurationCommand.d.ts
│   │   │   │   │   ├── GetBucketAclCommand.d.ts
│   │   │   │   │   ├── GetBucketAnalyticsConfigurationCommand.d.ts
│   │   │   │   │   ├── GetBucketCorsCommand.d.ts
│   │   │   │   │   ├── GetBucketEncryptionCommand.d.ts
│   │   │   │   │   ├── GetBucketIntelligentTieringConfigurationCommand.d.ts
│   │   │   │   │   ├── GetBucketInventoryConfigurationCommand.d.ts
│   │   │   │   │   ├── GetBucketLifecycleConfigurationCommand.d.ts
│   │   │   │   │   ├── GetBucketLocationCommand.d.ts
│   │   │   │   │   ├── GetBucketLoggingCommand.d.ts
│   │   │   │   │   ├── GetBucketMetadataTableConfigurationCommand.d.ts
│   │   │   │   │   ├── GetBucketMetricsConfigurationCommand.d.ts
│   │   │   │   │   ├── GetBucketNotificationConfigurationCommand.d.ts
│   │   │   │   │   ├── GetBucketOwnershipControlsCommand.d.ts
│   │   │   │   │   ├── GetBucketPolicyCommand.d.ts
│   │   │   │   │   ├── GetBucketPolicyStatusCommand.d.ts
│   │   │   │   │   ├── GetBucketReplicationCommand.d.ts
│   │   │   │   │   ├── GetBucketRequestPaymentCommand.d.ts
│   │   │   │   │   ├── GetBucketTaggingCommand.d.ts
│   │   │   │   │   ├── GetBucketVersioningCommand.d.ts
│   │   │   │   │   ├── GetBucketWebsiteCommand.d.ts
│   │   │   │   │   ├── GetObjectAclCommand.d.ts
│   │   │   │   │   ├── GetObjectAttributesCommand.d.ts
│   │   │   │   │   ├── GetObjectCommand.d.ts
│   │   │   │   │   ├── GetObjectLegalHoldCommand.d.ts
│   │   │   │   │   ├── GetObjectLockConfigurationCommand.d.ts
│   │   │   │   │   ├── GetObjectRetentionCommand.d.ts
│   │   │   │   │   ├── GetObjectTaggingCommand.d.ts
│   │   │   │   │   ├── GetObjectTorrentCommand.d.ts
│   │   │   │   │   ├── GetPublicAccessBlockCommand.d.ts
│   │   │   │   │   ├── HeadBucketCommand.d.ts
│   │   │   │   │   ├── HeadObjectCommand.d.ts
│   │   │   │   │   ├── ListBucketAnalyticsConfigurationsCommand.d.ts
│   │   │   │   │   ├── ListBucketIntelligentTieringConfigurationsCommand.d.ts
│   │   │   │   │   ├── ListBucketInventoryConfigurationsCommand.d.ts
│   │   │   │   │   ├── ListBucketMetricsConfigurationsCommand.d.ts
│   │   │   │   │   ├── ListBucketsCommand.d.ts
│   │   │   │   │   ├── ListDirectoryBucketsCommand.d.ts
│   │   │   │   │   ├── ListMultipartUploadsCommand.d.ts
│   │   │   │   │   ├── ListObjectVersionsCommand.d.ts
│   │   │   │   │   ├── ListObjectsCommand.d.ts
│   │   │   │   │   ├── ListObjectsV2Command.d.ts
│   │   │   │   │   ├── ListPartsCommand.d.ts
│   │   │   │   │   ├── PutBucketAccelerateConfigurationCommand.d.ts
│   │   │   │   │   ├── PutBucketAclCommand.d.ts
│   │   │   │   │   ├── PutBucketAnalyticsConfigurationCommand.d.ts
│   │   │   │   │   ├── PutBucketCorsCommand.d.ts
│   │   │   │   │   ├── PutBucketEncryptionCommand.d.ts
│   │   │   │   │   ├── PutBucketIntelligentTieringConfigurationCommand.d.ts
│   │   │   │   │   ├── PutBucketInventoryConfigurationCommand.d.ts
│   │   │   │   │   ├── PutBucketLifecycleConfigurationCommand.d.ts
│   │   │   │   │   ├── PutBucketLoggingCommand.d.ts
│   │   │   │   │   ├── PutBucketMetricsConfigurationCommand.d.ts
│   │   │   │   │   ├── PutBucketNotificationConfigurationCommand.d.ts
│   │   │   │   │   ├── PutBucketOwnershipControlsCommand.d.ts
│   │   │   │   │   ├── PutBucketPolicyCommand.d.ts
│   │   │   │   │   ├── PutBucketReplicationCommand.d.ts
│   │   │   │   │   ├── PutBucketRequestPaymentCommand.d.ts
│   │   │   │   │   ├── PutBucketTaggingCommand.d.ts
│   │   │   │   │   ├── PutBucketVersioningCommand.d.ts
│   │   │   │   │   ├── PutBucketWebsiteCommand.d.ts
│   │   │   │   │   ├── PutObjectAclCommand.d.ts
│   │   │   │   │   ├── PutObjectCommand.d.ts
│   │   │   │   │   ├── PutObjectLegalHoldCommand.d.ts
│   │   │   │   │   ├── PutObjectLockConfigurationCommand.d.ts
│   │   │   │   │   ├── PutObjectRetentionCommand.d.ts
│   │   │   │   │   ├── PutObjectTaggingCommand.d.ts
│   │   │   │   │   ├── PutPublicAccessBlockCommand.d.ts
│   │   │   │   │   ├── RestoreObjectCommand.d.ts
│   │   │   │   │   ├── SelectObjectContentCommand.d.ts
│   │   │   │   │   ├── UploadPartCommand.d.ts
│   │   │   │   │   ├── UploadPartCopyCommand.d.ts
│   │   │   │   │   ├── WriteGetObjectResponseCommand.d.ts
│   │   │   │   │   └── index.d.ts
│   │   │   │   ├── endpoint
│   │   │   │   │   ├── EndpointParameters.d.ts
│   │   │   │   │   ├── endpointResolver.d.ts
│   │   │   │   │   └── ruleset.d.ts
│   │   │   │   ├── extensionConfiguration.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── models
│   │   │   │   │   ├── S3ServiceException.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── models_0.d.ts
│   │   │   │   │   └── models_1.d.ts
│   │   │   │   ├── pagination
│   │   │   │   │   ├── Interfaces.d.ts
│   │   │   │   │   ├── ListBucketsPaginator.d.ts
│   │   │   │   │   ├── ListDirectoryBucketsPaginator.d.ts
│   │   │   │   │   ├── ListObjectsV2Paginator.d.ts
│   │   │   │   │   ├── ListPartsPaginator.d.ts
│   │   │   │   │   └── index.d.ts
│   │   │   │   ├── protocols
│   │   │   │   │   └── Aws_restXml.d.ts
│   │   │   │   ├── runtimeConfig.browser.d.ts
│   │   │   │   ├── runtimeConfig.d.ts
│   │   │   │   ├── runtimeConfig.native.d.ts
│   │   │   │   ├── runtimeConfig.shared.d.ts
│   │   │   │   ├── runtimeExtensions.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── S3.d.ts
│   │   │   │   │   ├── S3Client.d.ts
│   │   │   │   │   ├── auth
│   │   │   │   │   │   ├── httpAuthExtensionConfiguration.d.ts
│   │   │   │   │   │   └── httpAuthSchemeProvider.d.ts
│   │   │   │   │   ├── commands
│   │   │   │   │   │   ├── AbortMultipartUploadCommand.d.ts
│   │   │   │   │   │   ├── CompleteMultipartUploadCommand.d.ts
│   │   │   │   │   │   ├── CopyObjectCommand.d.ts
│   │   │   │   │   │   ├── CreateBucketCommand.d.ts
│   │   │   │   │   │   ├── CreateBucketMetadataTableConfigurationCommand.d.ts
│   │   │   │   │   │   ├── CreateMultipartUploadCommand.d.ts
│   │   │   │   │   │   ├── CreateSessionCommand.d.ts
│   │   │   │   │   │   ├── DeleteBucketAnalyticsConfigurationCommand.d.ts
│   │   │   │   │   │   ├── DeleteBucketCommand.d.ts
│   │   │   │   │   │   ├── DeleteBucketCorsCommand.d.ts
│   │   │   │   │   │   ├── DeleteBucketEncryptionCommand.d.ts
│   │   │   │   │   │   ├── DeleteBucketIntelligentTieringConfigurationCommand.d.ts
│   │   │   │   │   │   ├── DeleteBucketInventoryConfigurationCommand.d.ts
│   │   │   │   │   │   ├── DeleteBucketLifecycleCommand.d.ts
│   │   │   │   │   │   ├── DeleteBucketMetadataTableConfigurationCommand.d.ts
│   │   │   │   │   │   ├── DeleteBucketMetricsConfigurationCommand.d.ts
│   │   │   │   │   │   ├── DeleteBucketOwnershipControlsCommand.d.ts
│   │   │   │   │   │   ├── DeleteBucketPolicyCommand.d.ts
│   │   │   │   │   │   ├── DeleteBucketReplicationCommand.d.ts
│   │   │   │   │   │   ├── DeleteBucketTaggingCommand.d.ts
│   │   │   │   │   │   ├── DeleteBucketWebsiteCommand.d.ts
│   │   │   │   │   │   ├── DeleteObjectCommand.d.ts
│   │   │   │   │   │   ├── DeleteObjectTaggingCommand.d.ts
│   │   │   │   │   │   ├── DeleteObjectsCommand.d.ts
│   │   │   │   │   │   ├── DeletePublicAccessBlockCommand.d.ts
│   │   │   │   │   │   ├── GetBucketAccelerateConfigurationCommand.d.ts
│   │   │   │   │   │   ├── GetBucketAclCommand.d.ts
│   │   │   │   │   │   ├── GetBucketAnalyticsConfigurationCommand.d.ts
│   │   │   │   │   │   ├── GetBucketCorsCommand.d.ts
│   │   │   │   │   │   ├── GetBucketEncryptionCommand.d.ts
│   │   │   │   │   │   ├── GetBucketIntelligentTieringConfigurationCommand.d.ts
│   │   │   │   │   │   ├── GetBucketInventoryConfigurationCommand.d.ts
│   │   │   │   │   │   ├── GetBucketLifecycleConfigurationCommand.d.ts
│   │   │   │   │   │   ├── GetBucketLocationCommand.d.ts
│   │   │   │   │   │   ├── GetBucketLoggingCommand.d.ts
│   │   │   │   │   │   ├── GetBucketMetadataTableConfigurationCommand.d.ts
│   │   │   │   │   │   ├── GetBucketMetricsConfigurationCommand.d.ts
│   │   │   │   │   │   ├── GetBucketNotificationConfigurationCommand.d.ts
│   │   │   │   │   │   ├── GetBucketOwnershipControlsCommand.d.ts
│   │   │   │   │   │   ├── GetBucketPolicyCommand.d.ts
│   │   │   │   │   │   ├── GetBucketPolicyStatusCommand.d.ts
│   │   │   │   │   │   ├── GetBucketReplicationCommand.d.ts
│   │   │   │   │   │   ├── GetBucketRequestPaymentCommand.d.ts
│   │   │   │   │   │   ├── GetBucketTaggingCommand.d.ts
│   │   │   │   │   │   ├── GetBucketVersioningCommand.d.ts
│   │   │   │   │   │   ├── GetBucketWebsiteCommand.d.ts
│   │   │   │   │   │   ├── GetObjectAclCommand.d.ts
│   │   │   │   │   │   ├── GetObjectAttributesCommand.d.ts
│   │   │   │   │   │   ├── GetObjectCommand.d.ts
│   │   │   │   │   │   ├── GetObjectLegalHoldCommand.d.ts
│   │   │   │   │   │   ├── GetObjectLockConfigurationCommand.d.ts
│   │   │   │   │   │   ├── GetObjectRetentionCommand.d.ts
│   │   │   │   │   │   ├── GetObjectTaggingCommand.d.ts
│   │   │   │   │   │   ├── GetObjectTorrentCommand.d.ts
│   │   │   │   │   │   ├── GetPublicAccessBlockCommand.d.ts
│   │   │   │   │   │   ├── HeadBucketCommand.d.ts
│   │   │   │   │   │   ├── HeadObjectCommand.d.ts
│   │   │   │   │   │   ├── ListBucketAnalyticsConfigurationsCommand.d.ts
│   │   │   │   │   │   ├── ListBucketIntelligentTieringConfigurationsCommand.d.ts
│   │   │   │   │   │   ├── ListBucketInventoryConfigurationsCommand.d.ts
│   │   │   │   │   │   ├── ListBucketMetricsConfigurationsCommand.d.ts
│   │   │   │   │   │   ├── ListBucketsCommand.d.ts
│   │   │   │   │   │   ├── ListDirectoryBucketsCommand.d.ts
│   │   │   │   │   │   ├── ListMultipartUploadsCommand.d.ts
│   │   │   │   │   │   ├── ListObjectVersionsCommand.d.ts
│   │   │   │   │   │   ├── ListObjectsCommand.d.ts
│   │   │   │   │   │   ├── ListObjectsV2Command.d.ts
│   │   │   │   │   │   ├── ListPartsCommand.d.ts
│   │   │   │   │   │   ├── PutBucketAccelerateConfigurationCommand.d.ts
│   │   │   │   │   │   ├── PutBucketAclCommand.d.ts
│   │   │   │   │   │   ├── PutBucketAnalyticsConfigurationCommand.d.ts
│   │   │   │   │   │   ├── PutBucketCorsCommand.d.ts
│   │   │   │   │   │   ├── PutBucketEncryptionCommand.d.ts
│   │   │   │   │   │   ├── PutBucketIntelligentTieringConfigurationCommand.d.ts
│   │   │   │   │   │   ├── PutBucketInventoryConfigurationCommand.d.ts
│   │   │   │   │   │   ├── PutBucketLifecycleConfigurationCommand.d.ts
│   │   │   │   │   │   ├── PutBucketLoggingCommand.d.ts
│   │   │   │   │   │   ├── PutBucketMetricsConfigurationCommand.d.ts
│   │   │   │   │   │   ├── PutBucketNotificationConfigurationCommand.d.ts
│   │   │   │   │   │   ├── PutBucketOwnershipControlsCommand.d.ts
│   │   │   │   │   │   ├── PutBucketPolicyCommand.d.ts
│   │   │   │   │   │   ├── PutBucketReplicationCommand.d.ts
│   │   │   │   │   │   ├── PutBucketRequestPaymentCommand.d.ts
│   │   │   │   │   │   ├── PutBucketTaggingCommand.d.ts
│   │   │   │   │   │   ├── PutBucketVersioningCommand.d.ts
│   │   │   │   │   │   ├── PutBucketWebsiteCommand.d.ts
│   │   │   │   │   │   ├── PutObjectAclCommand.d.ts
│   │   │   │   │   │   ├── PutObjectCommand.d.ts
│   │   │   │   │   │   ├── PutObjectLegalHoldCommand.d.ts
│   │   │   │   │   │   ├── PutObjectLockConfigurationCommand.d.ts
│   │   │   │   │   │   ├── PutObjectRetentionCommand.d.ts
│   │   │   │   │   │   ├── PutObjectTaggingCommand.d.ts
│   │   │   │   │   │   ├── PutPublicAccessBlockCommand.d.ts
│   │   │   │   │   │   ├── RestoreObjectCommand.d.ts
│   │   │   │   │   │   ├── SelectObjectContentCommand.d.ts
│   │   │   │   │   │   ├── UploadPartCommand.d.ts
│   │   │   │   │   │   ├── UploadPartCopyCommand.d.ts
│   │   │   │   │   │   ├── WriteGetObjectResponseCommand.d.ts
│   │   │   │   │   │   └── index.d.ts
│   │   │   │   │   ├── endpoint
│   │   │   │   │   │   ├── EndpointParameters.d.ts
│   │   │   │   │   │   ├── endpointResolver.d.ts
│   │   │   │   │   │   └── ruleset.d.ts
│   │   │   │   │   ├── extensionConfiguration.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── models
│   │   │   │   │   │   ├── S3ServiceException.d.ts
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── models_0.d.ts
│   │   │   │   │   │   └── models_1.d.ts
│   │   │   │   │   ├── pagination
│   │   │   │   │   │   ├── Interfaces.d.ts
│   │   │   │   │   │   ├── ListBucketsPaginator.d.ts
│   │   │   │   │   │   ├── ListDirectoryBucketsPaginator.d.ts
│   │   │   │   │   │   ├── ListObjectsV2Paginator.d.ts
│   │   │   │   │   │   ├── ListPartsPaginator.d.ts
│   │   │   │   │   │   └── index.d.ts
│   │   │   │   │   ├── protocols
│   │   │   │   │   │   └── Aws_restXml.d.ts
│   │   │   │   │   ├── runtimeConfig.browser.d.ts
│   │   │   │   │   ├── runtimeConfig.d.ts
│   │   │   │   │   ├── runtimeConfig.native.d.ts
│   │   │   │   │   ├── runtimeConfig.shared.d.ts
│   │   │   │   │   ├── runtimeExtensions.d.ts
│   │   │   │   │   └── waiters
│   │   │   │   │       ├── index.d.ts
│   │   │   │   │       ├── waitForBucketExists.d.ts
│   │   │   │   │       ├── waitForBucketNotExists.d.ts
│   │   │   │   │       ├── waitForObjectExists.d.ts
│   │   │   │   │       └── waitForObjectNotExists.d.ts
│   │   │   │   └── waiters
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── waitForBucketExists.d.ts
│   │   │   │       ├── waitForBucketNotExists.d.ts
│   │   │   │       ├── waitForObjectExists.d.ts
│   │   │   │       └── waitForObjectNotExists.d.ts
│   │   │   └── package.json
│   │   ├── client-sso
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── auth
│   │   │   │   │   └── httpAuthSchemeProvider.js
│   │   │   │   ├── endpoint
│   │   │   │   │   ├── endpointResolver.js
│   │   │   │   │   └── ruleset.js
│   │   │   │   ├── index.js
│   │   │   │   ├── runtimeConfig.browser.js
│   │   │   │   ├── runtimeConfig.js
│   │   │   │   ├── runtimeConfig.native.js
│   │   │   │   └── runtimeConfig.shared.js
│   │   │   ├── dist-es
│   │   │   │   ├── SSO.js
│   │   │   │   ├── SSOClient.js
│   │   │   │   ├── auth
│   │   │   │   │   ├── httpAuthExtensionConfiguration.js
│   │   │   │   │   └── httpAuthSchemeProvider.js
│   │   │   │   ├── commands
│   │   │   │   │   ├── GetRoleCredentialsCommand.js
│   │   │   │   │   ├── ListAccountRolesCommand.js
│   │   │   │   │   ├── ListAccountsCommand.js
│   │   │   │   │   ├── LogoutCommand.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── endpoint
│   │   │   │   │   ├── EndpointParameters.js
│   │   │   │   │   ├── endpointResolver.js
│   │   │   │   │   └── ruleset.js
│   │   │   │   ├── extensionConfiguration.js
│   │   │   │   ├── index.js
│   │   │   │   ├── models
│   │   │   │   │   ├── SSOServiceException.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── models_0.js
│   │   │   │   ├── pagination
│   │   │   │   │   ├── Interfaces.js
│   │   │   │   │   ├── ListAccountRolesPaginator.js
│   │   │   │   │   ├── ListAccountsPaginator.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── protocols
│   │   │   │   │   └── Aws_restJson1.js
│   │   │   │   ├── runtimeConfig.browser.js
│   │   │   │   ├── runtimeConfig.js
│   │   │   │   ├── runtimeConfig.native.js
│   │   │   │   ├── runtimeConfig.shared.js
│   │   │   │   └── runtimeExtensions.js
│   │   │   ├── dist-types
│   │   │   │   ├── SSO.d.ts
│   │   │   │   ├── SSOClient.d.ts
│   │   │   │   ├── auth
│   │   │   │   │   ├── httpAuthExtensionConfiguration.d.ts
│   │   │   │   │   └── httpAuthSchemeProvider.d.ts
│   │   │   │   ├── commands
│   │   │   │   │   ├── GetRoleCredentialsCommand.d.ts
│   │   │   │   │   ├── ListAccountRolesCommand.d.ts
│   │   │   │   │   ├── ListAccountsCommand.d.ts
│   │   │   │   │   ├── LogoutCommand.d.ts
│   │   │   │   │   └── index.d.ts
│   │   │   │   ├── endpoint
│   │   │   │   │   ├── EndpointParameters.d.ts
│   │   │   │   │   ├── endpointResolver.d.ts
│   │   │   │   │   └── ruleset.d.ts
│   │   │   │   ├── extensionConfiguration.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── models
│   │   │   │   │   ├── SSOServiceException.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   └── models_0.d.ts
│   │   │   │   ├── pagination
│   │   │   │   │   ├── Interfaces.d.ts
│   │   │   │   │   ├── ListAccountRolesPaginator.d.ts
│   │   │   │   │   ├── ListAccountsPaginator.d.ts
│   │   │   │   │   └── index.d.ts
│   │   │   │   ├── protocols
│   │   │   │   │   └── Aws_restJson1.d.ts
│   │   │   │   ├── runtimeConfig.browser.d.ts
│   │   │   │   ├── runtimeConfig.d.ts
│   │   │   │   ├── runtimeConfig.native.d.ts
│   │   │   │   ├── runtimeConfig.shared.d.ts
│   │   │   │   ├── runtimeExtensions.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── SSO.d.ts
│   │   │   │       ├── SSOClient.d.ts
│   │   │   │       ├── auth
│   │   │   │       │   ├── httpAuthExtensionConfiguration.d.ts
│   │   │   │       │   └── httpAuthSchemeProvider.d.ts
│   │   │   │       ├── commands
│   │   │   │       │   ├── GetRoleCredentialsCommand.d.ts
│   │   │   │       │   ├── ListAccountRolesCommand.d.ts
│   │   │   │       │   ├── ListAccountsCommand.d.ts
│   │   │   │       │   ├── LogoutCommand.d.ts
│   │   │   │       │   └── index.d.ts
│   │   │   │       ├── endpoint
│   │   │   │       │   ├── EndpointParameters.d.ts
│   │   │   │       │   ├── endpointResolver.d.ts
│   │   │   │       │   └── ruleset.d.ts
│   │   │   │       ├── extensionConfiguration.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── models
│   │   │   │       │   ├── SSOServiceException.d.ts
│   │   │   │       │   ├── index.d.ts
│   │   │   │       │   └── models_0.d.ts
│   │   │   │       ├── pagination
│   │   │   │       │   ├── Interfaces.d.ts
│   │   │   │       │   ├── ListAccountRolesPaginator.d.ts
│   │   │   │       │   ├── ListAccountsPaginator.d.ts
│   │   │   │       │   └── index.d.ts
│   │   │   │       ├── protocols
│   │   │   │       │   └── Aws_restJson1.d.ts
│   │   │   │       ├── runtimeConfig.browser.d.ts
│   │   │   │       ├── runtimeConfig.d.ts
│   │   │   │       ├── runtimeConfig.native.d.ts
│   │   │   │       ├── runtimeConfig.shared.d.ts
│   │   │   │       └── runtimeExtensions.d.ts
│   │   │   └── package.json
│   │   ├── client-transcribe
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── auth
│   │   │   │   │   └── httpAuthSchemeProvider.js
│   │   │   │   ├── endpoint
│   │   │   │   │   ├── endpointResolver.js
│   │   │   │   │   └── ruleset.js
│   │   │   │   ├── index.js
│   │   │   │   ├── runtimeConfig.browser.js
│   │   │   │   ├── runtimeConfig.js
│   │   │   │   ├── runtimeConfig.native.js
│   │   │   │   └── runtimeConfig.shared.js
│   │   │   ├── dist-es
│   │   │   │   ├── Transcribe.js
│   │   │   │   ├── TranscribeClient.js
│   │   │   │   ├── auth
│   │   │   │   │   ├── httpAuthExtensionConfiguration.js
│   │   │   │   │   └── httpAuthSchemeProvider.js
│   │   │   │   ├── commands
│   │   │   │   │   ├── CreateCallAnalyticsCategoryCommand.js
│   │   │   │   │   ├── CreateLanguageModelCommand.js
│   │   │   │   │   ├── CreateMedicalVocabularyCommand.js
│   │   │   │   │   ├── CreateVocabularyCommand.js
│   │   │   │   │   ├── CreateVocabularyFilterCommand.js
│   │   │   │   │   ├── DeleteCallAnalyticsCategoryCommand.js
│   │   │   │   │   ├── DeleteCallAnalyticsJobCommand.js
│   │   │   │   │   ├── DeleteLanguageModelCommand.js
│   │   │   │   │   ├── DeleteMedicalScribeJobCommand.js
│   │   │   │   │   ├── DeleteMedicalTranscriptionJobCommand.js
│   │   │   │   │   ├── DeleteMedicalVocabularyCommand.js
│   │   │   │   │   ├── DeleteTranscriptionJobCommand.js
│   │   │   │   │   ├── DeleteVocabularyCommand.js
│   │   │   │   │   ├── DeleteVocabularyFilterCommand.js
│   │   │   │   │   ├── DescribeLanguageModelCommand.js
│   │   │   │   │   ├── GetCallAnalyticsCategoryCommand.js
│   │   │   │   │   ├── GetCallAnalyticsJobCommand.js
│   │   │   │   │   ├── GetMedicalScribeJobCommand.js
│   │   │   │   │   ├── GetMedicalTranscriptionJobCommand.js
│   │   │   │   │   ├── GetMedicalVocabularyCommand.js
│   │   │   │   │   ├── GetTranscriptionJobCommand.js
│   │   │   │   │   ├── GetVocabularyCommand.js
│   │   │   │   │   ├── GetVocabularyFilterCommand.js
│   │   │   │   │   ├── ListCallAnalyticsCategoriesCommand.js
│   │   │   │   │   ├── ListCallAnalyticsJobsCommand.js
│   │   │   │   │   ├── ListLanguageModelsCommand.js
│   │   │   │   │   ├── ListMedicalScribeJobsCommand.js
│   │   │   │   │   ├── ListMedicalTranscriptionJobsCommand.js
│   │   │   │   │   ├── ListMedicalVocabulariesCommand.js
│   │   │   │   │   ├── ListTagsForResourceCommand.js
│   │   │   │   │   ├── ListTranscriptionJobsCommand.js
│   │   │   │   │   ├── ListVocabulariesCommand.js
│   │   │   │   │   ├── ListVocabularyFiltersCommand.js
│   │   │   │   │   ├── StartCallAnalyticsJobCommand.js
│   │   │   │   │   ├── StartMedicalScribeJobCommand.js
│   │   │   │   │   ├── StartMedicalTranscriptionJobCommand.js
│   │   │   │   │   ├── StartTranscriptionJobCommand.js
│   │   │   │   │   ├── TagResourceCommand.js
│   │   │   │   │   ├── UntagResourceCommand.js
│   │   │   │   │   ├── UpdateCallAnalyticsCategoryCommand.js
│   │   │   │   │   ├── UpdateMedicalVocabularyCommand.js
│   │   │   │   │   ├── UpdateVocabularyCommand.js
│   │   │   │   │   ├── UpdateVocabularyFilterCommand.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── endpoint
│   │   │   │   │   ├── EndpointParameters.js
│   │   │   │   │   ├── endpointResolver.js
│   │   │   │   │   └── ruleset.js
│   │   │   │   ├── extensionConfiguration.js
│   │   │   │   ├── index.js
│   │   │   │   ├── models
│   │   │   │   │   ├── TranscribeServiceException.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── models_0.js
│   │   │   │   ├── pagination
│   │   │   │   │   ├── Interfaces.js
│   │   │   │   │   ├── ListCallAnalyticsCategoriesPaginator.js
│   │   │   │   │   ├── ListCallAnalyticsJobsPaginator.js
│   │   │   │   │   ├── ListLanguageModelsPaginator.js
│   │   │   │   │   ├── ListMedicalScribeJobsPaginator.js
│   │   │   │   │   ├── ListMedicalTranscriptionJobsPaginator.js
│   │   │   │   │   ├── ListMedicalVocabulariesPaginator.js
│   │   │   │   │   ├── ListTranscriptionJobsPaginator.js
│   │   │   │   │   ├── ListVocabulariesPaginator.js
│   │   │   │   │   ├── ListVocabularyFiltersPaginator.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── protocols
│   │   │   │   │   └── Aws_json1_1.js
│   │   │   │   ├── runtimeConfig.browser.js
│   │   │   │   ├── runtimeConfig.js
│   │   │   │   ├── runtimeConfig.native.js
│   │   │   │   ├── runtimeConfig.shared.js
│   │   │   │   └── runtimeExtensions.js
│   │   │   ├── dist-types
│   │   │   │   ├── Transcribe.d.ts
│   │   │   │   ├── TranscribeClient.d.ts
│   │   │   │   ├── auth
│   │   │   │   │   ├── httpAuthExtensionConfiguration.d.ts
│   │   │   │   │   └── httpAuthSchemeProvider.d.ts
│   │   │   │   ├── commands
│   │   │   │   │   ├── CreateCallAnalyticsCategoryCommand.d.ts
│   │   │   │   │   ├── CreateLanguageModelCommand.d.ts
│   │   │   │   │   ├── CreateMedicalVocabularyCommand.d.ts
│   │   │   │   │   ├── CreateVocabularyCommand.d.ts
│   │   │   │   │   ├── CreateVocabularyFilterCommand.d.ts
│   │   │   │   │   ├── DeleteCallAnalyticsCategoryCommand.d.ts
│   │   │   │   │   ├── DeleteCallAnalyticsJobCommand.d.ts
│   │   │   │   │   ├── DeleteLanguageModelCommand.d.ts
│   │   │   │   │   ├── DeleteMedicalScribeJobCommand.d.ts
│   │   │   │   │   ├── DeleteMedicalTranscriptionJobCommand.d.ts
│   │   │   │   │   ├── DeleteMedicalVocabularyCommand.d.ts
│   │   │   │   │   ├── DeleteTranscriptionJobCommand.d.ts
│   │   │   │   │   ├── DeleteVocabularyCommand.d.ts
│   │   │   │   │   ├── DeleteVocabularyFilterCommand.d.ts
│   │   │   │   │   ├── DescribeLanguageModelCommand.d.ts
│   │   │   │   │   ├── GetCallAnalyticsCategoryCommand.d.ts
│   │   │   │   │   ├── GetCallAnalyticsJobCommand.d.ts
│   │   │   │   │   ├── GetMedicalScribeJobCommand.d.ts
│   │   │   │   │   ├── GetMedicalTranscriptionJobCommand.d.ts
│   │   │   │   │   ├── GetMedicalVocabularyCommand.d.ts
│   │   │   │   │   ├── GetTranscriptionJobCommand.d.ts
│   │   │   │   │   ├── GetVocabularyCommand.d.ts
│   │   │   │   │   ├── GetVocabularyFilterCommand.d.ts
│   │   │   │   │   ├── ListCallAnalyticsCategoriesCommand.d.ts
│   │   │   │   │   ├── ListCallAnalyticsJobsCommand.d.ts
│   │   │   │   │   ├── ListLanguageModelsCommand.d.ts
│   │   │   │   │   ├── ListMedicalScribeJobsCommand.d.ts
│   │   │   │   │   ├── ListMedicalTranscriptionJobsCommand.d.ts
│   │   │   │   │   ├── ListMedicalVocabulariesCommand.d.ts
│   │   │   │   │   ├── ListTagsForResourceCommand.d.ts
│   │   │   │   │   ├── ListTranscriptionJobsCommand.d.ts
│   │   │   │   │   ├── ListVocabulariesCommand.d.ts
│   │   │   │   │   ├── ListVocabularyFiltersCommand.d.ts
│   │   │   │   │   ├── StartCallAnalyticsJobCommand.d.ts
│   │   │   │   │   ├── StartMedicalScribeJobCommand.d.ts
│   │   │   │   │   ├── StartMedicalTranscriptionJobCommand.d.ts
│   │   │   │   │   ├── StartTranscriptionJobCommand.d.ts
│   │   │   │   │   ├── TagResourceCommand.d.ts
│   │   │   │   │   ├── UntagResourceCommand.d.ts
│   │   │   │   │   ├── UpdateCallAnalyticsCategoryCommand.d.ts
│   │   │   │   │   ├── UpdateMedicalVocabularyCommand.d.ts
│   │   │   │   │   ├── UpdateVocabularyCommand.d.ts
│   │   │   │   │   ├── UpdateVocabularyFilterCommand.d.ts
│   │   │   │   │   └── index.d.ts
│   │   │   │   ├── endpoint
│   │   │   │   │   ├── EndpointParameters.d.ts
│   │   │   │   │   ├── endpointResolver.d.ts
│   │   │   │   │   └── ruleset.d.ts
│   │   │   │   ├── extensionConfiguration.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── models
│   │   │   │   │   ├── TranscribeServiceException.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   └── models_0.d.ts
│   │   │   │   ├── pagination
│   │   │   │   │   ├── Interfaces.d.ts
│   │   │   │   │   ├── ListCallAnalyticsCategoriesPaginator.d.ts
│   │   │   │   │   ├── ListCallAnalyticsJobsPaginator.d.ts
│   │   │   │   │   ├── ListLanguageModelsPaginator.d.ts
│   │   │   │   │   ├── ListMedicalScribeJobsPaginator.d.ts
│   │   │   │   │   ├── ListMedicalTranscriptionJobsPaginator.d.ts
│   │   │   │   │   ├── ListMedicalVocabulariesPaginator.d.ts
│   │   │   │   │   ├── ListTranscriptionJobsPaginator.d.ts
│   │   │   │   │   ├── ListVocabulariesPaginator.d.ts
│   │   │   │   │   ├── ListVocabularyFiltersPaginator.d.ts
│   │   │   │   │   └── index.d.ts
│   │   │   │   ├── protocols
│   │   │   │   │   └── Aws_json1_1.d.ts
│   │   │   │   ├── runtimeConfig.browser.d.ts
│   │   │   │   ├── runtimeConfig.d.ts
│   │   │   │   ├── runtimeConfig.native.d.ts
│   │   │   │   ├── runtimeConfig.shared.d.ts
│   │   │   │   ├── runtimeExtensions.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── Transcribe.d.ts
│   │   │   │       ├── TranscribeClient.d.ts
│   │   │   │       ├── auth
│   │   │   │       │   ├── httpAuthExtensionConfiguration.d.ts
│   │   │   │       │   └── httpAuthSchemeProvider.d.ts
│   │   │   │       ├── commands
│   │   │   │       │   ├── CreateCallAnalyticsCategoryCommand.d.ts
│   │   │   │       │   ├── CreateLanguageModelCommand.d.ts
│   │   │   │       │   ├── CreateMedicalVocabularyCommand.d.ts
│   │   │   │       │   ├── CreateVocabularyCommand.d.ts
│   │   │   │       │   ├── CreateVocabularyFilterCommand.d.ts
│   │   │   │       │   ├── DeleteCallAnalyticsCategoryCommand.d.ts
│   │   │   │       │   ├── DeleteCallAnalyticsJobCommand.d.ts
│   │   │   │       │   ├── DeleteLanguageModelCommand.d.ts
│   │   │   │       │   ├── DeleteMedicalScribeJobCommand.d.ts
│   │   │   │       │   ├── DeleteMedicalTranscriptionJobCommand.d.ts
│   │   │   │       │   ├── DeleteMedicalVocabularyCommand.d.ts
│   │   │   │       │   ├── DeleteTranscriptionJobCommand.d.ts
│   │   │   │       │   ├── DeleteVocabularyCommand.d.ts
│   │   │   │       │   ├── DeleteVocabularyFilterCommand.d.ts
│   │   │   │       │   ├── DescribeLanguageModelCommand.d.ts
│   │   │   │       │   ├── GetCallAnalyticsCategoryCommand.d.ts
│   │   │   │       │   ├── GetCallAnalyticsJobCommand.d.ts
│   │   │   │       │   ├── GetMedicalScribeJobCommand.d.ts
│   │   │   │       │   ├── GetMedicalTranscriptionJobCommand.d.ts
│   │   │   │       │   ├── GetMedicalVocabularyCommand.d.ts
│   │   │   │       │   ├── GetTranscriptionJobCommand.d.ts
│   │   │   │       │   ├── GetVocabularyCommand.d.ts
│   │   │   │       │   ├── GetVocabularyFilterCommand.d.ts
│   │   │   │       │   ├── ListCallAnalyticsCategoriesCommand.d.ts
│   │   │   │       │   ├── ListCallAnalyticsJobsCommand.d.ts
│   │   │   │       │   ├── ListLanguageModelsCommand.d.ts
│   │   │   │       │   ├── ListMedicalScribeJobsCommand.d.ts
│   │   │   │       │   ├── ListMedicalTranscriptionJobsCommand.d.ts
│   │   │   │       │   ├── ListMedicalVocabulariesCommand.d.ts
│   │   │   │       │   ├── ListTagsForResourceCommand.d.ts
│   │   │   │       │   ├── ListTranscriptionJobsCommand.d.ts
│   │   │   │       │   ├── ListVocabulariesCommand.d.ts
│   │   │   │       │   ├── ListVocabularyFiltersCommand.d.ts
│   │   │   │       │   ├── StartCallAnalyticsJobCommand.d.ts
│   │   │   │       │   ├── StartMedicalScribeJobCommand.d.ts
│   │   │   │       │   ├── StartMedicalTranscriptionJobCommand.d.ts
│   │   │   │       │   ├── StartTranscriptionJobCommand.d.ts
│   │   │   │       │   ├── TagResourceCommand.d.ts
│   │   │   │       │   ├── UntagResourceCommand.d.ts
│   │   │   │       │   ├── UpdateCallAnalyticsCategoryCommand.d.ts
│   │   │   │       │   ├── UpdateMedicalVocabularyCommand.d.ts
│   │   │   │       │   ├── UpdateVocabularyCommand.d.ts
│   │   │   │       │   ├── UpdateVocabularyFilterCommand.d.ts
│   │   │   │       │   └── index.d.ts
│   │   │   │       ├── endpoint
│   │   │   │       │   ├── EndpointParameters.d.ts
│   │   │   │       │   ├── endpointResolver.d.ts
│   │   │   │       │   └── ruleset.d.ts
│   │   │   │       ├── extensionConfiguration.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── models
│   │   │   │       │   ├── TranscribeServiceException.d.ts
│   │   │   │       │   ├── index.d.ts
│   │   │   │       │   └── models_0.d.ts
│   │   │   │       ├── pagination
│   │   │   │       │   ├── Interfaces.d.ts
│   │   │   │       │   ├── ListCallAnalyticsCategoriesPaginator.d.ts
│   │   │   │       │   ├── ListCallAnalyticsJobsPaginator.d.ts
│   │   │   │       │   ├── ListLanguageModelsPaginator.d.ts
│   │   │   │       │   ├── ListMedicalScribeJobsPaginator.d.ts
│   │   │   │       │   ├── ListMedicalTranscriptionJobsPaginator.d.ts
│   │   │   │       │   ├── ListMedicalVocabulariesPaginator.d.ts
│   │   │   │       │   ├── ListTranscriptionJobsPaginator.d.ts
│   │   │   │       │   ├── ListVocabulariesPaginator.d.ts
│   │   │   │       │   ├── ListVocabularyFiltersPaginator.d.ts
│   │   │   │       │   └── index.d.ts
│   │   │   │       ├── protocols
│   │   │   │       │   └── Aws_json1_1.d.ts
│   │   │   │       ├── runtimeConfig.browser.d.ts
│   │   │   │       ├── runtimeConfig.d.ts
│   │   │   │       ├── runtimeConfig.native.d.ts
│   │   │   │       ├── runtimeConfig.shared.d.ts
│   │   │   │       └── runtimeExtensions.d.ts
│   │   │   └── package.json
│   │   ├── core
│   │   │   ├── README.md
│   │   │   ├── account-id-endpoint.d.ts
│   │   │   ├── account-id-endpoint.js
│   │   │   ├── client.d.ts
│   │   │   ├── client.js
│   │   │   ├── dist-cjs
│   │   │   │   ├── index.js
│   │   │   │   └── submodules
│   │   │   │       ├── account-id-endpoint
│   │   │   │       │   └── index.js
│   │   │   │       ├── client
│   │   │   │       │   └── index.js
│   │   │   │       ├── httpAuthSchemes
│   │   │   │       │   └── index.js
│   │   │   │       └── protocols
│   │   │   │           └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── index.js
│   │   │   │   └── submodules
│   │   │   │       ├── account-id-endpoint
│   │   │   │       │   ├── AccountIdEndpointModeConfigResolver.js
│   │   │   │       │   ├── AccountIdEndpointModeConstants.js
│   │   │   │       │   ├── NodeAccountIdEndpointModeConfigOptions.js
│   │   │   │       │   └── index.js
│   │   │   │       ├── client
│   │   │   │       │   ├── emitWarningIfUnsupportedVersion.js
│   │   │   │       │   ├── index.js
│   │   │   │       │   ├── setCredentialFeature.js
│   │   │   │       │   └── setFeature.js
│   │   │   │       ├── httpAuthSchemes
│   │   │   │       │   ├── aws_sdk
│   │   │   │       │   │   ├── AwsSdkSigV4ASigner.js
│   │   │   │       │   │   ├── AwsSdkSigV4Signer.js
│   │   │   │       │   │   ├── index.js
│   │   │   │       │   │   ├── resolveAwsSdkSigV4AConfig.js
│   │   │   │       │   │   └── resolveAwsSdkSigV4Config.js
│   │   │   │       │   ├── index.js
│   │   │   │       │   └── utils
│   │   │   │       │       ├── getDateHeader.js
│   │   │   │       │       ├── getSkewCorrectedDate.js
│   │   │   │       │       ├── getUpdatedSystemClockOffset.js
│   │   │   │       │       ├── index.js
│   │   │   │       │       └── isClockSkewed.js
│   │   │   │       └── protocols
│   │   │   │           ├── coercing-serializers.js
│   │   │   │           ├── common.js
│   │   │   │           ├── index.js
│   │   │   │           ├── json
│   │   │   │           │   ├── awsExpectUnion.js
│   │   │   │           │   └── parseJsonBody.js
│   │   │   │           └── xml
│   │   │   │               └── parseXmlBody.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── submodules
│   │   │   │   │   ├── account-id-endpoint
│   │   │   │   │   │   ├── AccountIdEndpointModeConfigResolver.d.ts
│   │   │   │   │   │   ├── AccountIdEndpointModeConstants.d.ts
│   │   │   │   │   │   ├── NodeAccountIdEndpointModeConfigOptions.d.ts
│   │   │   │   │   │   └── index.d.ts
│   │   │   │   │   ├── client
│   │   │   │   │   │   ├── emitWarningIfUnsupportedVersion.d.ts
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── setCredentialFeature.d.ts
│   │   │   │   │   │   └── setFeature.d.ts
│   │   │   │   │   ├── httpAuthSchemes
│   │   │   │   │   │   ├── aws_sdk
│   │   │   │   │   │   │   ├── AwsSdkSigV4ASigner.d.ts
│   │   │   │   │   │   │   ├── AwsSdkSigV4Signer.d.ts
│   │   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   │   ├── resolveAwsSdkSigV4AConfig.d.ts
│   │   │   │   │   │   │   └── resolveAwsSdkSigV4Config.d.ts
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   └── utils
│   │   │   │   │   │       ├── getDateHeader.d.ts
│   │   │   │   │   │       ├── getSkewCorrectedDate.d.ts
│   │   │   │   │   │       ├── getUpdatedSystemClockOffset.d.ts
│   │   │   │   │   │       ├── index.d.ts
│   │   │   │   │   │       └── isClockSkewed.d.ts
│   │   │   │   │   └── protocols
│   │   │   │   │       ├── coercing-serializers.d.ts
│   │   │   │   │       ├── common.d.ts
│   │   │   │   │       ├── index.d.ts
│   │   │   │   │       ├── json
│   │   │   │   │       │   ├── awsExpectUnion.d.ts
│   │   │   │   │       │   └── parseJsonBody.d.ts
│   │   │   │   │       └── xml
│   │   │   │   │           └── parseXmlBody.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── index.d.ts
│   │   │   │       └── submodules
│   │   │   │           ├── account-id-endpoint
│   │   │   │           │   ├── AccountIdEndpointModeConfigResolver.d.ts
│   │   │   │           │   ├── AccountIdEndpointModeConstants.d.ts
│   │   │   │           │   ├── NodeAccountIdEndpointModeConfigOptions.d.ts
│   │   │   │           │   └── index.d.ts
│   │   │   │           ├── client
│   │   │   │           │   ├── emitWarningIfUnsupportedVersion.d.ts
│   │   │   │           │   ├── index.d.ts
│   │   │   │           │   ├── setCredentialFeature.d.ts
│   │   │   │           │   └── setFeature.d.ts
│   │   │   │           ├── httpAuthSchemes
│   │   │   │           │   ├── aws_sdk
│   │   │   │           │   │   ├── AwsSdkSigV4ASigner.d.ts
│   │   │   │           │   │   ├── AwsSdkSigV4Signer.d.ts
│   │   │   │           │   │   ├── index.d.ts
│   │   │   │           │   │   ├── resolveAwsSdkSigV4AConfig.d.ts
│   │   │   │           │   │   └── resolveAwsSdkSigV4Config.d.ts
│   │   │   │           │   ├── index.d.ts
│   │   │   │           │   └── utils
│   │   │   │           │       ├── getDateHeader.d.ts
│   │   │   │           │       ├── getSkewCorrectedDate.d.ts
│   │   │   │           │       ├── getUpdatedSystemClockOffset.d.ts
│   │   │   │           │       ├── index.d.ts
│   │   │   │           │       └── isClockSkewed.d.ts
│   │   │   │           └── protocols
│   │   │   │               ├── coercing-serializers.d.ts
│   │   │   │               ├── common.d.ts
│   │   │   │               ├── index.d.ts
│   │   │   │               ├── json
│   │   │   │               │   ├── awsExpectUnion.d.ts
│   │   │   │               │   └── parseJsonBody.d.ts
│   │   │   │               └── xml
│   │   │   │                   └── parseXmlBody.d.ts
│   │   │   ├── httpAuthSchemes.d.ts
│   │   │   ├── httpAuthSchemes.js
│   │   │   ├── package.json
│   │   │   ├── protocols.d.ts
│   │   │   └── protocols.js
│   │   ├── credential-provider-env
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── fromEnv.js
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── fromEnv.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── fromEnv.d.ts
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── credential-provider-http
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── fromHttp
│   │   │   │   │   ├── checkUrl.js
│   │   │   │   │   ├── fromHttp.browser.js
│   │   │   │   │   ├── fromHttp.js
│   │   │   │   │   ├── fromHttpTypes.js
│   │   │   │   │   ├── requestHelpers.js
│   │   │   │   │   └── retry-wrapper.js
│   │   │   │   ├── index.browser.js
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── fromHttp
│   │   │   │   │   ├── checkUrl.js
│   │   │   │   │   ├── fromHttp.browser.js
│   │   │   │   │   ├── fromHttp.js
│   │   │   │   │   ├── fromHttpTypes.js
│   │   │   │   │   ├── requestHelpers.js
│   │   │   │   │   └── retry-wrapper.js
│   │   │   │   ├── index.browser.js
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── fromHttp
│   │   │   │   │   ├── checkUrl.d.ts
│   │   │   │   │   ├── fromHttp.browser.d.ts
│   │   │   │   │   ├── fromHttp.d.ts
│   │   │   │   │   ├── fromHttpTypes.d.ts
│   │   │   │   │   ├── requestHelpers.d.ts
│   │   │   │   │   └── retry-wrapper.d.ts
│   │   │   │   ├── index.browser.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── fromHttp
│   │   │   │       │   ├── checkUrl.d.ts
│   │   │   │       │   ├── fromHttp.browser.d.ts
│   │   │   │       │   ├── fromHttp.d.ts
│   │   │   │       │   ├── fromHttpTypes.d.ts
│   │   │   │       │   ├── requestHelpers.d.ts
│   │   │   │       │   └── retry-wrapper.d.ts
│   │   │   │       ├── index.browser.d.ts
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── credential-provider-ini
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── fromIni.js
│   │   │   │   ├── index.js
│   │   │   │   ├── resolveAssumeRoleCredentials.js
│   │   │   │   ├── resolveCredentialSource.js
│   │   │   │   ├── resolveProcessCredentials.js
│   │   │   │   ├── resolveProfileData.js
│   │   │   │   ├── resolveSsoCredentials.js
│   │   │   │   ├── resolveStaticCredentials.js
│   │   │   │   └── resolveWebIdentityCredentials.js
│   │   │   ├── dist-types
│   │   │   │   ├── fromIni.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── resolveAssumeRoleCredentials.d.ts
│   │   │   │   ├── resolveCredentialSource.d.ts
│   │   │   │   ├── resolveProcessCredentials.d.ts
│   │   │   │   ├── resolveProfileData.d.ts
│   │   │   │   ├── resolveSsoCredentials.d.ts
│   │   │   │   ├── resolveStaticCredentials.d.ts
│   │   │   │   ├── resolveWebIdentityCredentials.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── fromIni.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── resolveAssumeRoleCredentials.d.ts
│   │   │   │       ├── resolveCredentialSource.d.ts
│   │   │   │       ├── resolveProcessCredentials.d.ts
│   │   │   │       ├── resolveProfileData.d.ts
│   │   │   │       ├── resolveSsoCredentials.d.ts
│   │   │   │       ├── resolveStaticCredentials.d.ts
│   │   │   │       └── resolveWebIdentityCredentials.d.ts
│   │   │   └── package.json
│   │   ├── credential-provider-node
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── defaultProvider.js
│   │   │   │   ├── index.js
│   │   │   │   └── remoteProvider.js
│   │   │   ├── dist-types
│   │   │   │   ├── defaultProvider.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── remoteProvider.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── defaultProvider.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       └── remoteProvider.d.ts
│   │   │   └── package.json
│   │   ├── credential-provider-process
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── ProcessCredentials.js
│   │   │   │   ├── fromProcess.js
│   │   │   │   ├── getValidatedProcessCredentials.js
│   │   │   │   ├── index.js
│   │   │   │   └── resolveProcessCredentials.js
│   │   │   ├── dist-types
│   │   │   │   ├── ProcessCredentials.d.ts
│   │   │   │   ├── fromProcess.d.ts
│   │   │   │   ├── getValidatedProcessCredentials.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── resolveProcessCredentials.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── ProcessCredentials.d.ts
│   │   │   │       ├── fromProcess.d.ts
│   │   │   │       ├── getValidatedProcessCredentials.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       └── resolveProcessCredentials.d.ts
│   │   │   └── package.json
│   │   ├── credential-provider-sso
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── fromSSO.js
│   │   │   │   ├── index.js
│   │   │   │   ├── isSsoProfile.js
│   │   │   │   ├── loadSso.js
│   │   │   │   ├── resolveSSOCredentials.js
│   │   │   │   ├── types.js
│   │   │   │   └── validateSsoProfile.js
│   │   │   ├── dist-types
│   │   │   │   ├── fromSSO.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── isSsoProfile.d.ts
│   │   │   │   ├── loadSso.d.ts
│   │   │   │   ├── resolveSSOCredentials.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── fromSSO.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── isSsoProfile.d.ts
│   │   │   │   │   ├── loadSso.d.ts
│   │   │   │   │   ├── resolveSSOCredentials.d.ts
│   │   │   │   │   ├── types.d.ts
│   │   │   │   │   └── validateSsoProfile.d.ts
│   │   │   │   ├── types.d.ts
│   │   │   │   └── validateSsoProfile.d.ts
│   │   │   └── package.json
│   │   ├── credential-provider-web-identity
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── fromTokenFile.js
│   │   │   │   ├── fromWebToken.js
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── fromTokenFile.js
│   │   │   │   ├── fromWebToken.js
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── fromTokenFile.d.ts
│   │   │   │   ├── fromWebToken.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── fromTokenFile.d.ts
│   │   │   │       ├── fromWebToken.d.ts
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── middleware-bucket-endpoint
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── NodeDisableMultiregionAccessPointConfigOptions.js
│   │   │   │   ├── NodeUseArnRegionConfigOptions.js
│   │   │   │   ├── bucketEndpointMiddleware.js
│   │   │   │   ├── bucketHostname.js
│   │   │   │   ├── bucketHostnameUtils.js
│   │   │   │   ├── configurations.js
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── NodeDisableMultiregionAccessPointConfigOptions.d.ts
│   │   │   │   ├── NodeUseArnRegionConfigOptions.d.ts
│   │   │   │   ├── bucketEndpointMiddleware.d.ts
│   │   │   │   ├── bucketHostname.d.ts
│   │   │   │   ├── bucketHostnameUtils.d.ts
│   │   │   │   ├── configurations.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── NodeDisableMultiregionAccessPointConfigOptions.d.ts
│   │   │   │       ├── NodeUseArnRegionConfigOptions.d.ts
│   │   │   │       ├── bucketEndpointMiddleware.d.ts
│   │   │   │       ├── bucketHostname.d.ts
│   │   │   │       ├── bucketHostnameUtils.d.ts
│   │   │   │       ├── configurations.d.ts
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── middleware-expect-continue
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── middleware-flexible-checksums
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── getCrc32ChecksumAlgorithmFunction.browser.js
│   │   │   │   ├── getCrc32ChecksumAlgorithmFunction.js
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── NODE_REQUEST_CHECKSUM_CALCULATION_CONFIG_OPTIONS.js
│   │   │   │   ├── NODE_RESPONSE_CHECKSUM_VALIDATION_CONFIG_OPTIONS.js
│   │   │   │   ├── configuration.js
│   │   │   │   ├── constants.js
│   │   │   │   ├── crc64-nvme-crt-container.js
│   │   │   │   ├── flexibleChecksumsInputMiddleware.js
│   │   │   │   ├── flexibleChecksumsMiddleware.js
│   │   │   │   ├── flexibleChecksumsResponseMiddleware.js
│   │   │   │   ├── getChecksum.js
│   │   │   │   ├── getChecksumAlgorithmForRequest.js
│   │   │   │   ├── getChecksumAlgorithmListForResponse.js
│   │   │   │   ├── getChecksumLocationName.js
│   │   │   │   ├── getCrc32ChecksumAlgorithmFunction.browser.js
│   │   │   │   ├── getCrc32ChecksumAlgorithmFunction.js
│   │   │   │   ├── getFlexibleChecksumsPlugin.js
│   │   │   │   ├── hasHeader.js
│   │   │   │   ├── hasHeaderWithPrefix.js
│   │   │   │   ├── index.js
│   │   │   │   ├── isChecksumWithPartNumber.js
│   │   │   │   ├── isStreaming.js
│   │   │   │   ├── resolveFlexibleChecksumsConfig.js
│   │   │   │   ├── selectChecksumAlgorithmFunction.js
│   │   │   │   ├── stringHasher.js
│   │   │   │   ├── stringUnionSelector.js
│   │   │   │   ├── types.js
│   │   │   │   └── validateChecksumFromResponse.js
│   │   │   ├── dist-types
│   │   │   │   ├── NODE_REQUEST_CHECKSUM_CALCULATION_CONFIG_OPTIONS.d.ts
│   │   │   │   ├── NODE_RESPONSE_CHECKSUM_VALIDATION_CONFIG_OPTIONS.d.ts
│   │   │   │   ├── configuration.d.ts
│   │   │   │   ├── constants.d.ts
│   │   │   │   ├── crc64-nvme-crt-container.d.ts
│   │   │   │   ├── flexibleChecksumsInputMiddleware.d.ts
│   │   │   │   ├── flexibleChecksumsMiddleware.d.ts
│   │   │   │   ├── flexibleChecksumsResponseMiddleware.d.ts
│   │   │   │   ├── getChecksum.d.ts
│   │   │   │   ├── getChecksumAlgorithmForRequest.d.ts
│   │   │   │   ├── getChecksumAlgorithmListForResponse.d.ts
│   │   │   │   ├── getChecksumLocationName.d.ts
│   │   │   │   ├── getCrc32ChecksumAlgorithmFunction.browser.d.ts
│   │   │   │   ├── getCrc32ChecksumAlgorithmFunction.d.ts
│   │   │   │   ├── getFlexibleChecksumsPlugin.d.ts
│   │   │   │   ├── hasHeader.d.ts
│   │   │   │   ├── hasHeaderWithPrefix.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── isChecksumWithPartNumber.d.ts
│   │   │   │   ├── isStreaming.d.ts
│   │   │   │   ├── resolveFlexibleChecksumsConfig.d.ts
│   │   │   │   ├── selectChecksumAlgorithmFunction.d.ts
│   │   │   │   ├── stringHasher.d.ts
│   │   │   │   ├── stringUnionSelector.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── NODE_REQUEST_CHECKSUM_CALCULATION_CONFIG_OPTIONS.d.ts
│   │   │   │   │   ├── NODE_RESPONSE_CHECKSUM_VALIDATION_CONFIG_OPTIONS.d.ts
│   │   │   │   │   ├── configuration.d.ts
│   │   │   │   │   ├── constants.d.ts
│   │   │   │   │   ├── crc64-nvme-crt-container.d.ts
│   │   │   │   │   ├── flexibleChecksumsInputMiddleware.d.ts
│   │   │   │   │   ├── flexibleChecksumsMiddleware.d.ts
│   │   │   │   │   ├── flexibleChecksumsResponseMiddleware.d.ts
│   │   │   │   │   ├── getChecksum.d.ts
│   │   │   │   │   ├── getChecksumAlgorithmForRequest.d.ts
│   │   │   │   │   ├── getChecksumAlgorithmListForResponse.d.ts
│   │   │   │   │   ├── getChecksumLocationName.d.ts
│   │   │   │   │   ├── getCrc32ChecksumAlgorithmFunction.browser.d.ts
│   │   │   │   │   ├── getCrc32ChecksumAlgorithmFunction.d.ts
│   │   │   │   │   ├── getFlexibleChecksumsPlugin.d.ts
│   │   │   │   │   ├── hasHeader.d.ts
│   │   │   │   │   ├── hasHeaderWithPrefix.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── isChecksumWithPartNumber.d.ts
│   │   │   │   │   ├── isStreaming.d.ts
│   │   │   │   │   ├── resolveFlexibleChecksumsConfig.d.ts
│   │   │   │   │   ├── selectChecksumAlgorithmFunction.d.ts
│   │   │   │   │   ├── stringHasher.d.ts
│   │   │   │   │   ├── stringUnionSelector.d.ts
│   │   │   │   │   ├── types.d.ts
│   │   │   │   │   └── validateChecksumFromResponse.d.ts
│   │   │   │   ├── types.d.ts
│   │   │   │   └── validateChecksumFromResponse.d.ts
│   │   │   └── package.json
│   │   ├── middleware-host-header
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── middleware-location-constraint
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── configuration.js
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── configuration.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── configuration.d.ts
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── middleware-logger
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── index.js
│   │   │   │   └── loggerMiddleware.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── loggerMiddleware.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── index.d.ts
│   │   │   │       └── loggerMiddleware.d.ts
│   │   │   └── package.json
│   │   ├── middleware-recursion-detection
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── middleware-sdk-s3
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── bucket-endpoint-middleware.js
│   │   │   │   ├── check-content-length-header.js
│   │   │   │   ├── index.js
│   │   │   │   ├── region-redirect-endpoint-middleware.js
│   │   │   │   ├── region-redirect-middleware.js
│   │   │   │   ├── s3-expires-middleware.js
│   │   │   │   ├── s3-express
│   │   │   │   │   ├── classes
│   │   │   │   │   │   ├── S3ExpressIdentityCache.js
│   │   │   │   │   │   ├── S3ExpressIdentityCacheEntry.js
│   │   │   │   │   │   ├── S3ExpressIdentityProviderImpl.js
│   │   │   │   │   │   └── SignatureV4S3Express.js
│   │   │   │   │   ├── constants.js
│   │   │   │   │   ├── functions
│   │   │   │   │   │   ├── s3ExpressHttpSigningMiddleware.js
│   │   │   │   │   │   ├── s3ExpressMiddleware.js
│   │   │   │   │   │   └── signS3Express.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── interfaces
│   │   │   │   │       ├── S3ExpressIdentity.js
│   │   │   │   │       └── S3ExpressIdentityProvider.js
│   │   │   │   ├── s3Configuration.js
│   │   │   │   ├── throw-200-exceptions.js
│   │   │   │   └── validate-bucket-name.js
│   │   │   ├── dist-types
│   │   │   │   ├── bucket-endpoint-middleware.d.ts
│   │   │   │   ├── check-content-length-header.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── region-redirect-endpoint-middleware.d.ts
│   │   │   │   ├── region-redirect-middleware.d.ts
│   │   │   │   ├── s3-expires-middleware.d.ts
│   │   │   │   ├── s3-express
│   │   │   │   │   ├── classes
│   │   │   │   │   │   ├── S3ExpressIdentityCache.d.ts
│   │   │   │   │   │   ├── S3ExpressIdentityCacheEntry.d.ts
│   │   │   │   │   │   ├── S3ExpressIdentityProviderImpl.d.ts
│   │   │   │   │   │   └── SignatureV4S3Express.d.ts
│   │   │   │   │   ├── constants.d.ts
│   │   │   │   │   ├── functions
│   │   │   │   │   │   ├── s3ExpressHttpSigningMiddleware.d.ts
│   │   │   │   │   │   ├── s3ExpressMiddleware.d.ts
│   │   │   │   │   │   └── signS3Express.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   └── interfaces
│   │   │   │   │       ├── S3ExpressIdentity.d.ts
│   │   │   │   │       └── S3ExpressIdentityProvider.d.ts
│   │   │   │   ├── s3Configuration.d.ts
│   │   │   │   ├── throw-200-exceptions.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── bucket-endpoint-middleware.d.ts
│   │   │   │   │   ├── check-content-length-header.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── region-redirect-endpoint-middleware.d.ts
│   │   │   │   │   ├── region-redirect-middleware.d.ts
│   │   │   │   │   ├── s3-expires-middleware.d.ts
│   │   │   │   │   ├── s3-express
│   │   │   │   │   │   ├── classes
│   │   │   │   │   │   │   ├── S3ExpressIdentityCache.d.ts
│   │   │   │   │   │   │   ├── S3ExpressIdentityCacheEntry.d.ts
│   │   │   │   │   │   │   ├── S3ExpressIdentityProviderImpl.d.ts
│   │   │   │   │   │   │   └── SignatureV4S3Express.d.ts
│   │   │   │   │   │   ├── constants.d.ts
│   │   │   │   │   │   ├── functions
│   │   │   │   │   │   │   ├── s3ExpressHttpSigningMiddleware.d.ts
│   │   │   │   │   │   │   ├── s3ExpressMiddleware.d.ts
│   │   │   │   │   │   │   └── signS3Express.d.ts
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   └── interfaces
│   │   │   │   │   │       ├── S3ExpressIdentity.d.ts
│   │   │   │   │   │       └── S3ExpressIdentityProvider.d.ts
│   │   │   │   │   ├── s3Configuration.d.ts
│   │   │   │   │   ├── throw-200-exceptions.d.ts
│   │   │   │   │   └── validate-bucket-name.d.ts
│   │   │   │   └── validate-bucket-name.d.ts
│   │   │   └── package.json
│   │   ├── middleware-ssec
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── middleware-user-agent
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── check-features.js
│   │   │   │   ├── configurations.js
│   │   │   │   ├── constants.js
│   │   │   │   ├── encode-features.js
│   │   │   │   ├── index.js
│   │   │   │   └── user-agent-middleware.js
│   │   │   ├── dist-types
│   │   │   │   ├── check-features.d.ts
│   │   │   │   ├── configurations.d.ts
│   │   │   │   ├── constants.d.ts
│   │   │   │   ├── encode-features.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── check-features.d.ts
│   │   │   │   │   ├── configurations.d.ts
│   │   │   │   │   ├── constants.d.ts
│   │   │   │   │   ├── encode-features.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   └── user-agent-middleware.d.ts
│   │   │   │   └── user-agent-middleware.d.ts
│   │   │   └── package.json
│   │   ├── nested-clients
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── index.js
│   │   │   │   └── submodules
│   │   │   │       ├── sso-oidc
│   │   │   │       │   ├── auth
│   │   │   │       │   │   └── httpAuthSchemeProvider.js
│   │   │   │       │   ├── endpoint
│   │   │   │       │   │   ├── endpointResolver.js
│   │   │   │       │   │   └── ruleset.js
│   │   │   │       │   ├── index.js
│   │   │   │       │   ├── runtimeConfig.browser.js
│   │   │   │       │   ├── runtimeConfig.js
│   │   │   │       │   ├── runtimeConfig.native.js
│   │   │   │       │   └── runtimeConfig.shared.js
│   │   │   │       └── sts
│   │   │   │           ├── STSClient.js
│   │   │   │           ├── auth
│   │   │   │           │   ├── httpAuthExtensionConfiguration.js
│   │   │   │           │   └── httpAuthSchemeProvider.js
│   │   │   │           ├── endpoint
│   │   │   │           │   ├── EndpointParameters.js
│   │   │   │           │   ├── endpointResolver.js
│   │   │   │           │   └── ruleset.js
│   │   │   │           ├── index.js
│   │   │   │           ├── runtimeConfig.browser.js
│   │   │   │           ├── runtimeConfig.js
│   │   │   │           ├── runtimeConfig.native.js
│   │   │   │           ├── runtimeConfig.shared.js
│   │   │   │           └── runtimeExtensions.js
│   │   │   ├── dist-es
│   │   │   │   ├── index.js
│   │   │   │   └── submodules
│   │   │   │       ├── sso-oidc
│   │   │   │       │   ├── SSOOIDC.js
│   │   │   │       │   ├── SSOOIDCClient.js
│   │   │   │       │   ├── auth
│   │   │   │       │   │   ├── httpAuthExtensionConfiguration.js
│   │   │   │       │   │   └── httpAuthSchemeProvider.js
│   │   │   │       │   ├── commands
│   │   │   │       │   │   ├── CreateTokenCommand.js
│   │   │   │       │   │   └── index.js
│   │   │   │       │   ├── endpoint
│   │   │   │       │   │   ├── EndpointParameters.js
│   │   │   │       │   │   ├── endpointResolver.js
│   │   │   │       │   │   └── ruleset.js
│   │   │   │       │   ├── extensionConfiguration.js
│   │   │   │       │   ├── index.js
│   │   │   │       │   ├── models
│   │   │   │       │   │   ├── SSOOIDCServiceException.js
│   │   │   │       │   │   ├── index.js
│   │   │   │       │   │   └── models_0.js
│   │   │   │       │   ├── protocols
│   │   │   │       │   │   └── Aws_restJson1.js
│   │   │   │       │   ├── runtimeConfig.browser.js
│   │   │   │       │   ├── runtimeConfig.js
│   │   │   │       │   ├── runtimeConfig.native.js
│   │   │   │       │   ├── runtimeConfig.shared.js
│   │   │   │       │   └── runtimeExtensions.js
│   │   │   │       └── sts
│   │   │   │           ├── STS.js
│   │   │   │           ├── STSClient.js
│   │   │   │           ├── auth
│   │   │   │           │   ├── httpAuthExtensionConfiguration.js
│   │   │   │           │   └── httpAuthSchemeProvider.js
│   │   │   │           ├── commands
│   │   │   │           │   ├── AssumeRoleCommand.js
│   │   │   │           │   ├── AssumeRoleWithWebIdentityCommand.js
│   │   │   │           │   └── index.js
│   │   │   │           ├── defaultRoleAssumers.js
│   │   │   │           ├── defaultStsRoleAssumers.js
│   │   │   │           ├── endpoint
│   │   │   │           │   ├── EndpointParameters.js
│   │   │   │           │   ├── endpointResolver.js
│   │   │   │           │   └── ruleset.js
│   │   │   │           ├── extensionConfiguration.js
│   │   │   │           ├── index.js
│   │   │   │           ├── models
│   │   │   │           │   ├── STSServiceException.js
│   │   │   │           │   ├── index.js
│   │   │   │           │   └── models_0.js
│   │   │   │           ├── protocols
│   │   │   │           │   └── Aws_query.js
│   │   │   │           ├── runtimeConfig.browser.js
│   │   │   │           ├── runtimeConfig.js
│   │   │   │           ├── runtimeConfig.native.js
│   │   │   │           ├── runtimeConfig.shared.js
│   │   │   │           └── runtimeExtensions.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── submodules
│   │   │   │   │   ├── sso-oidc
│   │   │   │   │   │   ├── SSOOIDC.d.ts
│   │   │   │   │   │   ├── SSOOIDCClient.d.ts
│   │   │   │   │   │   ├── auth
│   │   │   │   │   │   │   ├── httpAuthExtensionConfiguration.d.ts
│   │   │   │   │   │   │   └── httpAuthSchemeProvider.d.ts
│   │   │   │   │   │   ├── commands
│   │   │   │   │   │   │   ├── CreateTokenCommand.d.ts
│   │   │   │   │   │   │   └── index.d.ts
│   │   │   │   │   │   ├── endpoint
│   │   │   │   │   │   │   ├── EndpointParameters.d.ts
│   │   │   │   │   │   │   ├── endpointResolver.d.ts
│   │   │   │   │   │   │   └── ruleset.d.ts
│   │   │   │   │   │   ├── extensionConfiguration.d.ts
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── models
│   │   │   │   │   │   │   ├── SSOOIDCServiceException.d.ts
│   │   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   │   └── models_0.d.ts
│   │   │   │   │   │   ├── protocols
│   │   │   │   │   │   │   └── Aws_restJson1.d.ts
│   │   │   │   │   │   ├── runtimeConfig.browser.d.ts
│   │   │   │   │   │   ├── runtimeConfig.d.ts
│   │   │   │   │   │   ├── runtimeConfig.native.d.ts
│   │   │   │   │   │   ├── runtimeConfig.shared.d.ts
│   │   │   │   │   │   └── runtimeExtensions.d.ts
│   │   │   │   │   └── sts
│   │   │   │   │       ├── STS.d.ts
│   │   │   │   │       ├── STSClient.d.ts
│   │   │   │   │       ├── auth
│   │   │   │   │       │   ├── httpAuthExtensionConfiguration.d.ts
│   │   │   │   │       │   └── httpAuthSchemeProvider.d.ts
│   │   │   │   │       ├── commands
│   │   │   │   │       │   ├── AssumeRoleCommand.d.ts
│   │   │   │   │       │   ├── AssumeRoleWithWebIdentityCommand.d.ts
│   │   │   │   │       │   └── index.d.ts
│   │   │   │   │       ├── defaultRoleAssumers.d.ts
│   │   │   │   │       ├── defaultStsRoleAssumers.d.ts
│   │   │   │   │       ├── endpoint
│   │   │   │   │       │   ├── EndpointParameters.d.ts
│   │   │   │   │       │   ├── endpointResolver.d.ts
│   │   │   │   │       │   └── ruleset.d.ts
│   │   │   │   │       ├── extensionConfiguration.d.ts
│   │   │   │   │       ├── index.d.ts
│   │   │   │   │       ├── models
│   │   │   │   │       │   ├── STSServiceException.d.ts
│   │   │   │   │       │   ├── index.d.ts
│   │   │   │   │       │   └── models_0.d.ts
│   │   │   │   │       ├── protocols
│   │   │   │   │       │   └── Aws_query.d.ts
│   │   │   │   │       ├── runtimeConfig.browser.d.ts
│   │   │   │   │       ├── runtimeConfig.d.ts
│   │   │   │   │       ├── runtimeConfig.native.d.ts
│   │   │   │   │       ├── runtimeConfig.shared.d.ts
│   │   │   │   │       └── runtimeExtensions.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── index.d.ts
│   │   │   │       └── submodules
│   │   │   │           ├── sso-oidc
│   │   │   │           │   ├── SSOOIDC.d.ts
│   │   │   │           │   ├── SSOOIDCClient.d.ts
│   │   │   │           │   ├── auth
│   │   │   │           │   │   ├── httpAuthExtensionConfiguration.d.ts
│   │   │   │           │   │   └── httpAuthSchemeProvider.d.ts
│   │   │   │           │   ├── commands
│   │   │   │           │   │   ├── CreateTokenCommand.d.ts
│   │   │   │           │   │   └── index.d.ts
│   │   │   │           │   ├── endpoint
│   │   │   │           │   │   ├── EndpointParameters.d.ts
│   │   │   │           │   │   ├── endpointResolver.d.ts
│   │   │   │           │   │   └── ruleset.d.ts
│   │   │   │           │   ├── extensionConfiguration.d.ts
│   │   │   │           │   ├── index.d.ts
│   │   │   │           │   ├── models
│   │   │   │           │   │   ├── SSOOIDCServiceException.d.ts
│   │   │   │           │   │   ├── index.d.ts
│   │   │   │           │   │   └── models_0.d.ts
│   │   │   │           │   ├── protocols
│   │   │   │           │   │   └── Aws_restJson1.d.ts
│   │   │   │           │   ├── runtimeConfig.browser.d.ts
│   │   │   │           │   ├── runtimeConfig.d.ts
│   │   │   │           │   ├── runtimeConfig.native.d.ts
│   │   │   │           │   ├── runtimeConfig.shared.d.ts
│   │   │   │           │   └── runtimeExtensions.d.ts
│   │   │   │           └── sts
│   │   │   │               ├── STS.d.ts
│   │   │   │               ├── STSClient.d.ts
│   │   │   │               ├── auth
│   │   │   │               │   ├── httpAuthExtensionConfiguration.d.ts
│   │   │   │               │   └── httpAuthSchemeProvider.d.ts
│   │   │   │               ├── commands
│   │   │   │               │   ├── AssumeRoleCommand.d.ts
│   │   │   │               │   ├── AssumeRoleWithWebIdentityCommand.d.ts
│   │   │   │               │   └── index.d.ts
│   │   │   │               ├── defaultRoleAssumers.d.ts
│   │   │   │               ├── defaultStsRoleAssumers.d.ts
│   │   │   │               ├── endpoint
│   │   │   │               │   ├── EndpointParameters.d.ts
│   │   │   │               │   ├── endpointResolver.d.ts
│   │   │   │               │   └── ruleset.d.ts
│   │   │   │               ├── extensionConfiguration.d.ts
│   │   │   │               ├── index.d.ts
│   │   │   │               ├── models
│   │   │   │               │   ├── STSServiceException.d.ts
│   │   │   │               │   ├── index.d.ts
│   │   │   │               │   └── models_0.d.ts
│   │   │   │               ├── protocols
│   │   │   │               │   └── Aws_query.d.ts
│   │   │   │               ├── runtimeConfig.browser.d.ts
│   │   │   │               ├── runtimeConfig.d.ts
│   │   │   │               ├── runtimeConfig.native.d.ts
│   │   │   │               ├── runtimeConfig.shared.d.ts
│   │   │   │               └── runtimeExtensions.d.ts
│   │   │   ├── package.json
│   │   │   ├── sso-oidc.d.ts
│   │   │   ├── sso-oidc.js
│   │   │   ├── sts.d.ts
│   │   │   └── sts.js
│   │   ├── region-config-resolver
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── extensions
│   │   │   │   │   └── index.js
│   │   │   │   ├── index.js
│   │   │   │   └── regionConfig
│   │   │   │       ├── config.js
│   │   │   │       ├── getRealRegion.js
│   │   │   │       ├── index.js
│   │   │   │       ├── isFipsRegion.js
│   │   │   │       └── resolveRegionConfig.js
│   │   │   ├── dist-types
│   │   │   │   ├── extensions
│   │   │   │   │   └── index.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── regionConfig
│   │   │   │   │   ├── config.d.ts
│   │   │   │   │   ├── getRealRegion.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── isFipsRegion.d.ts
│   │   │   │   │   └── resolveRegionConfig.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── extensions
│   │   │   │       │   └── index.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       └── regionConfig
│   │   │   │           ├── config.d.ts
│   │   │   │           ├── getRealRegion.d.ts
│   │   │   │           ├── index.d.ts
│   │   │   │           ├── isFipsRegion.d.ts
│   │   │   │           └── resolveRegionConfig.d.ts
│   │   │   └── package.json
│   │   ├── signature-v4-multi-region
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── SignatureV4MultiRegion.js
│   │   │   │   ├── index.js
│   │   │   │   └── signature-v4-crt-container.js
│   │   │   ├── dist-types
│   │   │   │   ├── SignatureV4MultiRegion.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── signature-v4-crt-container.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── SignatureV4MultiRegion.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       └── signature-v4-crt-container.d.ts
│   │   │   └── package.json
│   │   ├── token-providers
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── constants.js
│   │   │   │   ├── fromSso.js
│   │   │   │   ├── fromStatic.js
│   │   │   │   ├── getNewSsoOidcToken.js
│   │   │   │   ├── getSsoOidcClient.js
│   │   │   │   ├── index.js
│   │   │   │   ├── nodeProvider.js
│   │   │   │   ├── validateTokenExpiry.js
│   │   │   │   ├── validateTokenKey.js
│   │   │   │   └── writeSSOTokenToFile.js
│   │   │   ├── dist-types
│   │   │   │   ├── constants.d.ts
│   │   │   │   ├── fromSso.d.ts
│   │   │   │   ├── fromStatic.d.ts
│   │   │   │   ├── getNewSsoOidcToken.d.ts
│   │   │   │   ├── getSsoOidcClient.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── nodeProvider.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── constants.d.ts
│   │   │   │   │   ├── fromSso.d.ts
│   │   │   │   │   ├── fromStatic.d.ts
│   │   │   │   │   ├── getNewSsoOidcToken.d.ts
│   │   │   │   │   ├── getSsoOidcClient.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── nodeProvider.d.ts
│   │   │   │   │   ├── validateTokenExpiry.d.ts
│   │   │   │   │   ├── validateTokenKey.d.ts
│   │   │   │   │   └── writeSSOTokenToFile.d.ts
│   │   │   │   ├── validateTokenExpiry.d.ts
│   │   │   │   ├── validateTokenKey.d.ts
│   │   │   │   └── writeSSOTokenToFile.d.ts
│   │   │   └── package.json
│   │   ├── types
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── abort.js
│   │   │   │   ├── auth.js
│   │   │   │   ├── blob
│   │   │   │   │   └── blob-types.js
│   │   │   │   ├── checksum.js
│   │   │   │   ├── client.js
│   │   │   │   ├── command.js
│   │   │   │   ├── connection.js
│   │   │   │   ├── credentials.js
│   │   │   │   ├── crypto.js
│   │   │   │   ├── dns.js
│   │   │   │   ├── encode.js
│   │   │   │   ├── endpoint.js
│   │   │   │   ├── eventStream.js
│   │   │   │   ├── extensions
│   │   │   │   │   └── index.js
│   │   │   │   ├── feature-ids.js
│   │   │   │   ├── http.js
│   │   │   │   ├── identity
│   │   │   │   │   ├── AnonymousIdentity.js
│   │   │   │   │   ├── AwsCredentialIdentity.js
│   │   │   │   │   ├── Identity.js
│   │   │   │   │   ├── LoginIdentity.js
│   │   │   │   │   ├── TokenIdentity.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── index.js
│   │   │   │   ├── logger.js
│   │   │   │   ├── middleware.js
│   │   │   │   ├── pagination.js
│   │   │   │   ├── profile.js
│   │   │   │   ├── request.js
│   │   │   │   ├── response.js
│   │   │   │   ├── retry.js
│   │   │   │   ├── serde.js
│   │   │   │   ├── shapes.js
│   │   │   │   ├── signature.js
│   │   │   │   ├── stream.js
│   │   │   │   ├── token.js
│   │   │   │   ├── transfer.js
│   │   │   │   ├── uri.js
│   │   │   │   ├── util.js
│   │   │   │   └── waiter.js
│   │   │   ├── dist-types
│   │   │   │   ├── abort.d.ts
│   │   │   │   ├── auth.d.ts
│   │   │   │   ├── blob
│   │   │   │   │   └── blob-types.d.ts
│   │   │   │   ├── checksum.d.ts
│   │   │   │   ├── client.d.ts
│   │   │   │   ├── command.d.ts
│   │   │   │   ├── connection.d.ts
│   │   │   │   ├── credentials.d.ts
│   │   │   │   ├── crypto.d.ts
│   │   │   │   ├── dns.d.ts
│   │   │   │   ├── encode.d.ts
│   │   │   │   ├── endpoint.d.ts
│   │   │   │   ├── eventStream.d.ts
│   │   │   │   ├── extensions
│   │   │   │   │   └── index.d.ts
│   │   │   │   ├── feature-ids.d.ts
│   │   │   │   ├── http.d.ts
│   │   │   │   ├── identity
│   │   │   │   │   ├── AnonymousIdentity.d.ts
│   │   │   │   │   ├── AwsCredentialIdentity.d.ts
│   │   │   │   │   ├── Identity.d.ts
│   │   │   │   │   ├── LoginIdentity.d.ts
│   │   │   │   │   ├── TokenIdentity.d.ts
│   │   │   │   │   └── index.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── logger.d.ts
│   │   │   │   ├── middleware.d.ts
│   │   │   │   ├── pagination.d.ts
│   │   │   │   ├── profile.d.ts
│   │   │   │   ├── request.d.ts
│   │   │   │   ├── response.d.ts
│   │   │   │   ├── retry.d.ts
│   │   │   │   ├── serde.d.ts
│   │   │   │   ├── shapes.d.ts
│   │   │   │   ├── signature.d.ts
│   │   │   │   ├── stream.d.ts
│   │   │   │   ├── token.d.ts
│   │   │   │   ├── transfer.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── abort.d.ts
│   │   │   │   │   ├── auth.d.ts
│   │   │   │   │   ├── blob
│   │   │   │   │   │   └── blob-types.d.ts
│   │   │   │   │   ├── checksum.d.ts
│   │   │   │   │   ├── client.d.ts
│   │   │   │   │   ├── command.d.ts
│   │   │   │   │   ├── connection.d.ts
│   │   │   │   │   ├── credentials.d.ts
│   │   │   │   │   ├── crypto.d.ts
│   │   │   │   │   ├── dns.d.ts
│   │   │   │   │   ├── encode.d.ts
│   │   │   │   │   ├── endpoint.d.ts
│   │   │   │   │   ├── eventStream.d.ts
│   │   │   │   │   ├── extensions
│   │   │   │   │   │   └── index.d.ts
│   │   │   │   │   ├── feature-ids.d.ts
│   │   │   │   │   ├── http.d.ts
│   │   │   │   │   ├── identity
│   │   │   │   │   │   ├── AnonymousIdentity.d.ts
│   │   │   │   │   │   ├── AwsCredentialIdentity.d.ts
│   │   │   │   │   │   ├── Identity.d.ts
│   │   │   │   │   │   ├── LoginIdentity.d.ts
│   │   │   │   │   │   ├── TokenIdentity.d.ts
│   │   │   │   │   │   └── index.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── logger.d.ts
│   │   │   │   │   ├── middleware.d.ts
│   │   │   │   │   ├── pagination.d.ts
│   │   │   │   │   ├── profile.d.ts
│   │   │   │   │   ├── request.d.ts
│   │   │   │   │   ├── response.d.ts
│   │   │   │   │   ├── retry.d.ts
│   │   │   │   │   ├── serde.d.ts
│   │   │   │   │   ├── shapes.d.ts
│   │   │   │   │   ├── signature.d.ts
│   │   │   │   │   ├── stream.d.ts
│   │   │   │   │   ├── token.d.ts
│   │   │   │   │   ├── transfer.d.ts
│   │   │   │   │   ├── uri.d.ts
│   │   │   │   │   ├── util.d.ts
│   │   │   │   │   └── waiter.d.ts
│   │   │   │   ├── uri.d.ts
│   │   │   │   ├── util.d.ts
│   │   │   │   └── waiter.d.ts
│   │   │   └── package.json
│   │   ├── util-arn-parser
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── util-endpoints
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── index.js
│   │   │   │   └── lib
│   │   │   │       └── aws
│   │   │   │           └── partitions.json
│   │   │   ├── dist-es
│   │   │   │   ├── aws.js
│   │   │   │   ├── index.js
│   │   │   │   ├── lib
│   │   │   │   │   ├── aws
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── isVirtualHostableS3Bucket.js
│   │   │   │   │   │   ├── parseArn.js
│   │   │   │   │   │   ├── partition.js
│   │   │   │   │   │   └── partitions.json
│   │   │   │   │   └── isIpAddress.js
│   │   │   │   ├── resolveEndpoint.js
│   │   │   │   └── types
│   │   │   │       ├── EndpointError.js
│   │   │   │       ├── EndpointRuleObject.js
│   │   │   │       ├── ErrorRuleObject.js
│   │   │   │       ├── RuleSetObject.js
│   │   │   │       ├── TreeRuleObject.js
│   │   │   │       ├── index.js
│   │   │   │       └── shared.js
│   │   │   ├── dist-types
│   │   │   │   ├── aws.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── lib
│   │   │   │   │   ├── aws
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── isVirtualHostableS3Bucket.d.ts
│   │   │   │   │   │   ├── parseArn.d.ts
│   │   │   │   │   │   └── partition.d.ts
│   │   │   │   │   └── isIpAddress.d.ts
│   │   │   │   ├── resolveEndpoint.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── aws.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── lib
│   │   │   │   │   │   ├── aws
│   │   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   │   ├── isVirtualHostableS3Bucket.d.ts
│   │   │   │   │   │   │   ├── parseArn.d.ts
│   │   │   │   │   │   │   └── partition.d.ts
│   │   │   │   │   │   └── isIpAddress.d.ts
│   │   │   │   │   ├── resolveEndpoint.d.ts
│   │   │   │   │   └── types
│   │   │   │   │       ├── EndpointError.d.ts
│   │   │   │   │       ├── EndpointRuleObject.d.ts
│   │   │   │   │       ├── ErrorRuleObject.d.ts
│   │   │   │   │       ├── RuleSetObject.d.ts
│   │   │   │   │       ├── TreeRuleObject.d.ts
│   │   │   │   │       ├── index.d.ts
│   │   │   │   │       └── shared.d.ts
│   │   │   │   └── types
│   │   │   │       ├── EndpointError.d.ts
│   │   │   │       ├── EndpointRuleObject.d.ts
│   │   │   │       ├── ErrorRuleObject.d.ts
│   │   │   │       ├── RuleSetObject.d.ts
│   │   │   │       ├── TreeRuleObject.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       └── shared.d.ts
│   │   │   └── package.json
│   │   ├── util-locate-window
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── util-user-agent-browser
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── configurations.js
│   │   │   │   ├── index.js
│   │   │   │   └── index.native.js
│   │   │   ├── dist-es
│   │   │   │   ├── configurations.js
│   │   │   │   ├── index.js
│   │   │   │   └── index.native.js
│   │   │   ├── dist-types
│   │   │   │   ├── configurations.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.native.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── configurations.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       └── index.native.d.ts
│   │   │   └── package.json
│   │   ├── util-user-agent-node
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── crt-availability.js
│   │   │   │   ├── defaultUserAgent.js
│   │   │   │   ├── index.js
│   │   │   │   ├── is-crt-available.js
│   │   │   │   └── nodeAppIdConfigOptions.js
│   │   │   ├── dist-types
│   │   │   │   ├── crt-availability.d.ts
│   │   │   │   ├── defaultUserAgent.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── is-crt-available.d.ts
│   │   │   │   ├── nodeAppIdConfigOptions.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── crt-availability.d.ts
│   │   │   │       ├── defaultUserAgent.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── is-crt-available.d.ts
│   │   │   │       └── nodeAppIdConfigOptions.d.ts
│   │   │   └── package.json
│   │   └── xml-builder
│   │       ├── LICENSE
│   │       ├── README.md
│   │       ├── dist-cjs
│   │       │   └── index.js
│   │       ├── dist-es
│   │       │   ├── XmlNode.js
│   │       │   ├── XmlText.js
│   │       │   ├── escape-attribute.js
│   │       │   ├── escape-element.js
│   │       │   ├── index.js
│   │       │   └── stringable.js
│   │       ├── dist-types
│   │       │   ├── XmlNode.d.ts
│   │       │   ├── XmlText.d.ts
│   │       │   ├── escape-attribute.d.ts
│   │       │   ├── escape-element.d.ts
│   │       │   ├── index.d.ts
│   │       │   ├── stringable.d.ts
│   │       │   └── ts3.4
│   │       │       ├── XmlNode.d.ts
│   │       │       ├── XmlText.d.ts
│   │       │       ├── escape-attribute.d.ts
│   │       │       ├── escape-element.d.ts
│   │       │       ├── index.d.ts
│   │       │       └── stringable.d.ts
│   │       └── package.json
│   ├── @cspotcode
│   │   └── source-map-support
│   │       ├── LICENSE.md
│   │       ├── README.md
│   │       ├── browser-source-map-support.js
│   │       ├── package.json
│   │       ├── register-hook-require.d.ts
│   │       ├── register-hook-require.js
│   │       ├── register.d.ts
│   │       ├── register.js
│   │       ├── source-map-support.d.ts
│   │       └── source-map-support.js
│   ├── @derhuerst
│   │   └── http-basic
│   │       ├── LICENSE
│   │       ├── README.md
│   │       ├── lib
│   │       │   ├── CachedResponse.d.ts
│   │       │   ├── CachedResponse.js
│   │       │   ├── CachedResponse.js.flow
│   │       │   ├── Callback.d.ts
│   │       │   ├── Callback.js
│   │       │   ├── Callback.js.flow
│   │       │   ├── FileCache.d.ts
│   │       │   ├── FileCache.js
│   │       │   ├── FileCache.js.flow
│   │       │   ├── Headers.d.ts
│   │       │   ├── Headers.js
│   │       │   ├── Headers.js.flow
│   │       │   ├── HttpVerb.d.ts
│   │       │   ├── HttpVerb.js
│   │       │   ├── HttpVerb.js.flow
│   │       │   ├── ICache.d.ts
│   │       │   ├── ICache.js
│   │       │   ├── ICache.js.flow
│   │       │   ├── MemoryCache.d.ts
│   │       │   ├── MemoryCache.js
│   │       │   ├── MemoryCache.js.flow
│   │       │   ├── Options.d.ts
│   │       │   ├── Options.js
│   │       │   ├── Options.js.flow
│   │       │   ├── cache-control-utils.d.ts
│   │       │   ├── cache-control-utils.js
│   │       │   ├── cache-control-utils.js.flow
│   │       │   ├── cache-utils.d.ts
│   │       │   ├── cache-utils.js
│   │       │   ├── cache-utils.js.flow
│   │       │   ├── index.d.ts
│   │       │   ├── index.js
│   │       │   └── index.js.flow
│   │       └── package.json
│   ├── @discordjs
│   │   ├── builders
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist
│   │   │   │   ├── index.d.mts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── index.mjs
│   │   │   │   └── index.mjs.map
│   │   │   ├── node_modules
│   │   │   └── package.json
│   │   ├── collection
│   │   │   ├── CHANGELOG.md
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist
│   │   │   │   ├── index.d.mts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── index.mjs
│   │   │   │   └── index.mjs.map
│   │   │   └── package.json
│   │   ├── formatters
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist
│   │   │   │   ├── index.d.mts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── index.mjs
│   │   │   │   └── index.mjs.map
│   │   │   ├── node_modules
│   │   │   └── package.json
│   │   ├── node-pre-gyp
│   │   │   ├── .eslintrc.json
│   │   │   ├── .gitattributes
│   │   │   ├── .github
│   │   │   │   ├── CODE_OF_CONDUCT.md
│   │   │   │   ├── COMMIT_CONVENTION.md
│   │   │   │   ├── CONTRIBUTING.md
│   │   │   │   ├── ISSUE_TEMPLATE
│   │   │   │   │   ├── bug_report.md
│   │   │   │   │   ├── config.yml
│   │   │   │   │   └── feature_request.md
│   │   │   │   └── PULL_REQUEST_TEMPLATE.md
│   │   │   ├── .prettierrc.json
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── bin
│   │   │   │   ├── node-pre-gyp
│   │   │   │   └── node-pre-gyp.cmd
│   │   │   ├── lib
│   │   │   │   ├── build.js
│   │   │   │   ├── clean.js
│   │   │   │   ├── configure.js
│   │   │   │   ├── install.js
│   │   │   │   ├── main.js
│   │   │   │   ├── node-pre-gyp.js
│   │   │   │   ├── package.js
│   │   │   │   ├── pre-binding.js
│   │   │   │   ├── rebuild.js
│   │   │   │   ├── reinstall.js
│   │   │   │   ├── reveal.js
│   │   │   │   ├── testbinary.js
│   │   │   │   ├── testpackage.js
│   │   │   │   └── util
│   │   │   │       ├── abi_crosswalk.json
│   │   │   │       ├── compile.js
│   │   │   │       ├── handle_gyp_opts.js
│   │   │   │       ├── napi.js
│   │   │   │       └── versioning.js
│   │   │   ├── package.json
│   │   │   └── scripts
│   │   │       ├── abi_crosswalk.js
│   │   │       └── latest-by-abi.js
│   │   ├── opus
│   │   │   ├── .eslintrc.json
│   │   │   ├── .gitattributes
│   │   │   ├── .github
│   │   │   │   ├── CODE_OF_CONDUCT.md
│   │   │   │   ├── COMMIT_CONVENTION.md
│   │   │   │   ├── CONTRIBUTING.md
│   │   │   │   ├── ISSUE_TEMPLATE
│   │   │   │   │   ├── 01-bug_report.yml
│   │   │   │   │   ├── 02-feature_request.yml
│   │   │   │   │   └── config.yml
│   │   │   │   ├── PULL_REQUEST_TEMPLATE.md
│   │   │   │   └── workflows
│   │   │   │       ├── build.yml
│   │   │   │       └── release.yml
│   │   │   ├── .prettierignore
│   │   │   ├── .prettierrc.json
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── binding.gyp
│   │   │   ├── build-tmp-napi-v3
│   │   │   │   ├── Makefile
│   │   │   │   ├── Release
│   │   │   │   │   ├── .deps
│   │   │   │   │   │   ├── Release
│   │   │   │   │   │   │   ├── obj.target
│   │   │   │   │   │   │   │   ├── libopus
│   │   │   │   │   │   │   │   │   └── deps
│   │   │   │   │   │   │   │   │       └── opus
│   │   │   │   │   │   │   │   │           ├── celt
│   │   │   │   │   │   │   │   │           │   ├── arm
│   │   │   │   │   │   │   │   │           │   │   ├── arm_celt_map.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── armcpu.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── celt_neon_intr.o.d
│   │   │   │   │   │   │   │   │           │   │   └── pitch_neon_intr.o.d
│   │   │   │   │   │   │   │   │           │   ├── bands.o.d
│   │   │   │   │   │   │   │   │           │   ├── celt.o.d
│   │   │   │   │   │   │   │   │           │   ├── celt_decoder.o.d
│   │   │   │   │   │   │   │   │           │   ├── celt_encoder.o.d
│   │   │   │   │   │   │   │   │           │   ├── celt_lpc.o.d
│   │   │   │   │   │   │   │   │           │   ├── cwrs.o.d
│   │   │   │   │   │   │   │   │           │   ├── entcode.o.d
│   │   │   │   │   │   │   │   │           │   ├── entdec.o.d
│   │   │   │   │   │   │   │   │           │   ├── entenc.o.d
│   │   │   │   │   │   │   │   │           │   ├── kiss_fft.o.d
│   │   │   │   │   │   │   │   │           │   ├── laplace.o.d
│   │   │   │   │   │   │   │   │           │   ├── mathops.o.d
│   │   │   │   │   │   │   │   │           │   ├── mdct.o.d
│   │   │   │   │   │   │   │   │           │   ├── modes.o.d
│   │   │   │   │   │   │   │   │           │   ├── pitch.o.d
│   │   │   │   │   │   │   │   │           │   ├── quant_bands.o.d
│   │   │   │   │   │   │   │   │           │   ├── rate.o.d
│   │   │   │   │   │   │   │   │           │   └── vq.o.d
│   │   │   │   │   │   │   │   │           ├── silk
│   │   │   │   │   │   │   │   │           │   ├── A2NLSF.o.d
│   │   │   │   │   │   │   │   │           │   ├── CNG.o.d
│   │   │   │   │   │   │   │   │           │   ├── HP_variable_cutoff.o.d
│   │   │   │   │   │   │   │   │           │   ├── LPC_analysis_filter.o.d
│   │   │   │   │   │   │   │   │           │   ├── LPC_fit.o.d
│   │   │   │   │   │   │   │   │           │   ├── LPC_inv_pred_gain.o.d
│   │   │   │   │   │   │   │   │           │   ├── LP_variable_cutoff.o.d
│   │   │   │   │   │   │   │   │           │   ├── NLSF2A.o.d
│   │   │   │   │   │   │   │   │           │   ├── NLSF_VQ.o.d
│   │   │   │   │   │   │   │   │           │   ├── NLSF_VQ_weights_laroia.o.d
│   │   │   │   │   │   │   │   │           │   ├── NLSF_decode.o.d
│   │   │   │   │   │   │   │   │           │   ├── NLSF_del_dec_quant.o.d
│   │   │   │   │   │   │   │   │           │   ├── NLSF_encode.o.d
│   │   │   │   │   │   │   │   │           │   ├── NLSF_stabilize.o.d
│   │   │   │   │   │   │   │   │           │   ├── NLSF_unpack.o.d
│   │   │   │   │   │   │   │   │           │   ├── NSQ.o.d
│   │   │   │   │   │   │   │   │           │   ├── NSQ_del_dec.o.d
│   │   │   │   │   │   │   │   │           │   ├── PLC.o.d
│   │   │   │   │   │   │   │   │           │   ├── VAD.o.d
│   │   │   │   │   │   │   │   │           │   ├── VQ_WMat_EC.o.d
│   │   │   │   │   │   │   │   │           │   ├── ana_filt_bank_1.o.d
│   │   │   │   │   │   │   │   │           │   ├── arm
│   │   │   │   │   │   │   │   │           │   │   └── LPC_inv_pred_gain_neon_intr.o.d
│   │   │   │   │   │   │   │   │           │   ├── biquad_alt.o.d
│   │   │   │   │   │   │   │   │           │   ├── bwexpander.o.d
│   │   │   │   │   │   │   │   │           │   ├── bwexpander_32.o.d
│   │   │   │   │   │   │   │   │           │   ├── check_control_input.o.d
│   │   │   │   │   │   │   │   │           │   ├── code_signs.o.d
│   │   │   │   │   │   │   │   │           │   ├── control_SNR.o.d
│   │   │   │   │   │   │   │   │           │   ├── control_audio_bandwidth.o.d
│   │   │   │   │   │   │   │   │           │   ├── control_codec.o.d
│   │   │   │   │   │   │   │   │           │   ├── debug.o.d
│   │   │   │   │   │   │   │   │           │   ├── dec_API.o.d
│   │   │   │   │   │   │   │   │           │   ├── decode_core.o.d
│   │   │   │   │   │   │   │   │           │   ├── decode_frame.o.d
│   │   │   │   │   │   │   │   │           │   ├── decode_indices.o.d
│   │   │   │   │   │   │   │   │           │   ├── decode_parameters.o.d
│   │   │   │   │   │   │   │   │           │   ├── decode_pitch.o.d
│   │   │   │   │   │   │   │   │           │   ├── decode_pulses.o.d
│   │   │   │   │   │   │   │   │           │   ├── decoder_set_fs.o.d
│   │   │   │   │   │   │   │   │           │   ├── enc_API.o.d
│   │   │   │   │   │   │   │   │           │   ├── encode_indices.o.d
│   │   │   │   │   │   │   │   │           │   ├── encode_pulses.o.d
│   │   │   │   │   │   │   │   │           │   ├── fixed
│   │   │   │   │   │   │   │   │           │   │   ├── LTP_analysis_filter_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── LTP_scale_ctrl_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── apply_sine_window_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── autocorr_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── burg_modified_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── corrMatrix_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── encode_frame_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── find_LPC_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── find_LTP_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── find_pitch_lags_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── find_pred_coefs_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── k2a_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── k2a_Q16_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── noise_shape_analysis_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── pitch_analysis_core_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── process_gains_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── regularize_correlations_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── residual_energy16_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── residual_energy_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── schur64_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── schur_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── vector_ops_FIX.o.d
│   │   │   │   │   │   │   │   │           │   │   └── warped_autocorrelation_FIX.o.d
│   │   │   │   │   │   │   │   │           │   ├── float
│   │   │   │   │   │   │   │   │           │   │   ├── LPC_analysis_filter_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── LPC_inv_pred_gain_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── LTP_analysis_filter_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── LTP_scale_ctrl_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── apply_sine_window_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── autocorrelation_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── burg_modified_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── bwexpander_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── corrMatrix_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── encode_frame_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── energy_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── find_LPC_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── find_LTP_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── find_pitch_lags_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── find_pred_coefs_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── inner_product_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── k2a_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── noise_shape_analysis_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── pitch_analysis_core_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── process_gains_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── regularize_correlations_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── residual_energy_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── scale_copy_vector_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── scale_vector_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── schur_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── sort_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   ├── warped_autocorrelation_FLP.o.d
│   │   │   │   │   │   │   │   │           │   │   └── wrappers_FLP.o.d
│   │   │   │   │   │   │   │   │           │   ├── gain_quant.o.d
│   │   │   │   │   │   │   │   │           │   ├── init_decoder.o.d
│   │   │   │   │   │   │   │   │           │   ├── init_encoder.o.d
│   │   │   │   │   │   │   │   │           │   ├── inner_prod_aligned.o.d
│   │   │   │   │   │   │   │   │           │   ├── interpolate.o.d
│   │   │   │   │   │   │   │   │           │   ├── lin2log.o.d
│   │   │   │   │   │   │   │   │           │   ├── log2lin.o.d
│   │   │   │   │   │   │   │   │           │   ├── pitch_est_tables.o.d
│   │   │   │   │   │   │   │   │           │   ├── process_NLSFs.o.d
│   │   │   │   │   │   │   │   │           │   ├── quant_LTP_gains.o.d
│   │   │   │   │   │   │   │   │           │   ├── resampler.o.d
│   │   │   │   │   │   │   │   │           │   ├── resampler_down2.o.d
│   │   │   │   │   │   │   │   │           │   ├── resampler_down2_3.o.d
│   │   │   │   │   │   │   │   │           │   ├── resampler_private_AR2.o.d
│   │   │   │   │   │   │   │   │           │   ├── resampler_private_IIR_FIR.o.d
│   │   │   │   │   │   │   │   │           │   ├── resampler_private_down_FIR.o.d
│   │   │   │   │   │   │   │   │           │   ├── resampler_private_up2_HQ.o.d
│   │   │   │   │   │   │   │   │           │   ├── resampler_rom.o.d
│   │   │   │   │   │   │   │   │           │   ├── shell_coder.o.d
│   │   │   │   │   │   │   │   │           │   ├── sigm_Q15.o.d
│   │   │   │   │   │   │   │   │           │   ├── sort.o.d
│   │   │   │   │   │   │   │   │           │   ├── stereo_LR_to_MS.o.d
│   │   │   │   │   │   │   │   │           │   ├── stereo_MS_to_LR.o.d
│   │   │   │   │   │   │   │   │           │   ├── stereo_decode_pred.o.d
│   │   │   │   │   │   │   │   │           │   ├── stereo_encode_pred.o.d
│   │   │   │   │   │   │   │   │           │   ├── stereo_find_predictor.o.d
│   │   │   │   │   │   │   │   │           │   ├── stereo_quant_pred.o.d
│   │   │   │   │   │   │   │   │           │   ├── sum_sqr_shift.o.d
│   │   │   │   │   │   │   │   │           │   ├── table_LSF_cos.o.d
│   │   │   │   │   │   │   │   │           │   ├── tables_LTP.o.d
│   │   │   │   │   │   │   │   │           │   ├── tables_NLSF_CB_NB_MB.o.d
│   │   │   │   │   │   │   │   │           │   ├── tables_NLSF_CB_WB.o.d
│   │   │   │   │   │   │   │   │           │   ├── tables_gain.o.d
│   │   │   │   │   │   │   │   │           │   ├── tables_other.o.d
│   │   │   │   │   │   │   │   │           │   ├── tables_pitch_lag.o.d
│   │   │   │   │   │   │   │   │           │   └── tables_pulses_per_block.o.d
│   │   │   │   │   │   │   │   │           └── src
│   │   │   │   │   │   │   │   │               ├── analysis.o.d
│   │   │   │   │   │   │   │   │               ├── mapping_matrix.o.d
│   │   │   │   │   │   │   │   │               ├── mlp.o.d
│   │   │   │   │   │   │   │   │               ├── mlp_data.o.d
│   │   │   │   │   │   │   │   │               ├── opus.o.d
│   │   │   │   │   │   │   │   │               ├── opus_compare.o.d
│   │   │   │   │   │   │   │   │               ├── opus_decoder.o.d
│   │   │   │   │   │   │   │   │               ├── opus_encoder.o.d
│   │   │   │   │   │   │   │   │               ├── opus_multistream.o.d
│   │   │   │   │   │   │   │   │               ├── opus_multistream_decoder.o.d
│   │   │   │   │   │   │   │   │               ├── opus_multistream_encoder.o.d
│   │   │   │   │   │   │   │   │               ├── opus_projection_decoder.o.d
│   │   │   │   │   │   │   │   │               ├── opus_projection_encoder.o.d
│   │   │   │   │   │   │   │   │               └── repacketizer.o.d
│   │   │   │   │   │   │   │   └── opus
│   │   │   │   │   │   │   │       └── src
│   │   │   │   │   │   │   │           └── node-opus.o.d
│   │   │   │   │   │   │   ├── opus.a.d
│   │   │   │   │   │   │   └── opus.node.d
│   │   │   │   │   │   └── Users
│   │   │   │   │   │       └── buford
│   │   │   │   │   │           └── dev
│   │   │   │   │   │               └── dnd-scribe
│   │   │   │   │   │                   └── node_modules
│   │   │   │   │   │                       └── @discordjs
│   │   │   │   │   │                           └── opus
│   │   │   │   │   │                               └── prebuild
│   │   │   │   │   │                                   └── node-v131-napi-v3-darwin-arm64-unknown-unknown
│   │   │   │   │   │                                       └── opus.node.d
│   │   │   │   │   ├── obj.target
│   │   │   │   │   │   ├── libopus
│   │   │   │   │   │   │   └── deps
│   │   │   │   │   │   │       └── opus
│   │   │   │   │   │   │           ├── celt
│   │   │   │   │   │   │           │   ├── arm
│   │   │   │   │   │   │           │   │   ├── arm_celt_map.o
│   │   │   │   │   │   │           │   │   ├── armcpu.o
│   │   │   │   │   │   │           │   │   ├── celt_neon_intr.o
│   │   │   │   │   │   │           │   │   └── pitch_neon_intr.o
│   │   │   │   │   │   │           │   ├── bands.o
│   │   │   │   │   │   │           │   ├── celt.o
│   │   │   │   │   │   │           │   ├── celt_decoder.o
│   │   │   │   │   │   │           │   ├── celt_encoder.o
│   │   │   │   │   │   │           │   ├── celt_lpc.o
│   │   │   │   │   │   │           │   ├── cwrs.o
│   │   │   │   │   │   │           │   ├── entcode.o
│   │   │   │   │   │   │           │   ├── entdec.o
│   │   │   │   │   │   │           │   ├── entenc.o
│   │   │   │   │   │   │           │   ├── kiss_fft.o
│   │   │   │   │   │   │           │   ├── laplace.o
│   │   │   │   │   │   │           │   ├── mathops.o
│   │   │   │   │   │   │           │   ├── mdct.o
│   │   │   │   │   │   │           │   ├── modes.o
│   │   │   │   │   │   │           │   ├── pitch.o
│   │   │   │   │   │   │           │   ├── quant_bands.o
│   │   │   │   │   │   │           │   ├── rate.o
│   │   │   │   │   │   │           │   └── vq.o
│   │   │   │   │   │   │           ├── silk
│   │   │   │   │   │   │           │   ├── A2NLSF.o
│   │   │   │   │   │   │           │   ├── CNG.o
│   │   │   │   │   │   │           │   ├── HP_variable_cutoff.o
│   │   │   │   │   │   │           │   ├── LPC_analysis_filter.o
│   │   │   │   │   │   │           │   ├── LPC_fit.o
│   │   │   │   │   │   │           │   ├── LPC_inv_pred_gain.o
│   │   │   │   │   │   │           │   ├── LP_variable_cutoff.o
│   │   │   │   │   │   │           │   ├── NLSF2A.o
│   │   │   │   │   │   │           │   ├── NLSF_VQ.o
│   │   │   │   │   │   │           │   ├── NLSF_VQ_weights_laroia.o
│   │   │   │   │   │   │           │   ├── NLSF_decode.o
│   │   │   │   │   │   │           │   ├── NLSF_del_dec_quant.o
│   │   │   │   │   │   │           │   ├── NLSF_encode.o
│   │   │   │   │   │   │           │   ├── NLSF_stabilize.o
│   │   │   │   │   │   │           │   ├── NLSF_unpack.o
│   │   │   │   │   │   │           │   ├── NSQ.o
│   │   │   │   │   │   │           │   ├── NSQ_del_dec.o
│   │   │   │   │   │   │           │   ├── PLC.o
│   │   │   │   │   │   │           │   ├── VAD.o
│   │   │   │   │   │   │           │   ├── VQ_WMat_EC.o
│   │   │   │   │   │   │           │   ├── ana_filt_bank_1.o
│   │   │   │   │   │   │           │   ├── arm
│   │   │   │   │   │   │           │   │   └── LPC_inv_pred_gain_neon_intr.o
│   │   │   │   │   │   │           │   ├── biquad_alt.o
│   │   │   │   │   │   │           │   ├── bwexpander.o
│   │   │   │   │   │   │           │   ├── bwexpander_32.o
│   │   │   │   │   │   │           │   ├── check_control_input.o
│   │   │   │   │   │   │           │   ├── code_signs.o
│   │   │   │   │   │   │           │   ├── control_SNR.o
│   │   │   │   │   │   │           │   ├── control_audio_bandwidth.o
│   │   │   │   │   │   │           │   ├── control_codec.o
│   │   │   │   │   │   │           │   ├── debug.o
│   │   │   │   │   │   │           │   ├── dec_API.o
│   │   │   │   │   │   │           │   ├── decode_core.o
│   │   │   │   │   │   │           │   ├── decode_frame.o
│   │   │   │   │   │   │           │   ├── decode_indices.o
│   │   │   │   │   │   │           │   ├── decode_parameters.o
│   │   │   │   │   │   │           │   ├── decode_pitch.o
│   │   │   │   │   │   │           │   ├── decode_pulses.o
│   │   │   │   │   │   │           │   ├── decoder_set_fs.o
│   │   │   │   │   │   │           │   ├── enc_API.o
│   │   │   │   │   │   │           │   ├── encode_indices.o
│   │   │   │   │   │   │           │   ├── encode_pulses.o
│   │   │   │   │   │   │           │   ├── fixed
│   │   │   │   │   │   │           │   │   ├── LTP_analysis_filter_FIX.o
│   │   │   │   │   │   │           │   │   ├── LTP_scale_ctrl_FIX.o
│   │   │   │   │   │   │           │   │   ├── apply_sine_window_FIX.o
│   │   │   │   │   │   │           │   │   ├── autocorr_FIX.o
│   │   │   │   │   │   │           │   │   ├── burg_modified_FIX.o
│   │   │   │   │   │   │           │   │   ├── corrMatrix_FIX.o
│   │   │   │   │   │   │           │   │   ├── encode_frame_FIX.o
│   │   │   │   │   │   │           │   │   ├── find_LPC_FIX.o
│   │   │   │   │   │   │           │   │   ├── find_LTP_FIX.o
│   │   │   │   │   │   │           │   │   ├── find_pitch_lags_FIX.o
│   │   │   │   │   │   │           │   │   ├── find_pred_coefs_FIX.o
│   │   │   │   │   │   │           │   │   ├── k2a_FIX.o
│   │   │   │   │   │   │           │   │   ├── k2a_Q16_FIX.o
│   │   │   │   │   │   │           │   │   ├── noise_shape_analysis_FIX.o
│   │   │   │   │   │   │           │   │   ├── pitch_analysis_core_FIX.o
│   │   │   │   │   │   │           │   │   ├── process_gains_FIX.o
│   │   │   │   │   │   │           │   │   ├── regularize_correlations_FIX.o
│   │   │   │   │   │   │           │   │   ├── residual_energy16_FIX.o
│   │   │   │   │   │   │           │   │   ├── residual_energy_FIX.o
│   │   │   │   │   │   │           │   │   ├── schur64_FIX.o
│   │   │   │   │   │   │           │   │   ├── schur_FIX.o
│   │   │   │   │   │   │           │   │   ├── vector_ops_FIX.o
│   │   │   │   │   │   │           │   │   └── warped_autocorrelation_FIX.o
│   │   │   │   │   │   │           │   ├── float
│   │   │   │   │   │   │           │   │   ├── LPC_analysis_filter_FLP.o
│   │   │   │   │   │   │           │   │   ├── LPC_inv_pred_gain_FLP.o
│   │   │   │   │   │   │           │   │   ├── LTP_analysis_filter_FLP.o
│   │   │   │   │   │   │           │   │   ├── LTP_scale_ctrl_FLP.o
│   │   │   │   │   │   │           │   │   ├── apply_sine_window_FLP.o
│   │   │   │   │   │   │           │   │   ├── autocorrelation_FLP.o
│   │   │   │   │   │   │           │   │   ├── burg_modified_FLP.o
│   │   │   │   │   │   │           │   │   ├── bwexpander_FLP.o
│   │   │   │   │   │   │           │   │   ├── corrMatrix_FLP.o
│   │   │   │   │   │   │           │   │   ├── encode_frame_FLP.o
│   │   │   │   │   │   │           │   │   ├── energy_FLP.o
│   │   │   │   │   │   │           │   │   ├── find_LPC_FLP.o
│   │   │   │   │   │   │           │   │   ├── find_LTP_FLP.o
│   │   │   │   │   │   │           │   │   ├── find_pitch_lags_FLP.o
│   │   │   │   │   │   │           │   │   ├── find_pred_coefs_FLP.o
│   │   │   │   │   │   │           │   │   ├── inner_product_FLP.o
│   │   │   │   │   │   │           │   │   ├── k2a_FLP.o
│   │   │   │   │   │   │           │   │   ├── noise_shape_analysis_FLP.o
│   │   │   │   │   │   │           │   │   ├── pitch_analysis_core_FLP.o
│   │   │   │   │   │   │           │   │   ├── process_gains_FLP.o
│   │   │   │   │   │   │           │   │   ├── regularize_correlations_FLP.o
│   │   │   │   │   │   │           │   │   ├── residual_energy_FLP.o
│   │   │   │   │   │   │           │   │   ├── scale_copy_vector_FLP.o
│   │   │   │   │   │   │           │   │   ├── scale_vector_FLP.o
│   │   │   │   │   │   │           │   │   ├── schur_FLP.o
│   │   │   │   │   │   │           │   │   ├── sort_FLP.o
│   │   │   │   │   │   │           │   │   ├── warped_autocorrelation_FLP.o
│   │   │   │   │   │   │           │   │   └── wrappers_FLP.o
│   │   │   │   │   │   │           │   ├── gain_quant.o
│   │   │   │   │   │   │           │   ├── init_decoder.o
│   │   │   │   │   │   │           │   ├── init_encoder.o
│   │   │   │   │   │   │           │   ├── inner_prod_aligned.o
│   │   │   │   │   │   │           │   ├── interpolate.o
│   │   │   │   │   │   │           │   ├── lin2log.o
│   │   │   │   │   │   │           │   ├── log2lin.o
│   │   │   │   │   │   │           │   ├── pitch_est_tables.o
│   │   │   │   │   │   │           │   ├── process_NLSFs.o
│   │   │   │   │   │   │           │   ├── quant_LTP_gains.o
│   │   │   │   │   │   │           │   ├── resampler.o
│   │   │   │   │   │   │           │   ├── resampler_down2.o
│   │   │   │   │   │   │           │   ├── resampler_down2_3.o
│   │   │   │   │   │   │           │   ├── resampler_private_AR2.o
│   │   │   │   │   │   │           │   ├── resampler_private_IIR_FIR.o
│   │   │   │   │   │   │           │   ├── resampler_private_down_FIR.o
│   │   │   │   │   │   │           │   ├── resampler_private_up2_HQ.o
│   │   │   │   │   │   │           │   ├── resampler_rom.o
│   │   │   │   │   │   │           │   ├── shell_coder.o
│   │   │   │   │   │   │           │   ├── sigm_Q15.o
│   │   │   │   │   │   │           │   ├── sort.o
│   │   │   │   │   │   │           │   ├── stereo_LR_to_MS.o
│   │   │   │   │   │   │           │   ├── stereo_MS_to_LR.o
│   │   │   │   │   │   │           │   ├── stereo_decode_pred.o
│   │   │   │   │   │   │           │   ├── stereo_encode_pred.o
│   │   │   │   │   │   │           │   ├── stereo_find_predictor.o
│   │   │   │   │   │   │           │   ├── stereo_quant_pred.o
│   │   │   │   │   │   │           │   ├── sum_sqr_shift.o
│   │   │   │   │   │   │           │   ├── table_LSF_cos.o
│   │   │   │   │   │   │           │   ├── tables_LTP.o
│   │   │   │   │   │   │           │   ├── tables_NLSF_CB_NB_MB.o
│   │   │   │   │   │   │           │   ├── tables_NLSF_CB_WB.o
│   │   │   │   │   │   │           │   ├── tables_gain.o
│   │   │   │   │   │   │           │   ├── tables_other.o
│   │   │   │   │   │   │           │   ├── tables_pitch_lag.o
│   │   │   │   │   │   │           │   └── tables_pulses_per_block.o
│   │   │   │   │   │   │           └── src
│   │   │   │   │   │   │               ├── analysis.o
│   │   │   │   │   │   │               ├── mapping_matrix.o
│   │   │   │   │   │   │               ├── mlp.o
│   │   │   │   │   │   │               ├── mlp_data.o
│   │   │   │   │   │   │               ├── opus.o
│   │   │   │   │   │   │               ├── opus_compare.o
│   │   │   │   │   │   │               ├── opus_decoder.o
│   │   │   │   │   │   │               ├── opus_encoder.o
│   │   │   │   │   │   │               ├── opus_multistream.o
│   │   │   │   │   │   │               ├── opus_multistream_decoder.o
│   │   │   │   │   │   │               ├── opus_multistream_encoder.o
│   │   │   │   │   │   │               ├── opus_projection_decoder.o
│   │   │   │   │   │   │               ├── opus_projection_encoder.o
│   │   │   │   │   │   │               └── repacketizer.o
│   │   │   │   │   │   └── opus
│   │   │   │   │   │       └── src
│   │   │   │   │   │           └── node-opus.o
│   │   │   │   │   ├── opus.a
│   │   │   │   │   └── opus.node
│   │   │   │   ├── binding.Makefile
│   │   │   │   ├── config.gypi
│   │   │   │   ├── deps
│   │   │   │   │   ├── binding.Makefile
│   │   │   │   │   └── libopus.target.mk
│   │   │   │   ├── gyp-mac-tool
│   │   │   │   └── opus.target.mk
│   │   │   ├── deps
│   │   │   │   ├── binding.gyp
│   │   │   │   ├── config
│   │   │   │   │   └── opus
│   │   │   │   │       ├── android
│   │   │   │   │       │   ├── arm
│   │   │   │   │       │   │   └── config.h
│   │   │   │   │       │   └── arm64
│   │   │   │   │       │       └── config.h
│   │   │   │   │       ├── freebsd
│   │   │   │   │       │   └── x64
│   │   │   │   │       │       └── config.h
│   │   │   │   │       ├── linux
│   │   │   │   │       │   ├── arm
│   │   │   │   │       │   │   └── config.h
│   │   │   │   │       │   ├── arm64
│   │   │   │   │       │   │   └── config.h
│   │   │   │   │       │   ├── ia32
│   │   │   │   │       │   │   └── config.h
│   │   │   │   │       │   └── x64
│   │   │   │   │       │       └── config.h
│   │   │   │   │       ├── mac
│   │   │   │   │       │   ├── arm64
│   │   │   │   │       │   │   └── config.h
│   │   │   │   │       │   └── x64
│   │   │   │   │       │       └── config.h
│   │   │   │   │       └── win
│   │   │   │   │           └── x64
│   │   │   │   │               └── config.h
│   │   │   │   └── opus
│   │   │   │       ├── AUTHORS
│   │   │   │       ├── CMakeLists.txt
│   │   │   │       ├── COPYING
│   │   │   │       ├── ChangeLog
│   │   │   │       ├── INSTALL
│   │   │   │       ├── Makefile.am
│   │   │   │       ├── Makefile.in
│   │   │   │       ├── Makefile.mips
│   │   │   │       ├── Makefile.unix
│   │   │   │       ├── NEWS
│   │   │   │       ├── OpusConfig.cmake.in
│   │   │   │       ├── README
│   │   │   │       ├── aclocal.m4
│   │   │   │       ├── celt
│   │   │   │       │   ├── _kiss_fft_guts.h
│   │   │   │       │   ├── arch.h
│   │   │   │       │   ├── arm
│   │   │   │       │   │   ├── arm2gnu.pl
│   │   │   │       │   │   ├── arm_celt_map.c
│   │   │   │       │   │   ├── armcpu.c
│   │   │   │       │   │   ├── armcpu.h
│   │   │   │       │   │   ├── armopts.s.in
│   │   │   │       │   │   ├── celt_fft_ne10.c
│   │   │   │       │   │   ├── celt_mdct_ne10.c
│   │   │   │       │   │   ├── celt_neon_intr.c
│   │   │   │       │   │   ├── celt_pitch_xcorr_arm-gnu.S
│   │   │   │       │   │   ├── celt_pitch_xcorr_arm.s
│   │   │   │       │   │   ├── fft_arm.h
│   │   │   │       │   │   ├── fixed_arm64.h
│   │   │   │       │   │   ├── fixed_armv4.h
│   │   │   │       │   │   ├── fixed_armv5e.h
│   │   │   │       │   │   ├── kiss_fft_armv4.h
│   │   │   │       │   │   ├── kiss_fft_armv5e.h
│   │   │   │       │   │   ├── mdct_arm.h
│   │   │   │       │   │   ├── pitch_arm.h
│   │   │   │       │   │   └── pitch_neon_intr.c
│   │   │   │       │   ├── bands.c
│   │   │   │       │   ├── bands.h
│   │   │   │       │   ├── celt.c
│   │   │   │       │   ├── celt.h
│   │   │   │       │   ├── celt_decoder.c
│   │   │   │       │   ├── celt_encoder.c
│   │   │   │       │   ├── celt_lpc.c
│   │   │   │       │   ├── celt_lpc.h
│   │   │   │       │   ├── cpu_support.h
│   │   │   │       │   ├── cwrs.c
│   │   │   │       │   ├── cwrs.h
│   │   │   │       │   ├── ecintrin.h
│   │   │   │       │   ├── entcode.c
│   │   │   │       │   ├── entcode.h
│   │   │   │       │   ├── entdec.c
│   │   │   │       │   ├── entdec.h
│   │   │   │       │   ├── entenc.c
│   │   │   │       │   ├── entenc.h
│   │   │   │       │   ├── fixed_debug.h
│   │   │   │       │   ├── fixed_generic.h
│   │   │   │       │   ├── float_cast.h
│   │   │   │       │   ├── kiss_fft.c
│   │   │   │       │   ├── kiss_fft.h
│   │   │   │       │   ├── laplace.c
│   │   │   │       │   ├── laplace.h
│   │   │   │       │   ├── mathops.c
│   │   │   │       │   ├── mathops.h
│   │   │   │       │   ├── mdct.c
│   │   │   │       │   ├── mdct.h
│   │   │   │       │   ├── mfrngcod.h
│   │   │   │       │   ├── mips
│   │   │   │       │   │   ├── celt_mipsr1.h
│   │   │   │       │   │   ├── fixed_generic_mipsr1.h
│   │   │   │       │   │   ├── kiss_fft_mipsr1.h
│   │   │   │       │   │   ├── mdct_mipsr1.h
│   │   │   │       │   │   ├── pitch_mipsr1.h
│   │   │   │       │   │   └── vq_mipsr1.h
│   │   │   │       │   ├── modes.c
│   │   │   │       │   ├── modes.h
│   │   │   │       │   ├── opus_custom_demo.c
│   │   │   │       │   ├── os_support.h
│   │   │   │       │   ├── pitch.c
│   │   │   │       │   ├── pitch.h
│   │   │   │       │   ├── quant_bands.c
│   │   │   │       │   ├── quant_bands.h
│   │   │   │       │   ├── rate.c
│   │   │   │       │   ├── rate.h
│   │   │   │       │   ├── stack_alloc.h
│   │   │   │       │   ├── static_modes_fixed.h
│   │   │   │       │   ├── static_modes_fixed_arm_ne10.h
│   │   │   │       │   ├── static_modes_float.h
│   │   │   │       │   ├── static_modes_float_arm_ne10.h
│   │   │   │       │   ├── tests
│   │   │   │       │   │   ├── test_unit_cwrs32.c
│   │   │   │       │   │   ├── test_unit_dft.c
│   │   │   │       │   │   ├── test_unit_entropy.c
│   │   │   │       │   │   ├── test_unit_laplace.c
│   │   │   │       │   │   ├── test_unit_mathops.c
│   │   │   │       │   │   ├── test_unit_mdct.c
│   │   │   │       │   │   ├── test_unit_rotation.c
│   │   │   │       │   │   └── test_unit_types.c
│   │   │   │       │   ├── vq.c
│   │   │   │       │   ├── vq.h
│   │   │   │       │   └── x86
│   │   │   │       │       ├── celt_lpc_sse.h
│   │   │   │       │       ├── celt_lpc_sse4_1.c
│   │   │   │       │       ├── pitch_sse.c
│   │   │   │       │       ├── pitch_sse.h
│   │   │   │       │       ├── pitch_sse2.c
│   │   │   │       │       ├── pitch_sse4_1.c
│   │   │   │       │       ├── vq_sse.h
│   │   │   │       │       ├── vq_sse2.c
│   │   │   │       │       ├── x86_celt_map.c
│   │   │   │       │       ├── x86cpu.c
│   │   │   │       │       └── x86cpu.h
│   │   │   │       ├── celt_headers.mk
│   │   │   │       ├── celt_sources.mk
│   │   │   │       ├── compile
│   │   │   │       ├── config.guess
│   │   │   │       ├── config.h.cmake.in
│   │   │   │       ├── config.h.in
│   │   │   │       ├── config.sub
│   │   │   │       ├── configure
│   │   │   │       ├── configure.ac
│   │   │   │       ├── depcomp
│   │   │   │       ├── doc
│   │   │   │       │   ├── Doxyfile.in
│   │   │   │       │   ├── Makefile.am
│   │   │   │       │   ├── Makefile.in
│   │   │   │       │   ├── TODO
│   │   │   │       │   ├── customdoxygen.css
│   │   │   │       │   ├── footer.html
│   │   │   │       │   ├── header.html
│   │   │   │       │   ├── opus_logo.svg
│   │   │   │       │   └── trivial_example.c
│   │   │   │       ├── include
│   │   │   │       │   ├── opus.h
│   │   │   │       │   ├── opus_custom.h
│   │   │   │       │   ├── opus_defines.h
│   │   │   │       │   ├── opus_multistream.h
│   │   │   │       │   ├── opus_projection.h
│   │   │   │       │   └── opus_types.h
│   │   │   │       ├── install-sh
│   │   │   │       ├── ltmain.sh
│   │   │   │       ├── m4
│   │   │   │       │   ├── as-gcc-inline-assembly.m4
│   │   │   │       │   ├── ax_add_fortify_source.m4
│   │   │   │       │   ├── libtool.m4
│   │   │   │       │   ├── ltoptions.m4
│   │   │   │       │   ├── ltsugar.m4
│   │   │   │       │   ├── ltversion.m4
│   │   │   │       │   ├── lt~obsolete.m4
│   │   │   │       │   └── opus-intrinsics.m4
│   │   │   │       ├── missing
│   │   │   │       ├── opus-uninstalled.pc.in
│   │   │   │       ├── opus.m4
│   │   │   │       ├── opus.pc.in
│   │   │   │       ├── opus_config.cmake
│   │   │   │       ├── opus_functions.cmake
│   │   │   │       ├── opus_headers.mk
│   │   │   │       ├── opus_sources.cmake
│   │   │   │       ├── opus_sources.mk
│   │   │   │       ├── package_version
│   │   │   │       ├── silk
│   │   │   │       │   ├── A2NLSF.c
│   │   │   │       │   ├── API.h
│   │   │   │       │   ├── CNG.c
│   │   │   │       │   ├── HP_variable_cutoff.c
│   │   │   │       │   ├── Inlines.h
│   │   │   │       │   ├── LPC_analysis_filter.c
│   │   │   │       │   ├── LPC_fit.c
│   │   │   │       │   ├── LPC_inv_pred_gain.c
│   │   │   │       │   ├── LP_variable_cutoff.c
│   │   │   │       │   ├── MacroCount.h
│   │   │   │       │   ├── MacroDebug.h
│   │   │   │       │   ├── NLSF2A.c
│   │   │   │       │   ├── NLSF_VQ.c
│   │   │   │       │   ├── NLSF_VQ_weights_laroia.c
│   │   │   │       │   ├── NLSF_decode.c
│   │   │   │       │   ├── NLSF_del_dec_quant.c
│   │   │   │       │   ├── NLSF_encode.c
│   │   │   │       │   ├── NLSF_stabilize.c
│   │   │   │       │   ├── NLSF_unpack.c
│   │   │   │       │   ├── NSQ.c
│   │   │   │       │   ├── NSQ.h
│   │   │   │       │   ├── NSQ_del_dec.c
│   │   │   │       │   ├── PLC.c
│   │   │   │       │   ├── PLC.h
│   │   │   │       │   ├── SigProc_FIX.h
│   │   │   │       │   ├── VAD.c
│   │   │   │       │   ├── VQ_WMat_EC.c
│   │   │   │       │   ├── ana_filt_bank_1.c
│   │   │   │       │   ├── arm
│   │   │   │       │   │   ├── LPC_inv_pred_gain_arm.h
│   │   │   │       │   │   ├── LPC_inv_pred_gain_neon_intr.c
│   │   │   │       │   │   ├── NSQ_del_dec_arm.h
│   │   │   │       │   │   ├── NSQ_del_dec_neon_intr.c
│   │   │   │       │   │   ├── NSQ_neon.c
│   │   │   │       │   │   ├── NSQ_neon.h
│   │   │   │       │   │   ├── SigProc_FIX_armv4.h
│   │   │   │       │   │   ├── SigProc_FIX_armv5e.h
│   │   │   │       │   │   ├── arm_silk_map.c
│   │   │   │       │   │   ├── biquad_alt_arm.h
│   │   │   │       │   │   ├── biquad_alt_neon_intr.c
│   │   │   │       │   │   ├── macros_arm64.h
│   │   │   │       │   │   ├── macros_armv4.h
│   │   │   │       │   │   └── macros_armv5e.h
│   │   │   │       │   ├── biquad_alt.c
│   │   │   │       │   ├── bwexpander.c
│   │   │   │       │   ├── bwexpander_32.c
│   │   │   │       │   ├── check_control_input.c
│   │   │   │       │   ├── code_signs.c
│   │   │   │       │   ├── control.h
│   │   │   │       │   ├── control_SNR.c
│   │   │   │       │   ├── control_audio_bandwidth.c
│   │   │   │       │   ├── control_codec.c
│   │   │   │       │   ├── debug.c
│   │   │   │       │   ├── debug.h
│   │   │   │       │   ├── dec_API.c
│   │   │   │       │   ├── decode_core.c
│   │   │   │       │   ├── decode_frame.c
│   │   │   │       │   ├── decode_indices.c
│   │   │   │       │   ├── decode_parameters.c
│   │   │   │       │   ├── decode_pitch.c
│   │   │   │       │   ├── decode_pulses.c
│   │   │   │       │   ├── decoder_set_fs.c
│   │   │   │       │   ├── define.h
│   │   │   │       │   ├── enc_API.c
│   │   │   │       │   ├── encode_indices.c
│   │   │   │       │   ├── encode_pulses.c
│   │   │   │       │   ├── errors.h
│   │   │   │       │   ├── fixed
│   │   │   │       │   │   ├── LTP_analysis_filter_FIX.c
│   │   │   │       │   │   ├── LTP_scale_ctrl_FIX.c
│   │   │   │       │   │   ├── apply_sine_window_FIX.c
│   │   │   │       │   │   ├── arm
│   │   │   │       │   │   │   ├── warped_autocorrelation_FIX_arm.h
│   │   │   │       │   │   │   └── warped_autocorrelation_FIX_neon_intr.c
│   │   │   │       │   │   ├── autocorr_FIX.c
│   │   │   │       │   │   ├── burg_modified_FIX.c
│   │   │   │       │   │   ├── corrMatrix_FIX.c
│   │   │   │       │   │   ├── encode_frame_FIX.c
│   │   │   │       │   │   ├── find_LPC_FIX.c
│   │   │   │       │   │   ├── find_LTP_FIX.c
│   │   │   │       │   │   ├── find_pitch_lags_FIX.c
│   │   │   │       │   │   ├── find_pred_coefs_FIX.c
│   │   │   │       │   │   ├── k2a_FIX.c
│   │   │   │       │   │   ├── k2a_Q16_FIX.c
│   │   │   │       │   │   ├── main_FIX.h
│   │   │   │       │   │   ├── mips
│   │   │   │       │   │   │   ├── noise_shape_analysis_FIX_mipsr1.h
│   │   │   │       │   │   │   └── warped_autocorrelation_FIX_mipsr1.h
│   │   │   │       │   │   ├── noise_shape_analysis_FIX.c
│   │   │   │       │   │   ├── pitch_analysis_core_FIX.c
│   │   │   │       │   │   ├── process_gains_FIX.c
│   │   │   │       │   │   ├── regularize_correlations_FIX.c
│   │   │   │       │   │   ├── residual_energy16_FIX.c
│   │   │   │       │   │   ├── residual_energy_FIX.c
│   │   │   │       │   │   ├── schur64_FIX.c
│   │   │   │       │   │   ├── schur_FIX.c
│   │   │   │       │   │   ├── structs_FIX.h
│   │   │   │       │   │   ├── vector_ops_FIX.c
│   │   │   │       │   │   ├── warped_autocorrelation_FIX.c
│   │   │   │       │   │   └── x86
│   │   │   │       │   │       ├── burg_modified_FIX_sse4_1.c
│   │   │   │       │   │       └── vector_ops_FIX_sse4_1.c
│   │   │   │       │   ├── float
│   │   │   │       │   │   ├── LPC_analysis_filter_FLP.c
│   │   │   │       │   │   ├── LPC_inv_pred_gain_FLP.c
│   │   │   │       │   │   ├── LTP_analysis_filter_FLP.c
│   │   │   │       │   │   ├── LTP_scale_ctrl_FLP.c
│   │   │   │       │   │   ├── SigProc_FLP.h
│   │   │   │       │   │   ├── apply_sine_window_FLP.c
│   │   │   │       │   │   ├── autocorrelation_FLP.c
│   │   │   │       │   │   ├── burg_modified_FLP.c
│   │   │   │       │   │   ├── bwexpander_FLP.c
│   │   │   │       │   │   ├── corrMatrix_FLP.c
│   │   │   │       │   │   ├── encode_frame_FLP.c
│   │   │   │       │   │   ├── energy_FLP.c
│   │   │   │       │   │   ├── find_LPC_FLP.c
│   │   │   │       │   │   ├── find_LTP_FLP.c
│   │   │   │       │   │   ├── find_pitch_lags_FLP.c
│   │   │   │       │   │   ├── find_pred_coefs_FLP.c
│   │   │   │       │   │   ├── inner_product_FLP.c
│   │   │   │       │   │   ├── k2a_FLP.c
│   │   │   │       │   │   ├── main_FLP.h
│   │   │   │       │   │   ├── noise_shape_analysis_FLP.c
│   │   │   │       │   │   ├── pitch_analysis_core_FLP.c
│   │   │   │       │   │   ├── process_gains_FLP.c
│   │   │   │       │   │   ├── regularize_correlations_FLP.c
│   │   │   │       │   │   ├── residual_energy_FLP.c
│   │   │   │       │   │   ├── scale_copy_vector_FLP.c
│   │   │   │       │   │   ├── scale_vector_FLP.c
│   │   │   │       │   │   ├── schur_FLP.c
│   │   │   │       │   │   ├── sort_FLP.c
│   │   │   │       │   │   ├── structs_FLP.h
│   │   │   │       │   │   ├── warped_autocorrelation_FLP.c
│   │   │   │       │   │   └── wrappers_FLP.c
│   │   │   │       │   ├── gain_quant.c
│   │   │   │       │   ├── init_decoder.c
│   │   │   │       │   ├── init_encoder.c
│   │   │   │       │   ├── inner_prod_aligned.c
│   │   │   │       │   ├── interpolate.c
│   │   │   │       │   ├── lin2log.c
│   │   │   │       │   ├── log2lin.c
│   │   │   │       │   ├── macros.h
│   │   │   │       │   ├── main.h
│   │   │   │       │   ├── mips
│   │   │   │       │   │   ├── NSQ_del_dec_mipsr1.h
│   │   │   │       │   │   ├── macros_mipsr1.h
│   │   │   │       │   │   └── sigproc_fix_mipsr1.h
│   │   │   │       │   ├── pitch_est_defines.h
│   │   │   │       │   ├── pitch_est_tables.c
│   │   │   │       │   ├── process_NLSFs.c
│   │   │   │       │   ├── quant_LTP_gains.c
│   │   │   │       │   ├── resampler.c
│   │   │   │       │   ├── resampler_down2.c
│   │   │   │       │   ├── resampler_down2_3.c
│   │   │   │       │   ├── resampler_private.h
│   │   │   │       │   ├── resampler_private_AR2.c
│   │   │   │       │   ├── resampler_private_IIR_FIR.c
│   │   │   │       │   ├── resampler_private_down_FIR.c
│   │   │   │       │   ├── resampler_private_up2_HQ.c
│   │   │   │       │   ├── resampler_rom.c
│   │   │   │       │   ├── resampler_rom.h
│   │   │   │       │   ├── resampler_structs.h
│   │   │   │       │   ├── shell_coder.c
│   │   │   │       │   ├── sigm_Q15.c
│   │   │   │       │   ├── sort.c
│   │   │   │       │   ├── stereo_LR_to_MS.c
│   │   │   │       │   ├── stereo_MS_to_LR.c
│   │   │   │       │   ├── stereo_decode_pred.c
│   │   │   │       │   ├── stereo_encode_pred.c
│   │   │   │       │   ├── stereo_find_predictor.c
│   │   │   │       │   ├── stereo_quant_pred.c
│   │   │   │       │   ├── structs.h
│   │   │   │       │   ├── sum_sqr_shift.c
│   │   │   │       │   ├── table_LSF_cos.c
│   │   │   │       │   ├── tables.h
│   │   │   │       │   ├── tables_LTP.c
│   │   │   │       │   ├── tables_NLSF_CB_NB_MB.c
│   │   │   │       │   ├── tables_NLSF_CB_WB.c
│   │   │   │       │   ├── tables_gain.c
│   │   │   │       │   ├── tables_other.c
│   │   │   │       │   ├── tables_pitch_lag.c
│   │   │   │       │   ├── tables_pulses_per_block.c
│   │   │   │       │   ├── tests
│   │   │   │       │   │   └── test_unit_LPC_inv_pred_gain.c
│   │   │   │       │   ├── tuning_parameters.h
│   │   │   │       │   ├── typedef.h
│   │   │   │       │   └── x86
│   │   │   │       │       ├── NSQ_del_dec_sse4_1.c
│   │   │   │       │       ├── NSQ_sse4_1.c
│   │   │   │       │       ├── SigProc_FIX_sse.h
│   │   │   │       │       ├── VAD_sse4_1.c
│   │   │   │       │       ├── VQ_WMat_EC_sse4_1.c
│   │   │   │       │       ├── main_sse.h
│   │   │   │       │       └── x86_silk_map.c
│   │   │   │       ├── silk_headers.mk
│   │   │   │       ├── silk_sources.mk
│   │   │   │       ├── src
│   │   │   │       │   ├── analysis.c
│   │   │   │       │   ├── analysis.h
│   │   │   │       │   ├── mapping_matrix.c
│   │   │   │       │   ├── mapping_matrix.h
│   │   │   │       │   ├── mlp.c
│   │   │   │       │   ├── mlp.h
│   │   │   │       │   ├── mlp_data.c
│   │   │   │       │   ├── opus.c
│   │   │   │       │   ├── opus_compare.c
│   │   │   │       │   ├── opus_decoder.c
│   │   │   │       │   ├── opus_demo.c
│   │   │   │       │   ├── opus_encoder.c
│   │   │   │       │   ├── opus_multistream.c
│   │   │   │       │   ├── opus_multistream_decoder.c
│   │   │   │       │   ├── opus_multistream_encoder.c
│   │   │   │       │   ├── opus_private.h
│   │   │   │       │   ├── opus_projection_decoder.c
│   │   │   │       │   ├── opus_projection_encoder.c
│   │   │   │       │   ├── repacketizer.c
│   │   │   │       │   ├── repacketizer_demo.c
│   │   │   │       │   └── tansig_table.h
│   │   │   │       ├── test-driver
│   │   │   │       ├── tests
│   │   │   │       │   ├── opus_encode_regressions.c
│   │   │   │       │   ├── run_vectors.sh
│   │   │   │       │   ├── test_opus_api.c
│   │   │   │       │   ├── test_opus_common.h
│   │   │   │       │   ├── test_opus_decode.c
│   │   │   │       │   ├── test_opus_encode.c
│   │   │   │       │   ├── test_opus_padding.c
│   │   │   │       │   └── test_opus_projection.c
│   │   │   │       └── win32
│   │   │   │           ├── VS2015
│   │   │   │           │   ├── common.props
│   │   │   │           │   ├── opus.sln
│   │   │   │           │   ├── opus.vcxproj
│   │   │   │           │   ├── opus.vcxproj.filters
│   │   │   │           │   ├── opus_demo.vcxproj
│   │   │   │           │   ├── opus_demo.vcxproj.filters
│   │   │   │           │   ├── test_opus_api.vcxproj
│   │   │   │           │   ├── test_opus_api.vcxproj.filters
│   │   │   │           │   ├── test_opus_decode.vcxproj
│   │   │   │           │   ├── test_opus_decode.vcxproj.filters
│   │   │   │           │   ├── test_opus_encode.vcxproj
│   │   │   │           │   └── test_opus_encode.vcxproj.filters
│   │   │   │           ├── config.h
│   │   │   │           └── genversion.bat
│   │   │   ├── lib
│   │   │   │   └── index.js
│   │   │   ├── package.json
│   │   │   ├── prebuild
│   │   │   │   └── node-v131-napi-v3-darwin-arm64-unknown-unknown
│   │   │   │       └── opus.node
│   │   │   ├── src
│   │   │   │   ├── node-opus.cc
│   │   │   │   └── node-opus.h
│   │   │   ├── tests
│   │   │   │   ├── frame.opus
│   │   │   │   └── test.js
│   │   │   └── typings
│   │   │       └── index.d.ts
│   │   ├── rest
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist
│   │   │   │   ├── index.d.mts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── index.mjs
│   │   │   │   ├── index.mjs.map
│   │   │   │   ├── strategies
│   │   │   │   │   ├── undiciRequest.d.mts
│   │   │   │   │   ├── undiciRequest.d.ts
│   │   │   │   │   ├── undiciRequest.js
│   │   │   │   │   ├── undiciRequest.js.map
│   │   │   │   │   ├── undiciRequest.mjs
│   │   │   │   │   └── undiciRequest.mjs.map
│   │   │   │   ├── web.d.mts
│   │   │   │   ├── web.d.ts
│   │   │   │   ├── web.js
│   │   │   │   ├── web.js.map
│   │   │   │   ├── web.mjs
│   │   │   │   └── web.mjs.map
│   │   │   ├── node_modules
│   │   │   │   └── @discordjs
│   │   │   │       └── collection
│   │   │   │           ├── LICENSE
│   │   │   │           ├── README.md
│   │   │   │           ├── dist
│   │   │   │           │   ├── index.d.mts
│   │   │   │           │   ├── index.d.ts
│   │   │   │           │   ├── index.js
│   │   │   │           │   ├── index.js.map
│   │   │   │           │   ├── index.mjs
│   │   │   │           │   └── index.mjs.map
│   │   │   │           └── package.json
│   │   │   └── package.json
│   │   ├── util
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist
│   │   │   │   ├── index.d.mts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── index.mjs
│   │   │   │   └── index.mjs.map
│   │   │   └── package.json
│   │   ├── voice
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist
│   │   │   │   ├── index.d.mts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── index.mjs
│   │   │   │   └── index.mjs.map
│   │   │   └── package.json
│   │   └── ws
│   │       ├── LICENSE
│   │       ├── README.md
│   │       ├── dist
│   │       │   ├── defaultWorker.d.mts
│   │       │   ├── defaultWorker.d.ts
│   │       │   ├── defaultWorker.js
│   │       │   ├── defaultWorker.js.map
│   │       │   ├── defaultWorker.mjs
│   │       │   ├── defaultWorker.mjs.map
│   │       │   ├── index.d.mts
│   │       │   ├── index.d.ts
│   │       │   ├── index.js
│   │       │   ├── index.js.map
│   │       │   ├── index.mjs
│   │       │   └── index.mjs.map
│   │       ├── node_modules
│   │       │   └── @discordjs
│   │       │       └── collection
│   │       │           ├── LICENSE
│   │       │           ├── README.md
│   │       │           ├── dist
│   │       │           │   ├── index.d.mts
│   │       │           │   ├── index.d.ts
│   │       │           │   ├── index.js
│   │       │           │   ├── index.js.map
│   │       │           │   ├── index.mjs
│   │       │           │   └── index.mjs.map
│   │       │           └── package.json
│   │       └── package.json
│   ├── @eslint
│   │   ├── eslintrc
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── conf
│   │   │   │   ├── config-schema.js
│   │   │   │   └── environments.js
│   │   │   ├── dist
│   │   │   │   ├── eslintrc-universal.cjs
│   │   │   │   ├── eslintrc-universal.cjs.map
│   │   │   │   ├── eslintrc.cjs
│   │   │   │   └── eslintrc.cjs.map
│   │   │   ├── lib
│   │   │   │   ├── cascading-config-array-factory.js
│   │   │   │   ├── config-array
│   │   │   │   │   ├── config-array.js
│   │   │   │   │   ├── config-dependency.js
│   │   │   │   │   ├── extracted-config.js
│   │   │   │   │   ├── ignore-pattern.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── override-tester.js
│   │   │   │   ├── config-array-factory.js
│   │   │   │   ├── flat-compat.js
│   │   │   │   ├── index-universal.js
│   │   │   │   ├── index.js
│   │   │   │   └── shared
│   │   │   │       ├── ajv.js
│   │   │   │       ├── config-ops.js
│   │   │   │       ├── config-validator.js
│   │   │   │       ├── deprecation-warnings.js
│   │   │   │       ├── naming.js
│   │   │   │       ├── relative-module-resolver.js
│   │   │   │       └── types.js
│   │   │   ├── package.json
│   │   │   └── universal.js
│   │   └── js
│   │       ├── LICENSE
│   │       ├── README.md
│   │       ├── package.json
│   │       └── src
│   │           ├── configs
│   │           │   ├── eslint-all.js
│   │           │   └── eslint-recommended.js
│   │           └── index.js
│   ├── @eslint-community
│   │   ├── eslint-utils
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── index.js
│   │   │   ├── index.js.map
│   │   │   ├── index.mjs
│   │   │   ├── index.mjs.map
│   │   │   └── package.json
│   │   └── regexpp
│   │       ├── LICENSE
│   │       ├── README.md
│   │       ├── index.d.ts
│   │       ├── index.js
│   │       ├── index.js.map
│   │       ├── index.mjs
│   │       ├── index.mjs.map
│   │       └── package.json
│   ├── @ffmpeg-installer
│   │   ├── darwin-arm64
│   │   │   ├── README.md
│   │   │   ├── ffmpeg
│   │   │   └── package.json
│   │   └── ffmpeg
│   │       ├── .env
│   │       ├── .gitignore~
│   │       ├── README.md
│   │       ├── download.js~
│   │       ├── download.sh~
│   │       ├── download.ts~
│   │       ├── index.js
│   │       ├── index.js~
│   │       ├── lib
│   │       │   ├── manifest.js~
│   │       │   ├── platforms.js~
│   │       │   ├── verify-file.js
│   │       │   └── verify-file.js~
│   │       ├── package.json
│   │       ├── package.json~
│   │       ├── tsconfig.json
│   │       ├── tsconfig.json~
│   │       └── types
│   │           ├── index.d.ts
│   │           ├── index.test-d.ts
│   │           ├── index.test-d.ts~
│   │           └── lib
│   │               ├── verify-file.d.ts
│   │               └── verify-file.test-d.ts~
│   ├── @humanwhocodes
│   │   ├── config-array
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── api.js
│   │   │   └── package.json
│   │   ├── module-importer
│   │   │   ├── CHANGELOG.md
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist
│   │   │   │   ├── module-importer.cjs
│   │   │   │   ├── module-importer.d.cts
│   │   │   │   ├── module-importer.d.ts
│   │   │   │   └── module-importer.js
│   │   │   ├── package.json
│   │   │   └── src
│   │   │       ├── module-importer.cjs
│   │   │       └── module-importer.js
│   │   └── object-schema
│   │       ├── CHANGELOG.md
│   │       ├── LICENSE
│   │       ├── README.md
│   │       ├── package.json
│   │       └── src
│   │           ├── index.js
│   │           ├── merge-strategy.js
│   │           ├── object-schema.js
│   │           └── validation-strategy.js
│   ├── @jridgewell
│   │   ├── resolve-uri
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist
│   │   │   │   ├── resolve-uri.mjs
│   │   │   │   ├── resolve-uri.mjs.map
│   │   │   │   ├── resolve-uri.umd.js
│   │   │   │   ├── resolve-uri.umd.js.map
│   │   │   │   └── types
│   │   │   │       └── resolve-uri.d.ts
│   │   │   └── package.json
│   │   ├── sourcemap-codec
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist
│   │   │   │   ├── sourcemap-codec.mjs
│   │   │   │   ├── sourcemap-codec.mjs.map
│   │   │   │   ├── sourcemap-codec.umd.js
│   │   │   │   ├── sourcemap-codec.umd.js.map
│   │   │   │   └── types
│   │   │   │       ├── scopes.d.ts
│   │   │   │       ├── sourcemap-codec.d.ts
│   │   │   │       ├── strings.d.ts
│   │   │   │       └── vlq.d.ts
│   │   │   └── package.json
│   │   └── trace-mapping
│   │       ├── LICENSE
│   │       ├── README.md
│   │       ├── dist
│   │       │   ├── trace-mapping.mjs
│   │       │   ├── trace-mapping.mjs.map
│   │       │   ├── trace-mapping.umd.js
│   │       │   ├── trace-mapping.umd.js.map
│   │       │   └── types
│   │       │       ├── any-map.d.ts
│   │       │       ├── binary-search.d.ts
│   │       │       ├── by-source.d.ts
│   │       │       ├── resolve.d.ts
│   │       │       ├── sort.d.ts
│   │       │       ├── sourcemap-segment.d.ts
│   │       │       ├── strip-filename.d.ts
│   │       │       ├── trace-mapping.d.ts
│   │       │       └── types.d.ts
│   │       └── package.json
│   ├── @nodelib
│   │   ├── fs.scandir
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── out
│   │   │   │   ├── adapters
│   │   │   │   │   ├── fs.d.ts
│   │   │   │   │   └── fs.js
│   │   │   │   ├── constants.d.ts
│   │   │   │   ├── constants.js
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.js
│   │   │   │   ├── providers
│   │   │   │   │   ├── async.d.ts
│   │   │   │   │   ├── async.js
│   │   │   │   │   ├── common.d.ts
│   │   │   │   │   ├── common.js
│   │   │   │   │   ├── sync.d.ts
│   │   │   │   │   └── sync.js
│   │   │   │   ├── settings.d.ts
│   │   │   │   ├── settings.js
│   │   │   │   ├── types
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   └── index.js
│   │   │   │   └── utils
│   │   │   │       ├── fs.d.ts
│   │   │   │       ├── fs.js
│   │   │   │       ├── index.d.ts
│   │   │   │       └── index.js
│   │   │   └── package.json
│   │   ├── fs.stat
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── out
│   │   │   │   ├── adapters
│   │   │   │   │   ├── fs.d.ts
│   │   │   │   │   └── fs.js
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.js
│   │   │   │   ├── providers
│   │   │   │   │   ├── async.d.ts
│   │   │   │   │   ├── async.js
│   │   │   │   │   ├── sync.d.ts
│   │   │   │   │   └── sync.js
│   │   │   │   ├── settings.d.ts
│   │   │   │   ├── settings.js
│   │   │   │   └── types
│   │   │   │       ├── index.d.ts
│   │   │   │       └── index.js
│   │   │   └── package.json
│   │   └── fs.walk
│   │       ├── LICENSE
│   │       ├── README.md
│   │       ├── out
│   │       │   ├── index.d.ts
│   │       │   ├── index.js
│   │       │   ├── providers
│   │       │   │   ├── async.d.ts
│   │       │   │   ├── async.js
│   │       │   │   ├── index.d.ts
│   │       │   │   ├── index.js
│   │       │   │   ├── stream.d.ts
│   │       │   │   ├── stream.js
│   │       │   │   ├── sync.d.ts
│   │       │   │   └── sync.js
│   │       │   ├── readers
│   │       │   │   ├── async.d.ts
│   │       │   │   ├── async.js
│   │       │   │   ├── common.d.ts
│   │       │   │   ├── common.js
│   │       │   │   ├── reader.d.ts
│   │       │   │   ├── reader.js
│   │       │   │   ├── sync.d.ts
│   │       │   │   └── sync.js
│   │       │   ├── settings.d.ts
│   │       │   ├── settings.js
│   │       │   └── types
│   │       │       ├── index.d.ts
│   │       │       └── index.js
│   │       └── package.json
│   ├── @sapphire
│   │   ├── async-queue
│   │   │   ├── CHANGELOG.md
│   │   │   ├── README.md
│   │   │   ├── dist
│   │   │   │   ├── cjs
│   │   │   │   │   ├── index.cjs
│   │   │   │   │   ├── index.cjs.map
│   │   │   │   │   └── index.d.cts
│   │   │   │   ├── esm
│   │   │   │   │   ├── index.d.mts
│   │   │   │   │   ├── index.mjs
│   │   │   │   │   └── index.mjs.map
│   │   │   │   └── iife
│   │   │   │       ├── index.global.js
│   │   │   │       └── index.global.js.map
│   │   │   └── package.json
│   │   ├── shapeshift
│   │   │   ├── CHANGELOG.md
│   │   │   ├── LICENSE.md
│   │   │   ├── README.md
│   │   │   ├── UPGRADING-v3-v4.md
│   │   │   ├── dist
│   │   │   │   ├── cjs
│   │   │   │   │   ├── index.cjs
│   │   │   │   │   ├── index.cjs.map
│   │   │   │   │   └── index.d.cts
│   │   │   │   ├── esm
│   │   │   │   │   ├── index.d.mts
│   │   │   │   │   ├── index.mjs
│   │   │   │   │   └── index.mjs.map
│   │   │   │   └── iife
│   │   │   │       ├── index.global.js
│   │   │   │       └── index.global.js.map
│   │   │   └── package.json
│   │   └── snowflake
│   │       ├── CHANGELOG.md
│   │       ├── README.md
│   │       ├── dist
│   │       │   ├── cjs
│   │       │   │   ├── index.cjs
│   │       │   │   ├── index.cjs.map
│   │       │   │   └── index.d.cts
│   │       │   ├── esm
│   │       │   │   ├── index.d.mts
│   │       │   │   ├── index.mjs
│   │       │   │   └── index.mjs.map
│   │       │   └── iife
│   │       │       ├── index.global.js
│   │       │       └── index.global.js.map
│   │       └── package.json
│   ├── @smithy
│   │   ├── abort-controller
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── AbortController.js
│   │   │   │   ├── AbortSignal.js
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── AbortController.js
│   │   │   │   ├── AbortSignal.js
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── AbortController.d.ts
│   │   │   │   ├── AbortSignal.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── AbortController.d.ts
│   │   │   │       ├── AbortSignal.d.ts
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── chunked-blob-reader
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── chunked-blob-reader-native
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── config-resolver
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── endpointsConfig
│   │   │   │   │   ├── NodeUseDualstackEndpointConfigOptions.js
│   │   │   │   │   ├── NodeUseFipsEndpointConfigOptions.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── resolveCustomEndpointsConfig.js
│   │   │   │   │   ├── resolveEndpointsConfig.js
│   │   │   │   │   └── utils
│   │   │   │   │       └── getEndpointFromRegion.js
│   │   │   │   ├── index.js
│   │   │   │   ├── regionConfig
│   │   │   │   │   ├── config.js
│   │   │   │   │   ├── getRealRegion.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── isFipsRegion.js
│   │   │   │   │   └── resolveRegionConfig.js
│   │   │   │   └── regionInfo
│   │   │   │       ├── EndpointVariant.js
│   │   │   │       ├── EndpointVariantTag.js
│   │   │   │       ├── PartitionHash.js
│   │   │   │       ├── RegionHash.js
│   │   │   │       ├── getHostnameFromVariants.js
│   │   │   │       ├── getRegionInfo.js
│   │   │   │       ├── getResolvedHostname.js
│   │   │   │       ├── getResolvedPartition.js
│   │   │   │       ├── getResolvedSigningRegion.js
│   │   │   │       └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── endpointsConfig
│   │   │   │   │   ├── NodeUseDualstackEndpointConfigOptions.js
│   │   │   │   │   ├── NodeUseFipsEndpointConfigOptions.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── resolveCustomEndpointsConfig.js
│   │   │   │   │   ├── resolveEndpointsConfig.js
│   │   │   │   │   └── utils
│   │   │   │   │       └── getEndpointFromRegion.js
│   │   │   │   ├── index.js
│   │   │   │   ├── regionConfig
│   │   │   │   │   ├── config.js
│   │   │   │   │   ├── getRealRegion.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── isFipsRegion.js
│   │   │   │   │   └── resolveRegionConfig.js
│   │   │   │   └── regionInfo
│   │   │   │       ├── EndpointVariant.js
│   │   │   │       ├── EndpointVariantTag.js
│   │   │   │       ├── PartitionHash.js
│   │   │   │       ├── RegionHash.js
│   │   │   │       ├── getHostnameFromVariants.js
│   │   │   │       ├── getRegionInfo.js
│   │   │   │       ├── getResolvedHostname.js
│   │   │   │       ├── getResolvedPartition.js
│   │   │   │       ├── getResolvedSigningRegion.js
│   │   │   │       └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── endpointsConfig
│   │   │   │   │   ├── NodeUseDualstackEndpointConfigOptions.d.ts
│   │   │   │   │   ├── NodeUseFipsEndpointConfigOptions.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── resolveCustomEndpointsConfig.d.ts
│   │   │   │   │   ├── resolveEndpointsConfig.d.ts
│   │   │   │   │   └── utils
│   │   │   │   │       └── getEndpointFromRegion.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── regionConfig
│   │   │   │   │   ├── config.d.ts
│   │   │   │   │   ├── getRealRegion.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── isFipsRegion.d.ts
│   │   │   │   │   └── resolveRegionConfig.d.ts
│   │   │   │   ├── regionInfo
│   │   │   │   │   ├── EndpointVariant.d.ts
│   │   │   │   │   ├── EndpointVariantTag.d.ts
│   │   │   │   │   ├── PartitionHash.d.ts
│   │   │   │   │   ├── RegionHash.d.ts
│   │   │   │   │   ├── getHostnameFromVariants.d.ts
│   │   │   │   │   ├── getRegionInfo.d.ts
│   │   │   │   │   ├── getResolvedHostname.d.ts
│   │   │   │   │   ├── getResolvedPartition.d.ts
│   │   │   │   │   ├── getResolvedSigningRegion.d.ts
│   │   │   │   │   └── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── endpointsConfig
│   │   │   │       │   ├── NodeUseDualstackEndpointConfigOptions.d.ts
│   │   │   │       │   ├── NodeUseFipsEndpointConfigOptions.d.ts
│   │   │   │       │   ├── index.d.ts
│   │   │   │       │   ├── resolveCustomEndpointsConfig.d.ts
│   │   │   │       │   ├── resolveEndpointsConfig.d.ts
│   │   │   │       │   └── utils
│   │   │   │       │       └── getEndpointFromRegion.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── regionConfig
│   │   │   │       │   ├── config.d.ts
│   │   │   │       │   ├── getRealRegion.d.ts
│   │   │   │       │   ├── index.d.ts
│   │   │   │       │   ├── isFipsRegion.d.ts
│   │   │   │       │   └── resolveRegionConfig.d.ts
│   │   │   │       └── regionInfo
│   │   │   │           ├── EndpointVariant.d.ts
│   │   │   │           ├── EndpointVariantTag.d.ts
│   │   │   │           ├── PartitionHash.d.ts
│   │   │   │           ├── RegionHash.d.ts
│   │   │   │           ├── getHostnameFromVariants.d.ts
│   │   │   │           ├── getRegionInfo.d.ts
│   │   │   │           ├── getResolvedHostname.d.ts
│   │   │   │           ├── getResolvedPartition.d.ts
│   │   │   │           ├── getResolvedSigningRegion.d.ts
│   │   │   │           └── index.d.ts
│   │   │   └── package.json
│   │   ├── core
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── cbor.d.ts
│   │   │   ├── cbor.js
│   │   │   ├── dist-cjs
│   │   │   │   ├── getSmithyContext.js
│   │   │   │   ├── index.js
│   │   │   │   ├── middleware-http-auth-scheme
│   │   │   │   │   ├── getHttpAuthSchemeEndpointRuleSetPlugin.js
│   │   │   │   │   ├── getHttpAuthSchemePlugin.js
│   │   │   │   │   ├── httpAuthSchemeMiddleware.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── middleware-http-signing
│   │   │   │   │   ├── getHttpSigningMiddleware.js
│   │   │   │   │   ├── httpSigningMiddleware.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── normalizeProvider.js
│   │   │   │   ├── pagination
│   │   │   │   │   └── createPaginator.js
│   │   │   │   ├── protocols
│   │   │   │   │   └── requestBuilder.js
│   │   │   │   ├── setFeature.js
│   │   │   │   ├── submodules
│   │   │   │   │   ├── cbor
│   │   │   │   │   │   └── index.js
│   │   │   │   │   └── protocols
│   │   │   │   │       └── index.js
│   │   │   │   └── util-identity-and-auth
│   │   │   │       ├── DefaultIdentityProviderConfig.js
│   │   │   │       ├── httpAuthSchemes
│   │   │   │       │   ├── httpApiKeyAuth.js
│   │   │   │       │   ├── httpBearerAuth.js
│   │   │   │       │   ├── index.js
│   │   │   │       │   └── noAuth.js
│   │   │   │       ├── index.js
│   │   │   │       └── memoizeIdentityProvider.js
│   │   │   ├── dist-es
│   │   │   │   ├── getSmithyContext.js
│   │   │   │   ├── index.js
│   │   │   │   ├── middleware-http-auth-scheme
│   │   │   │   │   ├── getHttpAuthSchemeEndpointRuleSetPlugin.js
│   │   │   │   │   ├── getHttpAuthSchemePlugin.js
│   │   │   │   │   ├── httpAuthSchemeMiddleware.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── middleware-http-signing
│   │   │   │   │   ├── getHttpSigningMiddleware.js
│   │   │   │   │   ├── httpSigningMiddleware.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── normalizeProvider.js
│   │   │   │   ├── pagination
│   │   │   │   │   └── createPaginator.js
│   │   │   │   ├── protocols
│   │   │   │   │   └── requestBuilder.js
│   │   │   │   ├── setFeature.js
│   │   │   │   ├── submodules
│   │   │   │   │   ├── cbor
│   │   │   │   │   │   ├── cbor-decode.js
│   │   │   │   │   │   ├── cbor-encode.js
│   │   │   │   │   │   ├── cbor-types.js
│   │   │   │   │   │   ├── cbor.js
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   └── parseCborBody.js
│   │   │   │   │   └── protocols
│   │   │   │   │       ├── collect-stream-body.js
│   │   │   │   │       ├── extended-encode-uri-component.js
│   │   │   │   │       ├── index.js
│   │   │   │   │       ├── requestBuilder.js
│   │   │   │   │       └── resolve-path.js
│   │   │   │   └── util-identity-and-auth
│   │   │   │       ├── DefaultIdentityProviderConfig.js
│   │   │   │       ├── httpAuthSchemes
│   │   │   │       │   ├── httpApiKeyAuth.js
│   │   │   │       │   ├── httpBearerAuth.js
│   │   │   │       │   ├── index.js
│   │   │   │       │   └── noAuth.js
│   │   │   │       ├── index.js
│   │   │   │       └── memoizeIdentityProvider.js
│   │   │   ├── dist-types
│   │   │   │   ├── getSmithyContext.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── middleware-http-auth-scheme
│   │   │   │   │   ├── getHttpAuthSchemeEndpointRuleSetPlugin.d.ts
│   │   │   │   │   ├── getHttpAuthSchemePlugin.d.ts
│   │   │   │   │   ├── httpAuthSchemeMiddleware.d.ts
│   │   │   │   │   └── index.d.ts
│   │   │   │   ├── middleware-http-signing
│   │   │   │   │   ├── getHttpSigningMiddleware.d.ts
│   │   │   │   │   ├── httpSigningMiddleware.d.ts
│   │   │   │   │   └── index.d.ts
│   │   │   │   ├── normalizeProvider.d.ts
│   │   │   │   ├── pagination
│   │   │   │   │   └── createPaginator.d.ts
│   │   │   │   ├── protocols
│   │   │   │   │   └── requestBuilder.d.ts
│   │   │   │   ├── setFeature.d.ts
│   │   │   │   ├── submodules
│   │   │   │   │   ├── cbor
│   │   │   │   │   │   ├── cbor-decode.d.ts
│   │   │   │   │   │   ├── cbor-encode.d.ts
│   │   │   │   │   │   ├── cbor-types.d.ts
│   │   │   │   │   │   ├── cbor.d.ts
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   └── parseCborBody.d.ts
│   │   │   │   │   └── protocols
│   │   │   │   │       ├── collect-stream-body.d.ts
│   │   │   │   │       ├── extended-encode-uri-component.d.ts
│   │   │   │   │       ├── index.d.ts
│   │   │   │   │       ├── requestBuilder.d.ts
│   │   │   │   │       └── resolve-path.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── getSmithyContext.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── middleware-http-auth-scheme
│   │   │   │   │   │   ├── getHttpAuthSchemeEndpointRuleSetPlugin.d.ts
│   │   │   │   │   │   ├── getHttpAuthSchemePlugin.d.ts
│   │   │   │   │   │   ├── httpAuthSchemeMiddleware.d.ts
│   │   │   │   │   │   └── index.d.ts
│   │   │   │   │   ├── middleware-http-signing
│   │   │   │   │   │   ├── getHttpSigningMiddleware.d.ts
│   │   │   │   │   │   ├── httpSigningMiddleware.d.ts
│   │   │   │   │   │   └── index.d.ts
│   │   │   │   │   ├── normalizeProvider.d.ts
│   │   │   │   │   ├── pagination
│   │   │   │   │   │   └── createPaginator.d.ts
│   │   │   │   │   ├── protocols
│   │   │   │   │   │   └── requestBuilder.d.ts
│   │   │   │   │   ├── setFeature.d.ts
│   │   │   │   │   ├── submodules
│   │   │   │   │   │   ├── cbor
│   │   │   │   │   │   │   ├── cbor-decode.d.ts
│   │   │   │   │   │   │   ├── cbor-encode.d.ts
│   │   │   │   │   │   │   ├── cbor-types.d.ts
│   │   │   │   │   │   │   ├── cbor.d.ts
│   │   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   │   └── parseCborBody.d.ts
│   │   │   │   │   │   └── protocols
│   │   │   │   │   │       ├── collect-stream-body.d.ts
│   │   │   │   │   │       ├── extended-encode-uri-component.d.ts
│   │   │   │   │   │       ├── index.d.ts
│   │   │   │   │   │       ├── requestBuilder.d.ts
│   │   │   │   │   │       └── resolve-path.d.ts
│   │   │   │   │   └── util-identity-and-auth
│   │   │   │   │       ├── DefaultIdentityProviderConfig.d.ts
│   │   │   │   │       ├── httpAuthSchemes
│   │   │   │   │       │   ├── httpApiKeyAuth.d.ts
│   │   │   │   │       │   ├── httpBearerAuth.d.ts
│   │   │   │   │       │   ├── index.d.ts
│   │   │   │   │       │   └── noAuth.d.ts
│   │   │   │   │       ├── index.d.ts
│   │   │   │   │       └── memoizeIdentityProvider.d.ts
│   │   │   │   └── util-identity-and-auth
│   │   │   │       ├── DefaultIdentityProviderConfig.d.ts
│   │   │   │       ├── httpAuthSchemes
│   │   │   │       │   ├── httpApiKeyAuth.d.ts
│   │   │   │       │   ├── httpBearerAuth.d.ts
│   │   │   │       │   ├── index.d.ts
│   │   │   │       │   └── noAuth.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       └── memoizeIdentityProvider.d.ts
│   │   │   ├── package.json
│   │   │   ├── protocols.d.ts
│   │   │   └── protocols.js
│   │   ├── credential-provider-imds
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── config
│   │   │   │   │   ├── Endpoint.js
│   │   │   │   │   ├── EndpointConfigOptions.js
│   │   │   │   │   ├── EndpointMode.js
│   │   │   │   │   └── EndpointModeConfigOptions.js
│   │   │   │   ├── error
│   │   │   │   │   └── InstanceMetadataV1FallbackError.js
│   │   │   │   ├── fromContainerMetadata.js
│   │   │   │   ├── fromInstanceMetadata.js
│   │   │   │   ├── index.js
│   │   │   │   ├── remoteProvider
│   │   │   │   │   ├── ImdsCredentials.js
│   │   │   │   │   ├── RemoteProviderInit.js
│   │   │   │   │   ├── httpRequest.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── retry.js
│   │   │   │   ├── types.js
│   │   │   │   └── utils
│   │   │   │       ├── getExtendedInstanceMetadataCredentials.js
│   │   │   │       ├── getInstanceMetadataEndpoint.js
│   │   │   │       └── staticStabilityProvider.js
│   │   │   ├── dist-es
│   │   │   │   ├── config
│   │   │   │   │   ├── Endpoint.js
│   │   │   │   │   ├── EndpointConfigOptions.js
│   │   │   │   │   ├── EndpointMode.js
│   │   │   │   │   └── EndpointModeConfigOptions.js
│   │   │   │   ├── error
│   │   │   │   │   └── InstanceMetadataV1FallbackError.js
│   │   │   │   ├── fromContainerMetadata.js
│   │   │   │   ├── fromInstanceMetadata.js
│   │   │   │   ├── index.js
│   │   │   │   ├── remoteProvider
│   │   │   │   │   ├── ImdsCredentials.js
│   │   │   │   │   ├── RemoteProviderInit.js
│   │   │   │   │   ├── httpRequest.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── retry.js
│   │   │   │   ├── types.js
│   │   │   │   └── utils
│   │   │   │       ├── getExtendedInstanceMetadataCredentials.js
│   │   │   │       ├── getInstanceMetadataEndpoint.js
│   │   │   │       └── staticStabilityProvider.js
│   │   │   ├── dist-types
│   │   │   │   ├── config
│   │   │   │   │   ├── Endpoint.d.ts
│   │   │   │   │   ├── EndpointConfigOptions.d.ts
│   │   │   │   │   ├── EndpointMode.d.ts
│   │   │   │   │   └── EndpointModeConfigOptions.d.ts
│   │   │   │   ├── error
│   │   │   │   │   └── InstanceMetadataV1FallbackError.d.ts
│   │   │   │   ├── fromContainerMetadata.d.ts
│   │   │   │   ├── fromInstanceMetadata.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── remoteProvider
│   │   │   │   │   ├── ImdsCredentials.d.ts
│   │   │   │   │   ├── RemoteProviderInit.d.ts
│   │   │   │   │   ├── httpRequest.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   └── retry.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── config
│   │   │   │   │   │   ├── Endpoint.d.ts
│   │   │   │   │   │   ├── EndpointConfigOptions.d.ts
│   │   │   │   │   │   ├── EndpointMode.d.ts
│   │   │   │   │   │   └── EndpointModeConfigOptions.d.ts
│   │   │   │   │   ├── error
│   │   │   │   │   │   └── InstanceMetadataV1FallbackError.d.ts
│   │   │   │   │   ├── fromContainerMetadata.d.ts
│   │   │   │   │   ├── fromInstanceMetadata.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── remoteProvider
│   │   │   │   │   │   ├── ImdsCredentials.d.ts
│   │   │   │   │   │   ├── RemoteProviderInit.d.ts
│   │   │   │   │   │   ├── httpRequest.d.ts
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   └── retry.d.ts
│   │   │   │   │   ├── types.d.ts
│   │   │   │   │   └── utils
│   │   │   │   │       ├── getExtendedInstanceMetadataCredentials.d.ts
│   │   │   │   │       ├── getInstanceMetadataEndpoint.d.ts
│   │   │   │   │       └── staticStabilityProvider.d.ts
│   │   │   │   ├── types.d.ts
│   │   │   │   └── utils
│   │   │   │       ├── getExtendedInstanceMetadataCredentials.d.ts
│   │   │   │       ├── getInstanceMetadataEndpoint.d.ts
│   │   │   │       └── staticStabilityProvider.d.ts
│   │   │   └── package.json
│   │   ├── eventstream-codec
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── EventStreamCodec.js
│   │   │   │   ├── HeaderMarshaller.js
│   │   │   │   ├── Int64.js
│   │   │   │   ├── Message.js
│   │   │   │   ├── MessageDecoderStream.js
│   │   │   │   ├── MessageEncoderStream.js
│   │   │   │   ├── SmithyMessageDecoderStream.js
│   │   │   │   ├── SmithyMessageEncoderStream.js
│   │   │   │   ├── TestVectors.fixture.js
│   │   │   │   ├── index.js
│   │   │   │   ├── splitMessage.js
│   │   │   │   └── vectorTypes.fixture.js
│   │   │   ├── dist-es
│   │   │   │   ├── EventStreamCodec.js
│   │   │   │   ├── HeaderMarshaller.js
│   │   │   │   ├── Int64.js
│   │   │   │   ├── Message.js
│   │   │   │   ├── MessageDecoderStream.js
│   │   │   │   ├── MessageEncoderStream.js
│   │   │   │   ├── SmithyMessageDecoderStream.js
│   │   │   │   ├── SmithyMessageEncoderStream.js
│   │   │   │   ├── TestVectors.fixture.js
│   │   │   │   ├── index.js
│   │   │   │   ├── splitMessage.js
│   │   │   │   └── vectorTypes.fixture.js
│   │   │   ├── dist-types
│   │   │   │   ├── EventStreamCodec.d.ts
│   │   │   │   ├── HeaderMarshaller.d.ts
│   │   │   │   ├── Int64.d.ts
│   │   │   │   ├── Message.d.ts
│   │   │   │   ├── MessageDecoderStream.d.ts
│   │   │   │   ├── MessageEncoderStream.d.ts
│   │   │   │   ├── SmithyMessageDecoderStream.d.ts
│   │   │   │   ├── SmithyMessageEncoderStream.d.ts
│   │   │   │   ├── TestVectors.fixture.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── splitMessage.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── EventStreamCodec.d.ts
│   │   │   │   │   ├── HeaderMarshaller.d.ts
│   │   │   │   │   ├── Int64.d.ts
│   │   │   │   │   ├── Message.d.ts
│   │   │   │   │   ├── MessageDecoderStream.d.ts
│   │   │   │   │   ├── MessageEncoderStream.d.ts
│   │   │   │   │   ├── SmithyMessageDecoderStream.d.ts
│   │   │   │   │   ├── SmithyMessageEncoderStream.d.ts
│   │   │   │   │   ├── TestVectors.fixture.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── splitMessage.d.ts
│   │   │   │   │   └── vectorTypes.fixture.d.ts
│   │   │   │   └── vectorTypes.fixture.d.ts
│   │   │   └── package.json
│   │   ├── eventstream-serde-browser
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── EventStreamMarshaller.js
│   │   │   │   ├── index.js
│   │   │   │   ├── provider.js
│   │   │   │   └── utils.js
│   │   │   ├── dist-es
│   │   │   │   ├── EventStreamMarshaller.js
│   │   │   │   ├── index.js
│   │   │   │   ├── provider.js
│   │   │   │   └── utils.js
│   │   │   ├── dist-types
│   │   │   │   ├── EventStreamMarshaller.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── provider.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── EventStreamMarshaller.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── provider.d.ts
│   │   │   │   │   └── utils.d.ts
│   │   │   │   └── utils.d.ts
│   │   │   └── package.json
│   │   ├── eventstream-serde-config-resolver
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── EventStreamSerdeConfig.js
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── EventStreamSerdeConfig.js
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── EventStreamSerdeConfig.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── EventStreamSerdeConfig.d.ts
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── eventstream-serde-node
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── EventStreamMarshaller.js
│   │   │   │   ├── index.js
│   │   │   │   ├── provider.js
│   │   │   │   └── utils.js
│   │   │   ├── dist-es
│   │   │   │   ├── EventStreamMarshaller.js
│   │   │   │   ├── index.js
│   │   │   │   ├── provider.js
│   │   │   │   └── utils.js
│   │   │   ├── dist-types
│   │   │   │   ├── EventStreamMarshaller.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── provider.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── EventStreamMarshaller.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── provider.d.ts
│   │   │   │   │   └── utils.d.ts
│   │   │   │   └── utils.d.ts
│   │   │   └── package.json
│   │   ├── eventstream-serde-universal
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── EventStreamMarshaller.js
│   │   │   │   ├── getChunkedStream.js
│   │   │   │   ├── getUnmarshalledStream.js
│   │   │   │   ├── index.js
│   │   │   │   └── provider.js
│   │   │   ├── dist-es
│   │   │   │   ├── EventStreamMarshaller.js
│   │   │   │   ├── getChunkedStream.js
│   │   │   │   ├── getUnmarshalledStream.js
│   │   │   │   ├── index.js
│   │   │   │   └── provider.js
│   │   │   ├── dist-types
│   │   │   │   ├── EventStreamMarshaller.d.ts
│   │   │   │   ├── getChunkedStream.d.ts
│   │   │   │   ├── getUnmarshalledStream.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── provider.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── EventStreamMarshaller.d.ts
│   │   │   │       ├── getChunkedStream.d.ts
│   │   │   │       ├── getUnmarshalledStream.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       └── provider.d.ts
│   │   │   └── package.json
│   │   ├── fetch-http-handler
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── create-request.js
│   │   │   │   ├── fetch-http-handler.js
│   │   │   │   ├── index.js
│   │   │   │   ├── request-timeout.js
│   │   │   │   └── stream-collector.js
│   │   │   ├── dist-es
│   │   │   │   ├── create-request.js
│   │   │   │   ├── fetch-http-handler.js
│   │   │   │   ├── index.js
│   │   │   │   ├── request-timeout.js
│   │   │   │   └── stream-collector.js
│   │   │   ├── dist-types
│   │   │   │   ├── create-request.d.ts
│   │   │   │   ├── fetch-http-handler.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── request-timeout.d.ts
│   │   │   │   ├── stream-collector.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── create-request.d.ts
│   │   │   │       ├── fetch-http-handler.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── request-timeout.d.ts
│   │   │   │       └── stream-collector.d.ts
│   │   │   └── package.json
│   │   ├── hash-blob-browser
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── hash-node
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── hash-stream-node
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── HashCalculator.js
│   │   │   │   ├── fileStreamHasher.js
│   │   │   │   ├── index.js
│   │   │   │   └── readableStreamHasher.js
│   │   │   ├── dist-es
│   │   │   │   ├── HashCalculator.js
│   │   │   │   ├── fileStreamHasher.js
│   │   │   │   ├── index.js
│   │   │   │   └── readableStreamHasher.js
│   │   │   ├── dist-types
│   │   │   │   ├── HashCalculator.d.ts
│   │   │   │   ├── fileStreamHasher.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── readableStreamHasher.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── HashCalculator.d.ts
│   │   │   │       ├── fileStreamHasher.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       └── readableStreamHasher.d.ts
│   │   │   └── package.json
│   │   ├── invalid-dependency
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── index.js
│   │   │   │   ├── invalidFunction.js
│   │   │   │   └── invalidProvider.js
│   │   │   ├── dist-es
│   │   │   │   ├── index.js
│   │   │   │   ├── invalidFunction.js
│   │   │   │   └── invalidProvider.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── invalidFunction.d.ts
│   │   │   │   ├── invalidProvider.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── invalidFunction.d.ts
│   │   │   │       └── invalidProvider.d.ts
│   │   │   └── package.json
│   │   ├── is-array-buffer
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── md5-js
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── constants.js
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── constants.js
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── constants.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── constants.d.ts
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── middleware-content-length
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── middleware-endpoint
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── adaptors
│   │   │   │   │   ├── createConfigValueProvider.js
│   │   │   │   │   ├── getEndpointFromConfig.browser.js
│   │   │   │   │   ├── getEndpointFromConfig.js
│   │   │   │   │   ├── getEndpointFromInstructions.js
│   │   │   │   │   ├── getEndpointUrlConfig.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── toEndpointV1.js
│   │   │   │   ├── endpointMiddleware.js
│   │   │   │   ├── getEndpointPlugin.js
│   │   │   │   ├── index.js
│   │   │   │   ├── resolveEndpointConfig.js
│   │   │   │   ├── service-customizations
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── s3.js
│   │   │   │   └── types.js
│   │   │   ├── dist-es
│   │   │   │   ├── adaptors
│   │   │   │   │   ├── createConfigValueProvider.js
│   │   │   │   │   ├── getEndpointFromConfig.browser.js
│   │   │   │   │   ├── getEndpointFromConfig.js
│   │   │   │   │   ├── getEndpointFromInstructions.js
│   │   │   │   │   ├── getEndpointUrlConfig.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── toEndpointV1.js
│   │   │   │   ├── endpointMiddleware.js
│   │   │   │   ├── getEndpointPlugin.js
│   │   │   │   ├── index.js
│   │   │   │   ├── resolveEndpointConfig.js
│   │   │   │   ├── service-customizations
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── s3.js
│   │   │   │   └── types.js
│   │   │   ├── dist-types
│   │   │   │   ├── adaptors
│   │   │   │   │   ├── createConfigValueProvider.d.ts
│   │   │   │   │   ├── getEndpointFromConfig.browser.d.ts
│   │   │   │   │   ├── getEndpointFromConfig.d.ts
│   │   │   │   │   ├── getEndpointFromInstructions.d.ts
│   │   │   │   │   ├── getEndpointUrlConfig.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   └── toEndpointV1.d.ts
│   │   │   │   ├── endpointMiddleware.d.ts
│   │   │   │   ├── getEndpointPlugin.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── resolveEndpointConfig.d.ts
│   │   │   │   ├── service-customizations
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   └── s3.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── adaptors
│   │   │   │   │   │   ├── createConfigValueProvider.d.ts
│   │   │   │   │   │   ├── getEndpointFromConfig.browser.d.ts
│   │   │   │   │   │   ├── getEndpointFromConfig.d.ts
│   │   │   │   │   │   ├── getEndpointFromInstructions.d.ts
│   │   │   │   │   │   ├── getEndpointUrlConfig.d.ts
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   └── toEndpointV1.d.ts
│   │   │   │   │   ├── endpointMiddleware.d.ts
│   │   │   │   │   ├── getEndpointPlugin.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── resolveEndpointConfig.d.ts
│   │   │   │   │   ├── service-customizations
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   └── s3.d.ts
│   │   │   │   │   └── types.d.ts
│   │   │   │   └── types.d.ts
│   │   │   └── package.json
│   │   ├── middleware-retry
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── AdaptiveRetryStrategy.js
│   │   │   │   ├── StandardRetryStrategy.js
│   │   │   │   ├── configurations.js
│   │   │   │   ├── defaultRetryQuota.js
│   │   │   │   ├── delayDecider.js
│   │   │   │   ├── index.js
│   │   │   │   ├── isStreamingPayload
│   │   │   │   │   ├── isStreamingPayload.browser.js
│   │   │   │   │   └── isStreamingPayload.js
│   │   │   │   ├── omitRetryHeadersMiddleware.js
│   │   │   │   ├── retryDecider.js
│   │   │   │   ├── retryMiddleware.js
│   │   │   │   ├── types.js
│   │   │   │   └── util.js
│   │   │   ├── dist-es
│   │   │   │   ├── AdaptiveRetryStrategy.js
│   │   │   │   ├── StandardRetryStrategy.js
│   │   │   │   ├── configurations.js
│   │   │   │   ├── defaultRetryQuota.js
│   │   │   │   ├── delayDecider.js
│   │   │   │   ├── index.js
│   │   │   │   ├── isStreamingPayload
│   │   │   │   │   ├── isStreamingPayload.browser.js
│   │   │   │   │   └── isStreamingPayload.js
│   │   │   │   ├── omitRetryHeadersMiddleware.js
│   │   │   │   ├── retryDecider.js
│   │   │   │   ├── retryMiddleware.js
│   │   │   │   ├── types.js
│   │   │   │   └── util.js
│   │   │   ├── dist-types
│   │   │   │   ├── AdaptiveRetryStrategy.d.ts
│   │   │   │   ├── StandardRetryStrategy.d.ts
│   │   │   │   ├── configurations.d.ts
│   │   │   │   ├── defaultRetryQuota.d.ts
│   │   │   │   ├── delayDecider.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── isStreamingPayload
│   │   │   │   │   ├── isStreamingPayload.browser.d.ts
│   │   │   │   │   └── isStreamingPayload.d.ts
│   │   │   │   ├── omitRetryHeadersMiddleware.d.ts
│   │   │   │   ├── retryDecider.d.ts
│   │   │   │   ├── retryMiddleware.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── AdaptiveRetryStrategy.d.ts
│   │   │   │   │   ├── StandardRetryStrategy.d.ts
│   │   │   │   │   ├── configurations.d.ts
│   │   │   │   │   ├── defaultRetryQuota.d.ts
│   │   │   │   │   ├── delayDecider.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── isStreamingPayload
│   │   │   │   │   │   ├── isStreamingPayload.browser.d.ts
│   │   │   │   │   │   └── isStreamingPayload.d.ts
│   │   │   │   │   ├── omitRetryHeadersMiddleware.d.ts
│   │   │   │   │   ├── retryDecider.d.ts
│   │   │   │   │   ├── retryMiddleware.d.ts
│   │   │   │   │   ├── types.d.ts
│   │   │   │   │   └── util.d.ts
│   │   │   │   ├── types.d.ts
│   │   │   │   └── util.d.ts
│   │   │   └── package.json
│   │   ├── middleware-serde
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── deserializerMiddleware.js
│   │   │   │   ├── index.js
│   │   │   │   ├── serdePlugin.js
│   │   │   │   └── serializerMiddleware.js
│   │   │   ├── dist-es
│   │   │   │   ├── deserializerMiddleware.js
│   │   │   │   ├── index.js
│   │   │   │   ├── serdePlugin.js
│   │   │   │   └── serializerMiddleware.js
│   │   │   ├── dist-types
│   │   │   │   ├── deserializerMiddleware.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── serdePlugin.d.ts
│   │   │   │   ├── serializerMiddleware.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── deserializerMiddleware.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── serdePlugin.d.ts
│   │   │   │       └── serializerMiddleware.d.ts
│   │   │   └── package.json
│   │   ├── middleware-stack
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── MiddlewareStack.js
│   │   │   │   ├── index.js
│   │   │   │   └── types.js
│   │   │   ├── dist-es
│   │   │   │   ├── MiddlewareStack.js
│   │   │   │   ├── index.js
│   │   │   │   └── types.js
│   │   │   ├── dist-types
│   │   │   │   ├── MiddlewareStack.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── MiddlewareStack.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   └── types.d.ts
│   │   │   │   └── types.d.ts
│   │   │   └── package.json
│   │   ├── node-config-provider
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── configLoader.js
│   │   │   │   ├── fromEnv.js
│   │   │   │   ├── fromSharedConfigFiles.js
│   │   │   │   ├── fromStatic.js
│   │   │   │   ├── getSelectorName.js
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── configLoader.js
│   │   │   │   ├── fromEnv.js
│   │   │   │   ├── fromSharedConfigFiles.js
│   │   │   │   ├── fromStatic.js
│   │   │   │   ├── getSelectorName.js
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── configLoader.d.ts
│   │   │   │   ├── fromEnv.d.ts
│   │   │   │   ├── fromSharedConfigFiles.d.ts
│   │   │   │   ├── fromStatic.d.ts
│   │   │   │   ├── getSelectorName.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── configLoader.d.ts
│   │   │   │       ├── fromEnv.d.ts
│   │   │   │       ├── fromSharedConfigFiles.d.ts
│   │   │   │       ├── fromStatic.d.ts
│   │   │   │       ├── getSelectorName.d.ts
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── node-http-handler
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── constants.js
│   │   │   │   ├── get-transformed-headers.js
│   │   │   │   ├── index.js
│   │   │   │   ├── node-http-handler.js
│   │   │   │   ├── node-http2-connection-manager.js
│   │   │   │   ├── node-http2-connection-pool.js
│   │   │   │   ├── node-http2-handler.js
│   │   │   │   ├── readable.mock.js
│   │   │   │   ├── server.mock.js
│   │   │   │   ├── set-connection-timeout.js
│   │   │   │   ├── set-socket-keep-alive.js
│   │   │   │   ├── set-socket-timeout.js
│   │   │   │   ├── stream-collector
│   │   │   │   │   ├── collector.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── readable.mock.js
│   │   │   │   ├── timing.js
│   │   │   │   └── write-request-body.js
│   │   │   ├── dist-es
│   │   │   │   ├── constants.js
│   │   │   │   ├── get-transformed-headers.js
│   │   │   │   ├── index.js
│   │   │   │   ├── node-http-handler.js
│   │   │   │   ├── node-http2-connection-manager.js
│   │   │   │   ├── node-http2-connection-pool.js
│   │   │   │   ├── node-http2-handler.js
│   │   │   │   ├── readable.mock.js
│   │   │   │   ├── server.mock.js
│   │   │   │   ├── set-connection-timeout.js
│   │   │   │   ├── set-socket-keep-alive.js
│   │   │   │   ├── set-socket-timeout.js
│   │   │   │   ├── stream-collector
│   │   │   │   │   ├── collector.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── readable.mock.js
│   │   │   │   ├── timing.js
│   │   │   │   └── write-request-body.js
│   │   │   ├── dist-types
│   │   │   │   ├── constants.d.ts
│   │   │   │   ├── get-transformed-headers.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── node-http-handler.d.ts
│   │   │   │   ├── node-http2-connection-manager.d.ts
│   │   │   │   ├── node-http2-connection-pool.d.ts
│   │   │   │   ├── node-http2-handler.d.ts
│   │   │   │   ├── readable.mock.d.ts
│   │   │   │   ├── server.mock.d.ts
│   │   │   │   ├── set-connection-timeout.d.ts
│   │   │   │   ├── set-socket-keep-alive.d.ts
│   │   │   │   ├── set-socket-timeout.d.ts
│   │   │   │   ├── stream-collector
│   │   │   │   │   ├── collector.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   └── readable.mock.d.ts
│   │   │   │   ├── timing.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── constants.d.ts
│   │   │   │   │   ├── get-transformed-headers.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── node-http-handler.d.ts
│   │   │   │   │   ├── node-http2-connection-manager.d.ts
│   │   │   │   │   ├── node-http2-connection-pool.d.ts
│   │   │   │   │   ├── node-http2-handler.d.ts
│   │   │   │   │   ├── readable.mock.d.ts
│   │   │   │   │   ├── server.mock.d.ts
│   │   │   │   │   ├── set-connection-timeout.d.ts
│   │   │   │   │   ├── set-socket-keep-alive.d.ts
│   │   │   │   │   ├── set-socket-timeout.d.ts
│   │   │   │   │   ├── stream-collector
│   │   │   │   │   │   ├── collector.d.ts
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   └── readable.mock.d.ts
│   │   │   │   │   ├── timing.d.ts
│   │   │   │   │   └── write-request-body.d.ts
│   │   │   │   └── write-request-body.d.ts
│   │   │   └── package.json
│   │   ├── property-provider
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── CredentialsProviderError.js
│   │   │   │   ├── ProviderError.js
│   │   │   │   ├── TokenProviderError.js
│   │   │   │   ├── chain.js
│   │   │   │   ├── fromStatic.js
│   │   │   │   ├── index.js
│   │   │   │   └── memoize.js
│   │   │   ├── dist-es
│   │   │   │   ├── CredentialsProviderError.js
│   │   │   │   ├── ProviderError.js
│   │   │   │   ├── TokenProviderError.js
│   │   │   │   ├── chain.js
│   │   │   │   ├── fromStatic.js
│   │   │   │   ├── index.js
│   │   │   │   └── memoize.js
│   │   │   ├── dist-types
│   │   │   │   ├── CredentialsProviderError.d.ts
│   │   │   │   ├── ProviderError.d.ts
│   │   │   │   ├── TokenProviderError.d.ts
│   │   │   │   ├── chain.d.ts
│   │   │   │   ├── fromStatic.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── memoize.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── CredentialsProviderError.d.ts
│   │   │   │       ├── ProviderError.d.ts
│   │   │   │       ├── TokenProviderError.d.ts
│   │   │   │       ├── chain.d.ts
│   │   │   │       ├── fromStatic.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       └── memoize.d.ts
│   │   │   └── package.json
│   │   ├── protocol-http
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── Field.js
│   │   │   │   ├── Fields.js
│   │   │   │   ├── extensions
│   │   │   │   │   ├── httpExtensionConfiguration.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── httpHandler.js
│   │   │   │   ├── httpRequest.js
│   │   │   │   ├── httpResponse.js
│   │   │   │   ├── index.js
│   │   │   │   ├── isValidHostname.js
│   │   │   │   └── types.js
│   │   │   ├── dist-es
│   │   │   │   ├── Field.js
│   │   │   │   ├── Fields.js
│   │   │   │   ├── extensions
│   │   │   │   │   ├── httpExtensionConfiguration.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── httpHandler.js
│   │   │   │   ├── httpRequest.js
│   │   │   │   ├── httpResponse.js
│   │   │   │   ├── index.js
│   │   │   │   ├── isValidHostname.js
│   │   │   │   └── types.js
│   │   │   ├── dist-types
│   │   │   │   ├── Field.d.ts
│   │   │   │   ├── Fields.d.ts
│   │   │   │   ├── extensions
│   │   │   │   │   ├── httpExtensionConfiguration.d.ts
│   │   │   │   │   └── index.d.ts
│   │   │   │   ├── httpHandler.d.ts
│   │   │   │   ├── httpRequest.d.ts
│   │   │   │   ├── httpResponse.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── isValidHostname.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── Field.d.ts
│   │   │   │   │   ├── Fields.d.ts
│   │   │   │   │   ├── extensions
│   │   │   │   │   │   ├── httpExtensionConfiguration.d.ts
│   │   │   │   │   │   └── index.d.ts
│   │   │   │   │   ├── httpHandler.d.ts
│   │   │   │   │   ├── httpRequest.d.ts
│   │   │   │   │   ├── httpResponse.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── isValidHostname.d.ts
│   │   │   │   │   └── types.d.ts
│   │   │   │   └── types.d.ts
│   │   │   └── package.json
│   │   ├── querystring-builder
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── querystring-parser
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── service-error-classification
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── constants.js
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── constants.js
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── constants.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── constants.d.ts
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── shared-ini-file-loader
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── getConfigData.js
│   │   │   │   ├── getConfigFilepath.js
│   │   │   │   ├── getCredentialsFilepath.js
│   │   │   │   ├── getHomeDir.js
│   │   │   │   ├── getProfileName.js
│   │   │   │   ├── getSSOTokenFilepath.js
│   │   │   │   ├── getSSOTokenFromFile.js
│   │   │   │   ├── getSsoSessionData.js
│   │   │   │   ├── index.js
│   │   │   │   ├── loadSharedConfigFiles.js
│   │   │   │   ├── loadSsoSessionData.js
│   │   │   │   ├── mergeConfigFiles.js
│   │   │   │   ├── parseIni.js
│   │   │   │   ├── parseKnownFiles.js
│   │   │   │   ├── slurpFile.js
│   │   │   │   └── types.js
│   │   │   ├── dist-es
│   │   │   │   ├── getConfigData.js
│   │   │   │   ├── getConfigFilepath.js
│   │   │   │   ├── getCredentialsFilepath.js
│   │   │   │   ├── getHomeDir.js
│   │   │   │   ├── getProfileName.js
│   │   │   │   ├── getSSOTokenFilepath.js
│   │   │   │   ├── getSSOTokenFromFile.js
│   │   │   │   ├── getSsoSessionData.js
│   │   │   │   ├── index.js
│   │   │   │   ├── loadSharedConfigFiles.js
│   │   │   │   ├── loadSsoSessionData.js
│   │   │   │   ├── mergeConfigFiles.js
│   │   │   │   ├── parseIni.js
│   │   │   │   ├── parseKnownFiles.js
│   │   │   │   ├── slurpFile.js
│   │   │   │   └── types.js
│   │   │   ├── dist-types
│   │   │   │   ├── getConfigData.d.ts
│   │   │   │   ├── getConfigFilepath.d.ts
│   │   │   │   ├── getCredentialsFilepath.d.ts
│   │   │   │   ├── getHomeDir.d.ts
│   │   │   │   ├── getProfileName.d.ts
│   │   │   │   ├── getSSOTokenFilepath.d.ts
│   │   │   │   ├── getSSOTokenFromFile.d.ts
│   │   │   │   ├── getSsoSessionData.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── loadSharedConfigFiles.d.ts
│   │   │   │   ├── loadSsoSessionData.d.ts
│   │   │   │   ├── mergeConfigFiles.d.ts
│   │   │   │   ├── parseIni.d.ts
│   │   │   │   ├── parseKnownFiles.d.ts
│   │   │   │   ├── slurpFile.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── getConfigData.d.ts
│   │   │   │   │   ├── getConfigFilepath.d.ts
│   │   │   │   │   ├── getCredentialsFilepath.d.ts
│   │   │   │   │   ├── getHomeDir.d.ts
│   │   │   │   │   ├── getProfileName.d.ts
│   │   │   │   │   ├── getSSOTokenFilepath.d.ts
│   │   │   │   │   ├── getSSOTokenFromFile.d.ts
│   │   │   │   │   ├── getSsoSessionData.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── loadSharedConfigFiles.d.ts
│   │   │   │   │   ├── loadSsoSessionData.d.ts
│   │   │   │   │   ├── mergeConfigFiles.d.ts
│   │   │   │   │   ├── parseIni.d.ts
│   │   │   │   │   ├── parseKnownFiles.d.ts
│   │   │   │   │   ├── slurpFile.d.ts
│   │   │   │   │   └── types.d.ts
│   │   │   │   └── types.d.ts
│   │   │   └── package.json
│   │   ├── signature-v4
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── HeaderFormatter.js
│   │   │   │   ├── SignatureV4.js
│   │   │   │   ├── constants.js
│   │   │   │   ├── credentialDerivation.js
│   │   │   │   ├── getCanonicalHeaders.js
│   │   │   │   ├── getCanonicalQuery.js
│   │   │   │   ├── getPayloadHash.js
│   │   │   │   ├── headerUtil.js
│   │   │   │   ├── index.js
│   │   │   │   ├── moveHeadersToQuery.js
│   │   │   │   ├── prepareRequest.js
│   │   │   │   ├── suite.fixture.js
│   │   │   │   └── utilDate.js
│   │   │   ├── dist-es
│   │   │   │   ├── HeaderFormatter.js
│   │   │   │   ├── SignatureV4.js
│   │   │   │   ├── constants.js
│   │   │   │   ├── credentialDerivation.js
│   │   │   │   ├── getCanonicalHeaders.js
│   │   │   │   ├── getCanonicalQuery.js
│   │   │   │   ├── getPayloadHash.js
│   │   │   │   ├── headerUtil.js
│   │   │   │   ├── index.js
│   │   │   │   ├── moveHeadersToQuery.js
│   │   │   │   ├── prepareRequest.js
│   │   │   │   ├── suite.fixture.js
│   │   │   │   └── utilDate.js
│   │   │   ├── dist-types
│   │   │   │   ├── HeaderFormatter.d.ts
│   │   │   │   ├── SignatureV4.d.ts
│   │   │   │   ├── constants.d.ts
│   │   │   │   ├── credentialDerivation.d.ts
│   │   │   │   ├── getCanonicalHeaders.d.ts
│   │   │   │   ├── getCanonicalQuery.d.ts
│   │   │   │   ├── getPayloadHash.d.ts
│   │   │   │   ├── headerUtil.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── moveHeadersToQuery.d.ts
│   │   │   │   ├── prepareRequest.d.ts
│   │   │   │   ├── suite.fixture.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── HeaderFormatter.d.ts
│   │   │   │   │   ├── SignatureV4.d.ts
│   │   │   │   │   ├── constants.d.ts
│   │   │   │   │   ├── credentialDerivation.d.ts
│   │   │   │   │   ├── getCanonicalHeaders.d.ts
│   │   │   │   │   ├── getCanonicalQuery.d.ts
│   │   │   │   │   ├── getPayloadHash.d.ts
│   │   │   │   │   ├── headerUtil.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── moveHeadersToQuery.d.ts
│   │   │   │   │   ├── prepareRequest.d.ts
│   │   │   │   │   ├── suite.fixture.d.ts
│   │   │   │   │   └── utilDate.d.ts
│   │   │   │   └── utilDate.d.ts
│   │   │   └── package.json
│   │   ├── smithy-client
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── NoOpLogger.js
│   │   │   │   ├── client.js
│   │   │   │   ├── collect-stream-body.js
│   │   │   │   ├── command.js
│   │   │   │   ├── constants.js
│   │   │   │   ├── create-aggregated-client.js
│   │   │   │   ├── date-utils.js
│   │   │   │   ├── default-error-handler.js
│   │   │   │   ├── defaults-mode.js
│   │   │   │   ├── emitWarningIfUnsupportedVersion.js
│   │   │   │   ├── exceptions.js
│   │   │   │   ├── extended-encode-uri-component.js
│   │   │   │   ├── extensions
│   │   │   │   │   ├── checksum.js
│   │   │   │   │   ├── defaultExtensionConfiguration.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── retry.js
│   │   │   │   ├── get-array-if-single-item.js
│   │   │   │   ├── get-value-from-text-node.js
│   │   │   │   ├── index.js
│   │   │   │   ├── is-serializable-header-value.js
│   │   │   │   ├── lazy-json.js
│   │   │   │   ├── object-mapping.js
│   │   │   │   ├── parse-utils.js
│   │   │   │   ├── quote-header.js
│   │   │   │   ├── resolve-path.js
│   │   │   │   ├── ser-utils.js
│   │   │   │   ├── serde-json.js
│   │   │   │   ├── split-every.js
│   │   │   │   └── split-header.js
│   │   │   ├── dist-es
│   │   │   │   ├── NoOpLogger.js
│   │   │   │   ├── client.js
│   │   │   │   ├── collect-stream-body.js
│   │   │   │   ├── command.js
│   │   │   │   ├── constants.js
│   │   │   │   ├── create-aggregated-client.js
│   │   │   │   ├── date-utils.js
│   │   │   │   ├── default-error-handler.js
│   │   │   │   ├── defaults-mode.js
│   │   │   │   ├── emitWarningIfUnsupportedVersion.js
│   │   │   │   ├── exceptions.js
│   │   │   │   ├── extended-encode-uri-component.js
│   │   │   │   ├── extensions
│   │   │   │   │   ├── checksum.js
│   │   │   │   │   ├── defaultExtensionConfiguration.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── retry.js
│   │   │   │   ├── get-array-if-single-item.js
│   │   │   │   ├── get-value-from-text-node.js
│   │   │   │   ├── index.js
│   │   │   │   ├── is-serializable-header-value.js
│   │   │   │   ├── lazy-json.js
│   │   │   │   ├── object-mapping.js
│   │   │   │   ├── parse-utils.js
│   │   │   │   ├── quote-header.js
│   │   │   │   ├── resolve-path.js
│   │   │   │   ├── ser-utils.js
│   │   │   │   ├── serde-json.js
│   │   │   │   ├── split-every.js
│   │   │   │   └── split-header.js
│   │   │   ├── dist-types
│   │   │   │   ├── NoOpLogger.d.ts
│   │   │   │   ├── client.d.ts
│   │   │   │   ├── collect-stream-body.d.ts
│   │   │   │   ├── command.d.ts
│   │   │   │   ├── constants.d.ts
│   │   │   │   ├── create-aggregated-client.d.ts
│   │   │   │   ├── date-utils.d.ts
│   │   │   │   ├── default-error-handler.d.ts
│   │   │   │   ├── defaults-mode.d.ts
│   │   │   │   ├── emitWarningIfUnsupportedVersion.d.ts
│   │   │   │   ├── exceptions.d.ts
│   │   │   │   ├── extended-encode-uri-component.d.ts
│   │   │   │   ├── extensions
│   │   │   │   │   ├── checksum.d.ts
│   │   │   │   │   ├── defaultExtensionConfiguration.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   └── retry.d.ts
│   │   │   │   ├── get-array-if-single-item.d.ts
│   │   │   │   ├── get-value-from-text-node.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── is-serializable-header-value.d.ts
│   │   │   │   ├── lazy-json.d.ts
│   │   │   │   ├── object-mapping.d.ts
│   │   │   │   ├── parse-utils.d.ts
│   │   │   │   ├── quote-header.d.ts
│   │   │   │   ├── resolve-path.d.ts
│   │   │   │   ├── ser-utils.d.ts
│   │   │   │   ├── serde-json.d.ts
│   │   │   │   ├── split-every.d.ts
│   │   │   │   ├── split-header.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── NoOpLogger.d.ts
│   │   │   │       ├── client.d.ts
│   │   │   │       ├── collect-stream-body.d.ts
│   │   │   │       ├── command.d.ts
│   │   │   │       ├── constants.d.ts
│   │   │   │       ├── create-aggregated-client.d.ts
│   │   │   │       ├── date-utils.d.ts
│   │   │   │       ├── default-error-handler.d.ts
│   │   │   │       ├── defaults-mode.d.ts
│   │   │   │       ├── emitWarningIfUnsupportedVersion.d.ts
│   │   │   │       ├── exceptions.d.ts
│   │   │   │       ├── extended-encode-uri-component.d.ts
│   │   │   │       ├── extensions
│   │   │   │       │   ├── checksum.d.ts
│   │   │   │       │   ├── defaultExtensionConfiguration.d.ts
│   │   │   │       │   ├── index.d.ts
│   │   │   │       │   └── retry.d.ts
│   │   │   │       ├── get-array-if-single-item.d.ts
│   │   │   │       ├── get-value-from-text-node.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── is-serializable-header-value.d.ts
│   │   │   │       ├── lazy-json.d.ts
│   │   │   │       ├── object-mapping.d.ts
│   │   │   │       ├── parse-utils.d.ts
│   │   │   │       ├── quote-header.d.ts
│   │   │   │       ├── resolve-path.d.ts
│   │   │   │       ├── ser-utils.d.ts
│   │   │   │       ├── serde-json.d.ts
│   │   │   │       ├── split-every.d.ts
│   │   │   │       └── split-header.d.ts
│   │   │   └── package.json
│   │   ├── types
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── abort-handler.js
│   │   │   │   ├── abort.js
│   │   │   │   ├── auth
│   │   │   │   │   ├── HttpApiKeyAuth.js
│   │   │   │   │   ├── HttpAuthScheme.js
│   │   │   │   │   ├── HttpAuthSchemeProvider.js
│   │   │   │   │   ├── HttpSigner.js
│   │   │   │   │   ├── IdentityProviderConfig.js
│   │   │   │   │   ├── auth.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── blob
│   │   │   │   │   └── blob-payload-input-types.js
│   │   │   │   ├── checksum.js
│   │   │   │   ├── client.js
│   │   │   │   ├── command.js
│   │   │   │   ├── connection
│   │   │   │   │   ├── config.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── manager.js
│   │   │   │   │   └── pool.js
│   │   │   │   ├── crypto.js
│   │   │   │   ├── downlevel-ts3.4
│   │   │   │   │   └── transform
│   │   │   │   │       └── type-transform.js
│   │   │   │   ├── encode.js
│   │   │   │   ├── endpoint.js
│   │   │   │   ├── endpoints
│   │   │   │   │   ├── EndpointRuleObject.js
│   │   │   │   │   ├── ErrorRuleObject.js
│   │   │   │   │   ├── RuleSetObject.js
│   │   │   │   │   ├── TreeRuleObject.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── shared.js
│   │   │   │   ├── eventStream.js
│   │   │   │   ├── extensions
│   │   │   │   │   ├── checksum.js
│   │   │   │   │   ├── defaultClientConfiguration.js
│   │   │   │   │   ├── defaultExtensionConfiguration.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── retry.js
│   │   │   │   ├── externals-check
│   │   │   │   │   └── browser-externals-check.js
│   │   │   │   ├── feature-ids.js
│   │   │   │   ├── http
│   │   │   │   │   └── httpHandlerInitialization.js
│   │   │   │   ├── http.js
│   │   │   │   ├── identity
│   │   │   │   │   ├── apiKeyIdentity.js
│   │   │   │   │   ├── awsCredentialIdentity.js
│   │   │   │   │   ├── identity.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── tokenIdentity.js
│   │   │   │   ├── index.js
│   │   │   │   ├── logger.js
│   │   │   │   ├── middleware.js
│   │   │   │   ├── pagination.js
│   │   │   │   ├── profile.js
│   │   │   │   ├── response.js
│   │   │   │   ├── retry.js
│   │   │   │   ├── serde.js
│   │   │   │   ├── shapes.js
│   │   │   │   ├── signature.js
│   │   │   │   ├── stream.js
│   │   │   │   ├── streaming-payload
│   │   │   │   │   ├── streaming-blob-common-types.js
│   │   │   │   │   ├── streaming-blob-payload-input-types.js
│   │   │   │   │   └── streaming-blob-payload-output-types.js
│   │   │   │   ├── transfer.js
│   │   │   │   ├── transform
│   │   │   │   │   ├── client-method-transforms.js
│   │   │   │   │   ├── client-payload-blob-type-narrow.js
│   │   │   │   │   ├── exact.js
│   │   │   │   │   ├── no-undefined.js
│   │   │   │   │   └── type-transform.js
│   │   │   │   ├── uri.js
│   │   │   │   ├── util.js
│   │   │   │   └── waiter.js
│   │   │   ├── dist-es
│   │   │   │   ├── abort-handler.js
│   │   │   │   ├── abort.js
│   │   │   │   ├── auth
│   │   │   │   │   ├── HttpApiKeyAuth.js
│   │   │   │   │   ├── HttpAuthScheme.js
│   │   │   │   │   ├── HttpAuthSchemeProvider.js
│   │   │   │   │   ├── HttpSigner.js
│   │   │   │   │   ├── IdentityProviderConfig.js
│   │   │   │   │   ├── auth.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── blob
│   │   │   │   │   └── blob-payload-input-types.js
│   │   │   │   ├── checksum.js
│   │   │   │   ├── client.js
│   │   │   │   ├── command.js
│   │   │   │   ├── connection
│   │   │   │   │   ├── config.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── manager.js
│   │   │   │   │   └── pool.js
│   │   │   │   ├── crypto.js
│   │   │   │   ├── downlevel-ts3.4
│   │   │   │   │   └── transform
│   │   │   │   │       └── type-transform.js
│   │   │   │   ├── encode.js
│   │   │   │   ├── endpoint.js
│   │   │   │   ├── endpoints
│   │   │   │   │   ├── EndpointRuleObject.js
│   │   │   │   │   ├── ErrorRuleObject.js
│   │   │   │   │   ├── RuleSetObject.js
│   │   │   │   │   ├── TreeRuleObject.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── shared.js
│   │   │   │   ├── eventStream.js
│   │   │   │   ├── extensions
│   │   │   │   │   ├── checksum.js
│   │   │   │   │   ├── defaultClientConfiguration.js
│   │   │   │   │   ├── defaultExtensionConfiguration.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── retry.js
│   │   │   │   ├── externals-check
│   │   │   │   │   └── browser-externals-check.js
│   │   │   │   ├── feature-ids.js
│   │   │   │   ├── http
│   │   │   │   │   └── httpHandlerInitialization.js
│   │   │   │   ├── http.js
│   │   │   │   ├── identity
│   │   │   │   │   ├── apiKeyIdentity.js
│   │   │   │   │   ├── awsCredentialIdentity.js
│   │   │   │   │   ├── identity.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── tokenIdentity.js
│   │   │   │   ├── index.js
│   │   │   │   ├── logger.js
│   │   │   │   ├── middleware.js
│   │   │   │   ├── pagination.js
│   │   │   │   ├── profile.js
│   │   │   │   ├── response.js
│   │   │   │   ├── retry.js
│   │   │   │   ├── serde.js
│   │   │   │   ├── shapes.js
│   │   │   │   ├── signature.js
│   │   │   │   ├── stream.js
│   │   │   │   ├── streaming-payload
│   │   │   │   │   ├── streaming-blob-common-types.js
│   │   │   │   │   ├── streaming-blob-payload-input-types.js
│   │   │   │   │   └── streaming-blob-payload-output-types.js
│   │   │   │   ├── transfer.js
│   │   │   │   ├── transform
│   │   │   │   │   ├── client-method-transforms.js
│   │   │   │   │   ├── client-payload-blob-type-narrow.js
│   │   │   │   │   ├── exact.js
│   │   │   │   │   ├── no-undefined.js
│   │   │   │   │   └── type-transform.js
│   │   │   │   ├── uri.js
│   │   │   │   ├── util.js
│   │   │   │   └── waiter.js
│   │   │   ├── dist-types
│   │   │   │   ├── abort-handler.d.ts
│   │   │   │   ├── abort.d.ts
│   │   │   │   ├── auth
│   │   │   │   │   ├── HttpApiKeyAuth.d.ts
│   │   │   │   │   ├── HttpAuthScheme.d.ts
│   │   │   │   │   ├── HttpAuthSchemeProvider.d.ts
│   │   │   │   │   ├── HttpSigner.d.ts
│   │   │   │   │   ├── IdentityProviderConfig.d.ts
│   │   │   │   │   ├── auth.d.ts
│   │   │   │   │   └── index.d.ts
│   │   │   │   ├── blob
│   │   │   │   │   └── blob-payload-input-types.d.ts
│   │   │   │   ├── checksum.d.ts
│   │   │   │   ├── client.d.ts
│   │   │   │   ├── command.d.ts
│   │   │   │   ├── connection
│   │   │   │   │   ├── config.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── manager.d.ts
│   │   │   │   │   └── pool.d.ts
│   │   │   │   ├── crypto.d.ts
│   │   │   │   ├── downlevel-ts3.4
│   │   │   │   │   └── transform
│   │   │   │   │       └── type-transform.d.ts
│   │   │   │   ├── encode.d.ts
│   │   │   │   ├── endpoint.d.ts
│   │   │   │   ├── endpoints
│   │   │   │   │   ├── EndpointRuleObject.d.ts
│   │   │   │   │   ├── ErrorRuleObject.d.ts
│   │   │   │   │   ├── RuleSetObject.d.ts
│   │   │   │   │   ├── TreeRuleObject.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   └── shared.d.ts
│   │   │   │   ├── eventStream.d.ts
│   │   │   │   ├── extensions
│   │   │   │   │   ├── checksum.d.ts
│   │   │   │   │   ├── defaultClientConfiguration.d.ts
│   │   │   │   │   ├── defaultExtensionConfiguration.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   └── retry.d.ts
│   │   │   │   ├── externals-check
│   │   │   │   │   └── browser-externals-check.d.ts
│   │   │   │   ├── feature-ids.d.ts
│   │   │   │   ├── http
│   │   │   │   │   └── httpHandlerInitialization.d.ts
│   │   │   │   ├── http.d.ts
│   │   │   │   ├── identity
│   │   │   │   │   ├── apiKeyIdentity.d.ts
│   │   │   │   │   ├── awsCredentialIdentity.d.ts
│   │   │   │   │   ├── identity.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   └── tokenIdentity.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── logger.d.ts
│   │   │   │   ├── middleware.d.ts
│   │   │   │   ├── pagination.d.ts
│   │   │   │   ├── profile.d.ts
│   │   │   │   ├── response.d.ts
│   │   │   │   ├── retry.d.ts
│   │   │   │   ├── serde.d.ts
│   │   │   │   ├── shapes.d.ts
│   │   │   │   ├── signature.d.ts
│   │   │   │   ├── stream.d.ts
│   │   │   │   ├── streaming-payload
│   │   │   │   │   ├── streaming-blob-common-types.d.ts
│   │   │   │   │   ├── streaming-blob-payload-input-types.d.ts
│   │   │   │   │   └── streaming-blob-payload-output-types.d.ts
│   │   │   │   ├── transfer.d.ts
│   │   │   │   ├── transform
│   │   │   │   │   ├── client-method-transforms.d.ts
│   │   │   │   │   ├── client-payload-blob-type-narrow.d.ts
│   │   │   │   │   ├── exact.d.ts
│   │   │   │   │   ├── no-undefined.d.ts
│   │   │   │   │   └── type-transform.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── abort-handler.d.ts
│   │   │   │   │   ├── abort.d.ts
│   │   │   │   │   ├── auth
│   │   │   │   │   │   ├── HttpApiKeyAuth.d.ts
│   │   │   │   │   │   ├── HttpAuthScheme.d.ts
│   │   │   │   │   │   ├── HttpAuthSchemeProvider.d.ts
│   │   │   │   │   │   ├── HttpSigner.d.ts
│   │   │   │   │   │   ├── IdentityProviderConfig.d.ts
│   │   │   │   │   │   ├── auth.d.ts
│   │   │   │   │   │   └── index.d.ts
│   │   │   │   │   ├── blob
│   │   │   │   │   │   └── blob-payload-input-types.d.ts
│   │   │   │   │   ├── checksum.d.ts
│   │   │   │   │   ├── client.d.ts
│   │   │   │   │   ├── command.d.ts
│   │   │   │   │   ├── connection
│   │   │   │   │   │   ├── config.d.ts
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── manager.d.ts
│   │   │   │   │   │   └── pool.d.ts
│   │   │   │   │   ├── crypto.d.ts
│   │   │   │   │   ├── downlevel-ts3.4
│   │   │   │   │   │   └── transform
│   │   │   │   │   │       └── type-transform.d.ts
│   │   │   │   │   ├── encode.d.ts
│   │   │   │   │   ├── endpoint.d.ts
│   │   │   │   │   ├── endpoints
│   │   │   │   │   │   ├── EndpointRuleObject.d.ts
│   │   │   │   │   │   ├── ErrorRuleObject.d.ts
│   │   │   │   │   │   ├── RuleSetObject.d.ts
│   │   │   │   │   │   ├── TreeRuleObject.d.ts
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   └── shared.d.ts
│   │   │   │   │   ├── eventStream.d.ts
│   │   │   │   │   ├── extensions
│   │   │   │   │   │   ├── checksum.d.ts
│   │   │   │   │   │   ├── defaultClientConfiguration.d.ts
│   │   │   │   │   │   ├── defaultExtensionConfiguration.d.ts
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   └── retry.d.ts
│   │   │   │   │   ├── externals-check
│   │   │   │   │   │   └── browser-externals-check.d.ts
│   │   │   │   │   ├── feature-ids.d.ts
│   │   │   │   │   ├── http
│   │   │   │   │   │   └── httpHandlerInitialization.d.ts
│   │   │   │   │   ├── http.d.ts
│   │   │   │   │   ├── identity
│   │   │   │   │   │   ├── apiKeyIdentity.d.ts
│   │   │   │   │   │   ├── awsCredentialIdentity.d.ts
│   │   │   │   │   │   ├── identity.d.ts
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   └── tokenIdentity.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── logger.d.ts
│   │   │   │   │   ├── middleware.d.ts
│   │   │   │   │   ├── pagination.d.ts
│   │   │   │   │   ├── profile.d.ts
│   │   │   │   │   ├── response.d.ts
│   │   │   │   │   ├── retry.d.ts
│   │   │   │   │   ├── serde.d.ts
│   │   │   │   │   ├── shapes.d.ts
│   │   │   │   │   ├── signature.d.ts
│   │   │   │   │   ├── stream.d.ts
│   │   │   │   │   ├── streaming-payload
│   │   │   │   │   │   ├── streaming-blob-common-types.d.ts
│   │   │   │   │   │   ├── streaming-blob-payload-input-types.d.ts
│   │   │   │   │   │   └── streaming-blob-payload-output-types.d.ts
│   │   │   │   │   ├── transfer.d.ts
│   │   │   │   │   ├── transform
│   │   │   │   │   │   ├── client-method-transforms.d.ts
│   │   │   │   │   │   ├── client-payload-blob-type-narrow.d.ts
│   │   │   │   │   │   ├── exact.d.ts
│   │   │   │   │   │   ├── no-undefined.d.ts
│   │   │   │   │   │   └── type-transform.d.ts
│   │   │   │   │   ├── uri.d.ts
│   │   │   │   │   ├── util.d.ts
│   │   │   │   │   └── waiter.d.ts
│   │   │   │   ├── uri.d.ts
│   │   │   │   ├── util.d.ts
│   │   │   │   └── waiter.d.ts
│   │   │   └── package.json
│   │   ├── url-parser
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── util-base64
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── constants.browser.js
│   │   │   │   ├── fromBase64.browser.js
│   │   │   │   ├── fromBase64.js
│   │   │   │   ├── index.js
│   │   │   │   ├── toBase64.browser.js
│   │   │   │   └── toBase64.js
│   │   │   ├── dist-es
│   │   │   │   ├── constants.browser.js
│   │   │   │   ├── fromBase64.browser.js
│   │   │   │   ├── fromBase64.js
│   │   │   │   ├── index.js
│   │   │   │   ├── toBase64.browser.js
│   │   │   │   └── toBase64.js
│   │   │   ├── dist-types
│   │   │   │   ├── constants.browser.d.ts
│   │   │   │   ├── fromBase64.browser.d.ts
│   │   │   │   ├── fromBase64.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── toBase64.browser.d.ts
│   │   │   │   ├── toBase64.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── constants.browser.d.ts
│   │   │   │       ├── fromBase64.browser.d.ts
│   │   │   │       ├── fromBase64.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── toBase64.browser.d.ts
│   │   │   │       └── toBase64.d.ts
│   │   │   └── package.json
│   │   ├── util-body-length-browser
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── calculateBodyLength.js
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── calculateBodyLength.js
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── calculateBodyLength.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── calculateBodyLength.d.ts
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── util-body-length-node
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── calculateBodyLength.js
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── calculateBodyLength.js
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── calculateBodyLength.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── calculateBodyLength.d.ts
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── util-buffer-from
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── util-config-provider
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── booleanSelector.js
│   │   │   │   ├── index.js
│   │   │   │   ├── numberSelector.js
│   │   │   │   └── types.js
│   │   │   ├── dist-es
│   │   │   │   ├── booleanSelector.js
│   │   │   │   ├── index.js
│   │   │   │   ├── numberSelector.js
│   │   │   │   └── types.js
│   │   │   ├── dist-types
│   │   │   │   ├── booleanSelector.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── numberSelector.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── booleanSelector.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── numberSelector.d.ts
│   │   │   │   │   └── types.d.ts
│   │   │   │   └── types.d.ts
│   │   │   └── package.json
│   │   ├── util-defaults-mode-browser
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── constants.js
│   │   │   │   ├── index.js
│   │   │   │   ├── resolveDefaultsModeConfig.js
│   │   │   │   └── resolveDefaultsModeConfig.native.js
│   │   │   ├── dist-es
│   │   │   │   ├── constants.js
│   │   │   │   ├── index.js
│   │   │   │   ├── resolveDefaultsModeConfig.js
│   │   │   │   └── resolveDefaultsModeConfig.native.js
│   │   │   ├── dist-types
│   │   │   │   ├── constants.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── resolveDefaultsModeConfig.d.ts
│   │   │   │   ├── resolveDefaultsModeConfig.native.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── constants.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── resolveDefaultsModeConfig.d.ts
│   │   │   │       └── resolveDefaultsModeConfig.native.d.ts
│   │   │   └── package.json
│   │   ├── util-defaults-mode-node
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── constants.js
│   │   │   │   ├── defaultsModeConfig.js
│   │   │   │   ├── index.js
│   │   │   │   └── resolveDefaultsModeConfig.js
│   │   │   ├── dist-es
│   │   │   │   ├── constants.js
│   │   │   │   ├── defaultsModeConfig.js
│   │   │   │   ├── index.js
│   │   │   │   └── resolveDefaultsModeConfig.js
│   │   │   ├── dist-types
│   │   │   │   ├── constants.d.ts
│   │   │   │   ├── defaultsModeConfig.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── resolveDefaultsModeConfig.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── constants.d.ts
│   │   │   │       ├── defaultsModeConfig.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       └── resolveDefaultsModeConfig.d.ts
│   │   │   └── package.json
│   │   ├── util-endpoints
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── cache
│   │   │   │   │   └── EndpointCache.js
│   │   │   │   ├── debug
│   │   │   │   │   ├── debugId.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── toDebugString.js
│   │   │   │   ├── getEndpointUrlConfig.js
│   │   │   │   ├── index.js
│   │   │   │   ├── lib
│   │   │   │   │   ├── booleanEquals.js
│   │   │   │   │   ├── getAttr.js
│   │   │   │   │   ├── getAttrPathList.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── isIpAddress.js
│   │   │   │   │   ├── isSet.js
│   │   │   │   │   ├── isValidHostLabel.js
│   │   │   │   │   ├── not.js
│   │   │   │   │   ├── parseURL.js
│   │   │   │   │   ├── stringEquals.js
│   │   │   │   │   ├── substring.js
│   │   │   │   │   └── uriEncode.js
│   │   │   │   ├── resolveEndpoint.js
│   │   │   │   ├── types
│   │   │   │   │   ├── EndpointError.js
│   │   │   │   │   ├── EndpointFunctions.js
│   │   │   │   │   ├── EndpointRuleObject.js
│   │   │   │   │   ├── ErrorRuleObject.js
│   │   │   │   │   ├── RuleSetObject.js
│   │   │   │   │   ├── TreeRuleObject.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── shared.js
│   │   │   │   └── utils
│   │   │   │       ├── callFunction.js
│   │   │   │       ├── customEndpointFunctions.js
│   │   │   │       ├── endpointFunctions.js
│   │   │   │       ├── evaluateCondition.js
│   │   │   │       ├── evaluateConditions.js
│   │   │   │       ├── evaluateEndpointRule.js
│   │   │   │       ├── evaluateErrorRule.js
│   │   │   │       ├── evaluateExpression.js
│   │   │   │       ├── evaluateRules.js
│   │   │   │       ├── evaluateTemplate.js
│   │   │   │       ├── evaluateTreeRule.js
│   │   │   │       ├── getEndpointHeaders.js
│   │   │   │       ├── getEndpointProperties.js
│   │   │   │       ├── getEndpointProperty.js
│   │   │   │       ├── getEndpointUrl.js
│   │   │   │       ├── getReferenceValue.js
│   │   │   │       └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── cache
│   │   │   │   │   └── EndpointCache.js
│   │   │   │   ├── debug
│   │   │   │   │   ├── debugId.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── toDebugString.js
│   │   │   │   ├── getEndpointUrlConfig.js
│   │   │   │   ├── index.js
│   │   │   │   ├── lib
│   │   │   │   │   ├── booleanEquals.js
│   │   │   │   │   ├── getAttr.js
│   │   │   │   │   ├── getAttrPathList.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── isIpAddress.js
│   │   │   │   │   ├── isSet.js
│   │   │   │   │   ├── isValidHostLabel.js
│   │   │   │   │   ├── not.js
│   │   │   │   │   ├── parseURL.js
│   │   │   │   │   ├── stringEquals.js
│   │   │   │   │   ├── substring.js
│   │   │   │   │   └── uriEncode.js
│   │   │   │   ├── resolveEndpoint.js
│   │   │   │   ├── types
│   │   │   │   │   ├── EndpointError.js
│   │   │   │   │   ├── EndpointFunctions.js
│   │   │   │   │   ├── EndpointRuleObject.js
│   │   │   │   │   ├── ErrorRuleObject.js
│   │   │   │   │   ├── RuleSetObject.js
│   │   │   │   │   ├── TreeRuleObject.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── shared.js
│   │   │   │   └── utils
│   │   │   │       ├── callFunction.js
│   │   │   │       ├── customEndpointFunctions.js
│   │   │   │       ├── endpointFunctions.js
│   │   │   │       ├── evaluateCondition.js
│   │   │   │       ├── evaluateConditions.js
│   │   │   │       ├── evaluateEndpointRule.js
│   │   │   │       ├── evaluateErrorRule.js
│   │   │   │       ├── evaluateExpression.js
│   │   │   │       ├── evaluateRules.js
│   │   │   │       ├── evaluateTemplate.js
│   │   │   │       ├── evaluateTreeRule.js
│   │   │   │       ├── getEndpointHeaders.js
│   │   │   │       ├── getEndpointProperties.js
│   │   │   │       ├── getEndpointProperty.js
│   │   │   │       ├── getEndpointUrl.js
│   │   │   │       ├── getReferenceValue.js
│   │   │   │       └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── cache
│   │   │   │   │   └── EndpointCache.d.ts
│   │   │   │   ├── debug
│   │   │   │   │   ├── debugId.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   └── toDebugString.d.ts
│   │   │   │   ├── getEndpointUrlConfig.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── lib
│   │   │   │   │   ├── booleanEquals.d.ts
│   │   │   │   │   ├── getAttr.d.ts
│   │   │   │   │   ├── getAttrPathList.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── isIpAddress.d.ts
│   │   │   │   │   ├── isSet.d.ts
│   │   │   │   │   ├── isValidHostLabel.d.ts
│   │   │   │   │   ├── not.d.ts
│   │   │   │   │   ├── parseURL.d.ts
│   │   │   │   │   ├── stringEquals.d.ts
│   │   │   │   │   ├── substring.d.ts
│   │   │   │   │   └── uriEncode.d.ts
│   │   │   │   ├── resolveEndpoint.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── cache
│   │   │   │   │   │   └── EndpointCache.d.ts
│   │   │   │   │   ├── debug
│   │   │   │   │   │   ├── debugId.d.ts
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   └── toDebugString.d.ts
│   │   │   │   │   ├── getEndpointUrlConfig.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── lib
│   │   │   │   │   │   ├── booleanEquals.d.ts
│   │   │   │   │   │   ├── getAttr.d.ts
│   │   │   │   │   │   ├── getAttrPathList.d.ts
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── isIpAddress.d.ts
│   │   │   │   │   │   ├── isSet.d.ts
│   │   │   │   │   │   ├── isValidHostLabel.d.ts
│   │   │   │   │   │   ├── not.d.ts
│   │   │   │   │   │   ├── parseURL.d.ts
│   │   │   │   │   │   ├── stringEquals.d.ts
│   │   │   │   │   │   ├── substring.d.ts
│   │   │   │   │   │   └── uriEncode.d.ts
│   │   │   │   │   ├── resolveEndpoint.d.ts
│   │   │   │   │   ├── types
│   │   │   │   │   │   ├── EndpointError.d.ts
│   │   │   │   │   │   ├── EndpointFunctions.d.ts
│   │   │   │   │   │   ├── EndpointRuleObject.d.ts
│   │   │   │   │   │   ├── ErrorRuleObject.d.ts
│   │   │   │   │   │   ├── RuleSetObject.d.ts
│   │   │   │   │   │   ├── TreeRuleObject.d.ts
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   └── shared.d.ts
│   │   │   │   │   └── utils
│   │   │   │   │       ├── callFunction.d.ts
│   │   │   │   │       ├── customEndpointFunctions.d.ts
│   │   │   │   │       ├── endpointFunctions.d.ts
│   │   │   │   │       ├── evaluateCondition.d.ts
│   │   │   │   │       ├── evaluateConditions.d.ts
│   │   │   │   │       ├── evaluateEndpointRule.d.ts
│   │   │   │   │       ├── evaluateErrorRule.d.ts
│   │   │   │   │       ├── evaluateExpression.d.ts
│   │   │   │   │       ├── evaluateRules.d.ts
│   │   │   │   │       ├── evaluateTemplate.d.ts
│   │   │   │   │       ├── evaluateTreeRule.d.ts
│   │   │   │   │       ├── getEndpointHeaders.d.ts
│   │   │   │   │       ├── getEndpointProperties.d.ts
│   │   │   │   │       ├── getEndpointProperty.d.ts
│   │   │   │   │       ├── getEndpointUrl.d.ts
│   │   │   │   │       ├── getReferenceValue.d.ts
│   │   │   │   │       └── index.d.ts
│   │   │   │   ├── types
│   │   │   │   │   ├── EndpointError.d.ts
│   │   │   │   │   ├── EndpointFunctions.d.ts
│   │   │   │   │   ├── EndpointRuleObject.d.ts
│   │   │   │   │   ├── ErrorRuleObject.d.ts
│   │   │   │   │   ├── RuleSetObject.d.ts
│   │   │   │   │   ├── TreeRuleObject.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   └── shared.d.ts
│   │   │   │   └── utils
│   │   │   │       ├── callFunction.d.ts
│   │   │   │       ├── customEndpointFunctions.d.ts
│   │   │   │       ├── endpointFunctions.d.ts
│   │   │   │       ├── evaluateCondition.d.ts
│   │   │   │       ├── evaluateConditions.d.ts
│   │   │   │       ├── evaluateEndpointRule.d.ts
│   │   │   │       ├── evaluateErrorRule.d.ts
│   │   │   │       ├── evaluateExpression.d.ts
│   │   │   │       ├── evaluateRules.d.ts
│   │   │   │       ├── evaluateTemplate.d.ts
│   │   │   │       ├── evaluateTreeRule.d.ts
│   │   │   │       ├── getEndpointHeaders.d.ts
│   │   │   │       ├── getEndpointProperties.d.ts
│   │   │   │       ├── getEndpointProperty.d.ts
│   │   │   │       ├── getEndpointUrl.d.ts
│   │   │   │       ├── getReferenceValue.d.ts
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── util-hex-encoding
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── util-middleware
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── getSmithyContext.js
│   │   │   │   ├── index.js
│   │   │   │   └── normalizeProvider.js
│   │   │   ├── dist-es
│   │   │   │   ├── getSmithyContext.js
│   │   │   │   ├── index.js
│   │   │   │   └── normalizeProvider.js
│   │   │   ├── dist-types
│   │   │   │   ├── getSmithyContext.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── normalizeProvider.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── getSmithyContext.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       └── normalizeProvider.d.ts
│   │   │   └── package.json
│   │   ├── util-retry
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── AdaptiveRetryStrategy.js
│   │   │   │   ├── ConfiguredRetryStrategy.js
│   │   │   │   ├── DefaultRateLimiter.js
│   │   │   │   ├── StandardRetryStrategy.js
│   │   │   │   ├── config.js
│   │   │   │   ├── constants.js
│   │   │   │   ├── defaultRetryBackoffStrategy.js
│   │   │   │   ├── defaultRetryToken.js
│   │   │   │   ├── index.js
│   │   │   │   └── types.js
│   │   │   ├── dist-es
│   │   │   │   ├── AdaptiveRetryStrategy.js
│   │   │   │   ├── ConfiguredRetryStrategy.js
│   │   │   │   ├── DefaultRateLimiter.js
│   │   │   │   ├── StandardRetryStrategy.js
│   │   │   │   ├── config.js
│   │   │   │   ├── constants.js
│   │   │   │   ├── defaultRetryBackoffStrategy.js
│   │   │   │   ├── defaultRetryToken.js
│   │   │   │   ├── index.js
│   │   │   │   └── types.js
│   │   │   ├── dist-types
│   │   │   │   ├── AdaptiveRetryStrategy.d.ts
│   │   │   │   ├── ConfiguredRetryStrategy.d.ts
│   │   │   │   ├── DefaultRateLimiter.d.ts
│   │   │   │   ├── StandardRetryStrategy.d.ts
│   │   │   │   ├── config.d.ts
│   │   │   │   ├── constants.d.ts
│   │   │   │   ├── defaultRetryBackoffStrategy.d.ts
│   │   │   │   ├── defaultRetryToken.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── ts3.4
│   │   │   │   │   ├── AdaptiveRetryStrategy.d.ts
│   │   │   │   │   ├── ConfiguredRetryStrategy.d.ts
│   │   │   │   │   ├── DefaultRateLimiter.d.ts
│   │   │   │   │   ├── StandardRetryStrategy.d.ts
│   │   │   │   │   ├── config.d.ts
│   │   │   │   │   ├── constants.d.ts
│   │   │   │   │   ├── defaultRetryBackoffStrategy.d.ts
│   │   │   │   │   ├── defaultRetryToken.d.ts
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   └── types.d.ts
│   │   │   │   └── types.d.ts
│   │   │   └── package.json
│   │   ├── util-stream
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── blob
│   │   │   │   │   ├── Uint8ArrayBlobAdapter.js
│   │   │   │   │   └── transforms.js
│   │   │   │   ├── checksum
│   │   │   │   │   ├── ChecksumStream.browser.js
│   │   │   │   │   ├── ChecksumStream.js
│   │   │   │   │   ├── createChecksumStream.browser.js
│   │   │   │   │   └── createChecksumStream.js
│   │   │   │   ├── getAwsChunkedEncodingStream.browser.js
│   │   │   │   ├── getAwsChunkedEncodingStream.js
│   │   │   │   ├── headStream.browser.js
│   │   │   │   ├── headStream.js
│   │   │   │   ├── index.js
│   │   │   │   ├── sdk-stream-mixin.browser.js
│   │   │   │   ├── sdk-stream-mixin.js
│   │   │   │   ├── splitStream.browser.js
│   │   │   │   ├── splitStream.js
│   │   │   │   └── stream-type-check.js
│   │   │   ├── dist-es
│   │   │   │   ├── blob
│   │   │   │   │   ├── Uint8ArrayBlobAdapter.js
│   │   │   │   │   └── transforms.js
│   │   │   │   ├── checksum
│   │   │   │   │   ├── ChecksumStream.browser.js
│   │   │   │   │   ├── ChecksumStream.js
│   │   │   │   │   ├── createChecksumStream.browser.js
│   │   │   │   │   └── createChecksumStream.js
│   │   │   │   ├── getAwsChunkedEncodingStream.browser.js
│   │   │   │   ├── getAwsChunkedEncodingStream.js
│   │   │   │   ├── headStream.browser.js
│   │   │   │   ├── headStream.js
│   │   │   │   ├── index.js
│   │   │   │   ├── sdk-stream-mixin.browser.js
│   │   │   │   ├── sdk-stream-mixin.js
│   │   │   │   ├── splitStream.browser.js
│   │   │   │   ├── splitStream.js
│   │   │   │   └── stream-type-check.js
│   │   │   ├── dist-types
│   │   │   │   ├── blob
│   │   │   │   │   ├── Uint8ArrayBlobAdapter.d.ts
│   │   │   │   │   └── transforms.d.ts
│   │   │   │   ├── checksum
│   │   │   │   │   ├── ChecksumStream.browser.d.ts
│   │   │   │   │   ├── ChecksumStream.d.ts
│   │   │   │   │   ├── createChecksumStream.browser.d.ts
│   │   │   │   │   └── createChecksumStream.d.ts
│   │   │   │   ├── getAwsChunkedEncodingStream.browser.d.ts
│   │   │   │   ├── getAwsChunkedEncodingStream.d.ts
│   │   │   │   ├── headStream.browser.d.ts
│   │   │   │   ├── headStream.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── sdk-stream-mixin.browser.d.ts
│   │   │   │   ├── sdk-stream-mixin.d.ts
│   │   │   │   ├── splitStream.browser.d.ts
│   │   │   │   ├── splitStream.d.ts
│   │   │   │   ├── stream-type-check.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── blob
│   │   │   │       │   ├── Uint8ArrayBlobAdapter.d.ts
│   │   │   │       │   └── transforms.d.ts
│   │   │   │       ├── checksum
│   │   │   │       │   ├── ChecksumStream.browser.d.ts
│   │   │   │       │   ├── ChecksumStream.d.ts
│   │   │   │       │   ├── createChecksumStream.browser.d.ts
│   │   │   │       │   └── createChecksumStream.d.ts
│   │   │   │       ├── getAwsChunkedEncodingStream.browser.d.ts
│   │   │   │       ├── getAwsChunkedEncodingStream.d.ts
│   │   │   │       ├── headStream.browser.d.ts
│   │   │   │       ├── headStream.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── sdk-stream-mixin.browser.d.ts
│   │   │   │       ├── sdk-stream-mixin.d.ts
│   │   │   │       ├── splitStream.browser.d.ts
│   │   │   │       ├── splitStream.d.ts
│   │   │   │       └── stream-type-check.d.ts
│   │   │   └── package.json
│   │   ├── util-uri-escape
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── escape-uri-path.js
│   │   │   │   ├── escape-uri.js
│   │   │   │   └── index.js
│   │   │   ├── dist-es
│   │   │   │   ├── escape-uri-path.js
│   │   │   │   ├── escape-uri.js
│   │   │   │   └── index.js
│   │   │   ├── dist-types
│   │   │   │   ├── escape-uri-path.d.ts
│   │   │   │   ├── escape-uri.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── escape-uri-path.d.ts
│   │   │   │       ├── escape-uri.d.ts
│   │   │   │       └── index.d.ts
│   │   │   └── package.json
│   │   ├── util-utf8
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist-cjs
│   │   │   │   ├── fromUtf8.browser.js
│   │   │   │   ├── fromUtf8.js
│   │   │   │   ├── index.js
│   │   │   │   ├── toUint8Array.js
│   │   │   │   ├── toUtf8.browser.js
│   │   │   │   └── toUtf8.js
│   │   │   ├── dist-es
│   │   │   │   ├── fromUtf8.browser.js
│   │   │   │   ├── fromUtf8.js
│   │   │   │   ├── index.js
│   │   │   │   ├── toUint8Array.js
│   │   │   │   ├── toUtf8.browser.js
│   │   │   │   └── toUtf8.js
│   │   │   ├── dist-types
│   │   │   │   ├── fromUtf8.browser.d.ts
│   │   │   │   ├── fromUtf8.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── toUint8Array.d.ts
│   │   │   │   ├── toUtf8.browser.d.ts
│   │   │   │   ├── toUtf8.d.ts
│   │   │   │   └── ts3.4
│   │   │   │       ├── fromUtf8.browser.d.ts
│   │   │   │       ├── fromUtf8.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── toUint8Array.d.ts
│   │   │   │       ├── toUtf8.browser.d.ts
│   │   │   │       └── toUtf8.d.ts
│   │   │   └── package.json
│   │   └── util-waiter
│   │       ├── LICENSE
│   │       ├── README.md
│   │       ├── dist-cjs
│   │       │   ├── createWaiter.js
│   │       │   ├── index.js
│   │       │   ├── poller.js
│   │       │   ├── utils
│   │       │   │   ├── index.js
│   │       │   │   ├── sleep.js
│   │       │   │   └── validate.js
│   │       │   └── waiter.js
│   │       ├── dist-es
│   │       │   ├── createWaiter.js
│   │       │   ├── index.js
│   │       │   ├── poller.js
│   │       │   ├── utils
│   │       │   │   ├── index.js
│   │       │   │   ├── sleep.js
│   │       │   │   └── validate.js
│   │       │   └── waiter.js
│   │       ├── dist-types
│   │       │   ├── createWaiter.d.ts
│   │       │   ├── index.d.ts
│   │       │   ├── poller.d.ts
│   │       │   ├── ts3.4
│   │       │   │   ├── createWaiter.d.ts
│   │       │   │   ├── index.d.ts
│   │       │   │   ├── poller.d.ts
│   │       │   │   ├── utils
│   │       │   │   │   ├── index.d.ts
│   │       │   │   │   ├── sleep.d.ts
│   │       │   │   │   └── validate.d.ts
│   │       │   │   └── waiter.d.ts
│   │       │   ├── utils
│   │       │   │   ├── index.d.ts
│   │       │   │   ├── sleep.d.ts
│   │       │   │   └── validate.d.ts
│   │       │   └── waiter.d.ts
│   │       └── package.json
│   ├── @tsconfig
│   │   ├── node10
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── package.json
│   │   │   └── tsconfig.json
│   │   ├── node12
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── package.json
│   │   │   └── tsconfig.json
│   │   ├── node14
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── package.json
│   │   │   └── tsconfig.json
│   │   └── node16
│   │       ├── LICENSE
│   │       ├── README.md
│   │       ├── package.json
│   │       └── tsconfig.json
│   ├── @types
│   │   ├── ffmpeg-static
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── index.d.ts
│   │   │   └── package.json
│   │   ├── json-schema
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── index.d.ts
│   │   │   └── package.json
│   │   ├── node
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── assert
│   │   │   │   └── strict.d.ts
│   │   │   ├── assert.d.ts
│   │   │   ├── async_hooks.d.ts
│   │   │   ├── buffer.buffer.d.ts
│   │   │   ├── buffer.d.ts
│   │   │   ├── child_process.d.ts
│   │   │   ├── cluster.d.ts
│   │   │   ├── compatibility
│   │   │   │   ├── disposable.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── indexable.d.ts
│   │   │   │   └── iterators.d.ts
│   │   │   ├── console.d.ts
│   │   │   ├── constants.d.ts
│   │   │   ├── crypto.d.ts
│   │   │   ├── dgram.d.ts
│   │   │   ├── diagnostics_channel.d.ts
│   │   │   ├── dns
│   │   │   │   └── promises.d.ts
│   │   │   ├── dns.d.ts
│   │   │   ├── dom-events.d.ts
│   │   │   ├── domain.d.ts
│   │   │   ├── events.d.ts
│   │   │   ├── fs
│   │   │   │   └── promises.d.ts
│   │   │   ├── fs.d.ts
│   │   │   ├── globals.d.ts
│   │   │   ├── globals.typedarray.d.ts
│   │   │   ├── http.d.ts
│   │   │   ├── http2.d.ts
│   │   │   ├── https.d.ts
│   │   │   ├── index.d.ts
│   │   │   ├── inspector.d.ts
│   │   │   ├── module.d.ts
│   │   │   ├── net.d.ts
│   │   │   ├── os.d.ts
│   │   │   ├── package.json
│   │   │   ├── path.d.ts
│   │   │   ├── perf_hooks.d.ts
│   │   │   ├── process.d.ts
│   │   │   ├── punycode.d.ts
│   │   │   ├── querystring.d.ts
│   │   │   ├── readline
│   │   │   │   └── promises.d.ts
│   │   │   ├── readline.d.ts
│   │   │   ├── repl.d.ts
│   │   │   ├── stream
│   │   │   │   ├── consumers.d.ts
│   │   │   │   ├── promises.d.ts
│   │   │   │   └── web.d.ts
│   │   │   ├── stream.d.ts
│   │   │   ├── string_decoder.d.ts
│   │   │   ├── test.d.ts
│   │   │   ├── timers
│   │   │   │   └── promises.d.ts
│   │   │   ├── timers.d.ts
│   │   │   ├── tls.d.ts
│   │   │   ├── trace_events.d.ts
│   │   │   ├── ts5.6
│   │   │   │   ├── buffer.buffer.d.ts
│   │   │   │   ├── globals.typedarray.d.ts
│   │   │   │   └── index.d.ts
│   │   │   ├── tty.d.ts
│   │   │   ├── url.d.ts
│   │   │   ├── util.d.ts
│   │   │   ├── v8.d.ts
│   │   │   ├── vm.d.ts
│   │   │   ├── wasi.d.ts
│   │   │   ├── worker_threads.d.ts
│   │   │   └── zlib.d.ts
│   │   ├── semver
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── classes
│   │   │   │   ├── comparator.d.ts
│   │   │   │   ├── range.d.ts
│   │   │   │   └── semver.d.ts
│   │   │   ├── functions
│   │   │   │   ├── clean.d.ts
│   │   │   │   ├── cmp.d.ts
│   │   │   │   ├── coerce.d.ts
│   │   │   │   ├── compare-build.d.ts
│   │   │   │   ├── compare-loose.d.ts
│   │   │   │   ├── compare.d.ts
│   │   │   │   ├── diff.d.ts
│   │   │   │   ├── eq.d.ts
│   │   │   │   ├── gt.d.ts
│   │   │   │   ├── gte.d.ts
│   │   │   │   ├── inc.d.ts
│   │   │   │   ├── lt.d.ts
│   │   │   │   ├── lte.d.ts
│   │   │   │   ├── major.d.ts
│   │   │   │   ├── minor.d.ts
│   │   │   │   ├── neq.d.ts
│   │   │   │   ├── parse.d.ts
│   │   │   │   ├── patch.d.ts
│   │   │   │   ├── prerelease.d.ts
│   │   │   │   ├── rcompare.d.ts
│   │   │   │   ├── rsort.d.ts
│   │   │   │   ├── satisfies.d.ts
│   │   │   │   ├── sort.d.ts
│   │   │   │   └── valid.d.ts
│   │   │   ├── index.d.ts
│   │   │   ├── internals
│   │   │   │   └── identifiers.d.ts
│   │   │   ├── package.json
│   │   │   ├── preload.d.ts
│   │   │   └── ranges
│   │   │       ├── gtr.d.ts
│   │   │       ├── intersects.d.ts
│   │   │       ├── ltr.d.ts
│   │   │       ├── max-satisfying.d.ts
│   │   │       ├── min-satisfying.d.ts
│   │   │       ├── min-version.d.ts
│   │   │       ├── outside.d.ts
│   │   │       ├── simplify.d.ts
│   │   │       ├── subset.d.ts
│   │   │       ├── to-comparators.d.ts
│   │   │       └── valid.d.ts
│   │   └── ws
│   │       ├── LICENSE
│   │       ├── README.md
│   │       ├── index.d.mts
│   │       ├── index.d.ts
│   │       └── package.json
│   ├── @typescript-eslint
│   │   ├── eslint-plugin
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist
│   │   │   │   ├── configs
│   │   │   │   │   ├── all.js
│   │   │   │   │   ├── all.js.map
│   │   │   │   │   ├── base.js
│   │   │   │   │   ├── base.js.map
│   │   │   │   │   ├── eslint-recommended.js
│   │   │   │   │   ├── eslint-recommended.js.map
│   │   │   │   │   ├── recommended-requiring-type-checking.js
│   │   │   │   │   ├── recommended-requiring-type-checking.js.map
│   │   │   │   │   ├── recommended.js
│   │   │   │   │   ├── recommended.js.map
│   │   │   │   │   ├── strict.js
│   │   │   │   │   └── strict.js.map
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── rules
│   │   │   │   │   ├── adjacent-overload-signatures.js
│   │   │   │   │   ├── adjacent-overload-signatures.js.map
│   │   │   │   │   ├── array-type.js
│   │   │   │   │   ├── array-type.js.map
│   │   │   │   │   ├── await-thenable.js
│   │   │   │   │   ├── await-thenable.js.map
│   │   │   │   │   ├── ban-ts-comment.js
│   │   │   │   │   ├── ban-ts-comment.js.map
│   │   │   │   │   ├── ban-tslint-comment.js
│   │   │   │   │   ├── ban-tslint-comment.js.map
│   │   │   │   │   ├── ban-types.js
│   │   │   │   │   ├── ban-types.js.map
│   │   │   │   │   ├── block-spacing.js
│   │   │   │   │   ├── block-spacing.js.map
│   │   │   │   │   ├── brace-style.js
│   │   │   │   │   ├── brace-style.js.map
│   │   │   │   │   ├── class-literal-property-style.js
│   │   │   │   │   ├── class-literal-property-style.js.map
│   │   │   │   │   ├── comma-dangle.js
│   │   │   │   │   ├── comma-dangle.js.map
│   │   │   │   │   ├── comma-spacing.js
│   │   │   │   │   ├── comma-spacing.js.map
│   │   │   │   │   ├── consistent-generic-constructors.js
│   │   │   │   │   ├── consistent-generic-constructors.js.map
│   │   │   │   │   ├── consistent-indexed-object-style.js
│   │   │   │   │   ├── consistent-indexed-object-style.js.map
│   │   │   │   │   ├── consistent-type-assertions.js
│   │   │   │   │   ├── consistent-type-assertions.js.map
│   │   │   │   │   ├── consistent-type-definitions.js
│   │   │   │   │   ├── consistent-type-definitions.js.map
│   │   │   │   │   ├── consistent-type-exports.js
│   │   │   │   │   ├── consistent-type-exports.js.map
│   │   │   │   │   ├── consistent-type-imports.js
│   │   │   │   │   ├── consistent-type-imports.js.map
│   │   │   │   │   ├── default-param-last.js
│   │   │   │   │   ├── default-param-last.js.map
│   │   │   │   │   ├── dot-notation.js
│   │   │   │   │   ├── dot-notation.js.map
│   │   │   │   │   ├── enum-utils
│   │   │   │   │   │   ├── shared.js
│   │   │   │   │   │   └── shared.js.map
│   │   │   │   │   ├── explicit-function-return-type.js
│   │   │   │   │   ├── explicit-function-return-type.js.map
│   │   │   │   │   ├── explicit-member-accessibility.js
│   │   │   │   │   ├── explicit-member-accessibility.js.map
│   │   │   │   │   ├── explicit-module-boundary-types.js
│   │   │   │   │   ├── explicit-module-boundary-types.js.map
│   │   │   │   │   ├── func-call-spacing.js
│   │   │   │   │   ├── func-call-spacing.js.map
│   │   │   │   │   ├── indent.js
│   │   │   │   │   ├── indent.js.map
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── index.js.map
│   │   │   │   │   ├── init-declarations.js
│   │   │   │   │   ├── init-declarations.js.map
│   │   │   │   │   ├── key-spacing.js
│   │   │   │   │   ├── key-spacing.js.map
│   │   │   │   │   ├── keyword-spacing.js
│   │   │   │   │   ├── keyword-spacing.js.map
│   │   │   │   │   ├── lines-around-comment.js
│   │   │   │   │   ├── lines-around-comment.js.map
│   │   │   │   │   ├── lines-between-class-members.js
│   │   │   │   │   ├── lines-between-class-members.js.map
│   │   │   │   │   ├── member-delimiter-style.js
│   │   │   │   │   ├── member-delimiter-style.js.map
│   │   │   │   │   ├── member-ordering.js
│   │   │   │   │   ├── member-ordering.js.map
│   │   │   │   │   ├── method-signature-style.js
│   │   │   │   │   ├── method-signature-style.js.map
│   │   │   │   │   ├── naming-convention-utils
│   │   │   │   │   │   ├── enums.js
│   │   │   │   │   │   ├── enums.js.map
│   │   │   │   │   │   ├── format.js
│   │   │   │   │   │   ├── format.js.map
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── index.js.map
│   │   │   │   │   │   ├── parse-options.js
│   │   │   │   │   │   ├── parse-options.js.map
│   │   │   │   │   │   ├── schema.js
│   │   │   │   │   │   ├── schema.js.map
│   │   │   │   │   │   ├── shared.js
│   │   │   │   │   │   ├── shared.js.map
│   │   │   │   │   │   ├── types.js
│   │   │   │   │   │   ├── types.js.map
│   │   │   │   │   │   ├── validator.js
│   │   │   │   │   │   └── validator.js.map
│   │   │   │   │   ├── naming-convention.js
│   │   │   │   │   ├── naming-convention.js.map
│   │   │   │   │   ├── no-array-constructor.js
│   │   │   │   │   ├── no-array-constructor.js.map
│   │   │   │   │   ├── no-base-to-string.js
│   │   │   │   │   ├── no-base-to-string.js.map
│   │   │   │   │   ├── no-confusing-non-null-assertion.js
│   │   │   │   │   ├── no-confusing-non-null-assertion.js.map
│   │   │   │   │   ├── no-confusing-void-expression.js
│   │   │   │   │   ├── no-confusing-void-expression.js.map
│   │   │   │   │   ├── no-dupe-class-members.js
│   │   │   │   │   ├── no-dupe-class-members.js.map
│   │   │   │   │   ├── no-duplicate-enum-values.js
│   │   │   │   │   ├── no-duplicate-enum-values.js.map
│   │   │   │   │   ├── no-duplicate-imports.js
│   │   │   │   │   ├── no-duplicate-imports.js.map
│   │   │   │   │   ├── no-duplicate-type-constituents.js
│   │   │   │   │   ├── no-duplicate-type-constituents.js.map
│   │   │   │   │   ├── no-dynamic-delete.js
│   │   │   │   │   ├── no-dynamic-delete.js.map
│   │   │   │   │   ├── no-empty-function.js
│   │   │   │   │   ├── no-empty-function.js.map
│   │   │   │   │   ├── no-empty-interface.js
│   │   │   │   │   ├── no-empty-interface.js.map
│   │   │   │   │   ├── no-explicit-any.js
│   │   │   │   │   ├── no-explicit-any.js.map
│   │   │   │   │   ├── no-extra-non-null-assertion.js
│   │   │   │   │   ├── no-extra-non-null-assertion.js.map
│   │   │   │   │   ├── no-extra-parens.js
│   │   │   │   │   ├── no-extra-parens.js.map
│   │   │   │   │   ├── no-extra-semi.js
│   │   │   │   │   ├── no-extra-semi.js.map
│   │   │   │   │   ├── no-extraneous-class.js
│   │   │   │   │   ├── no-extraneous-class.js.map
│   │   │   │   │   ├── no-floating-promises.js
│   │   │   │   │   ├── no-floating-promises.js.map
│   │   │   │   │   ├── no-for-in-array.js
│   │   │   │   │   ├── no-for-in-array.js.map
│   │   │   │   │   ├── no-implicit-any-catch.js
│   │   │   │   │   ├── no-implicit-any-catch.js.map
│   │   │   │   │   ├── no-implied-eval.js
│   │   │   │   │   ├── no-implied-eval.js.map
│   │   │   │   │   ├── no-import-type-side-effects.js
│   │   │   │   │   ├── no-import-type-side-effects.js.map
│   │   │   │   │   ├── no-inferrable-types.js
│   │   │   │   │   ├── no-inferrable-types.js.map
│   │   │   │   │   ├── no-invalid-this.js
│   │   │   │   │   ├── no-invalid-this.js.map
│   │   │   │   │   ├── no-invalid-void-type.js
│   │   │   │   │   ├── no-invalid-void-type.js.map
│   │   │   │   │   ├── no-loop-func.js
│   │   │   │   │   ├── no-loop-func.js.map
│   │   │   │   │   ├── no-loss-of-precision.js
│   │   │   │   │   ├── no-loss-of-precision.js.map
│   │   │   │   │   ├── no-magic-numbers.js
│   │   │   │   │   ├── no-magic-numbers.js.map
│   │   │   │   │   ├── no-meaningless-void-operator.js
│   │   │   │   │   ├── no-meaningless-void-operator.js.map
│   │   │   │   │   ├── no-misused-new.js
│   │   │   │   │   ├── no-misused-new.js.map
│   │   │   │   │   ├── no-misused-promises.js
│   │   │   │   │   ├── no-misused-promises.js.map
│   │   │   │   │   ├── no-mixed-enums.js
│   │   │   │   │   ├── no-mixed-enums.js.map
│   │   │   │   │   ├── no-namespace.js
│   │   │   │   │   ├── no-namespace.js.map
│   │   │   │   │   ├── no-non-null-asserted-nullish-coalescing.js
│   │   │   │   │   ├── no-non-null-asserted-nullish-coalescing.js.map
│   │   │   │   │   ├── no-non-null-asserted-optional-chain.js
│   │   │   │   │   ├── no-non-null-asserted-optional-chain.js.map
│   │   │   │   │   ├── no-non-null-assertion.js
│   │   │   │   │   ├── no-non-null-assertion.js.map
│   │   │   │   │   ├── no-parameter-properties.js
│   │   │   │   │   ├── no-parameter-properties.js.map
│   │   │   │   │   ├── no-redeclare.js
│   │   │   │   │   ├── no-redeclare.js.map
│   │   │   │   │   ├── no-redundant-type-constituents.js
│   │   │   │   │   ├── no-redundant-type-constituents.js.map
│   │   │   │   │   ├── no-require-imports.js
│   │   │   │   │   ├── no-require-imports.js.map
│   │   │   │   │   ├── no-restricted-imports.js
│   │   │   │   │   ├── no-restricted-imports.js.map
│   │   │   │   │   ├── no-shadow.js
│   │   │   │   │   ├── no-shadow.js.map
│   │   │   │   │   ├── no-this-alias.js
│   │   │   │   │   ├── no-this-alias.js.map
│   │   │   │   │   ├── no-throw-literal.js
│   │   │   │   │   ├── no-throw-literal.js.map
│   │   │   │   │   ├── no-type-alias.js
│   │   │   │   │   ├── no-type-alias.js.map
│   │   │   │   │   ├── no-unnecessary-boolean-literal-compare.js
│   │   │   │   │   ├── no-unnecessary-boolean-literal-compare.js.map
│   │   │   │   │   ├── no-unnecessary-condition.js
│   │   │   │   │   ├── no-unnecessary-condition.js.map
│   │   │   │   │   ├── no-unnecessary-qualifier.js
│   │   │   │   │   ├── no-unnecessary-qualifier.js.map
│   │   │   │   │   ├── no-unnecessary-type-arguments.js
│   │   │   │   │   ├── no-unnecessary-type-arguments.js.map
│   │   │   │   │   ├── no-unnecessary-type-assertion.js
│   │   │   │   │   ├── no-unnecessary-type-assertion.js.map
│   │   │   │   │   ├── no-unnecessary-type-constraint.js
│   │   │   │   │   ├── no-unnecessary-type-constraint.js.map
│   │   │   │   │   ├── no-unsafe-argument.js
│   │   │   │   │   ├── no-unsafe-argument.js.map
│   │   │   │   │   ├── no-unsafe-assignment.js
│   │   │   │   │   ├── no-unsafe-assignment.js.map
│   │   │   │   │   ├── no-unsafe-call.js
│   │   │   │   │   ├── no-unsafe-call.js.map
│   │   │   │   │   ├── no-unsafe-declaration-merging.js
│   │   │   │   │   ├── no-unsafe-declaration-merging.js.map
│   │   │   │   │   ├── no-unsafe-enum-comparison.js
│   │   │   │   │   ├── no-unsafe-enum-comparison.js.map
│   │   │   │   │   ├── no-unsafe-member-access.js
│   │   │   │   │   ├── no-unsafe-member-access.js.map
│   │   │   │   │   ├── no-unsafe-return.js
│   │   │   │   │   ├── no-unsafe-return.js.map
│   │   │   │   │   ├── no-unused-expressions.js
│   │   │   │   │   ├── no-unused-expressions.js.map
│   │   │   │   │   ├── no-unused-vars.js
│   │   │   │   │   ├── no-unused-vars.js.map
│   │   │   │   │   ├── no-use-before-define.js
│   │   │   │   │   ├── no-use-before-define.js.map
│   │   │   │   │   ├── no-useless-constructor.js
│   │   │   │   │   ├── no-useless-constructor.js.map
│   │   │   │   │   ├── no-useless-empty-export.js
│   │   │   │   │   ├── no-useless-empty-export.js.map
│   │   │   │   │   ├── no-var-requires.js
│   │   │   │   │   ├── no-var-requires.js.map
│   │   │   │   │   ├── non-nullable-type-assertion-style.js
│   │   │   │   │   ├── non-nullable-type-assertion-style.js.map
│   │   │   │   │   ├── object-curly-spacing.js
│   │   │   │   │   ├── object-curly-spacing.js.map
│   │   │   │   │   ├── padding-line-between-statements.js
│   │   │   │   │   ├── padding-line-between-statements.js.map
│   │   │   │   │   ├── parameter-properties.js
│   │   │   │   │   ├── parameter-properties.js.map
│   │   │   │   │   ├── prefer-as-const.js
│   │   │   │   │   ├── prefer-as-const.js.map
│   │   │   │   │   ├── prefer-enum-initializers.js
│   │   │   │   │   ├── prefer-enum-initializers.js.map
│   │   │   │   │   ├── prefer-for-of.js
│   │   │   │   │   ├── prefer-for-of.js.map
│   │   │   │   │   ├── prefer-function-type.js
│   │   │   │   │   ├── prefer-function-type.js.map
│   │   │   │   │   ├── prefer-includes.js
│   │   │   │   │   ├── prefer-includes.js.map
│   │   │   │   │   ├── prefer-literal-enum-member.js
│   │   │   │   │   ├── prefer-literal-enum-member.js.map
│   │   │   │   │   ├── prefer-namespace-keyword.js
│   │   │   │   │   ├── prefer-namespace-keyword.js.map
│   │   │   │   │   ├── prefer-nullish-coalescing.js
│   │   │   │   │   ├── prefer-nullish-coalescing.js.map
│   │   │   │   │   ├── prefer-optional-chain.js
│   │   │   │   │   ├── prefer-optional-chain.js.map
│   │   │   │   │   ├── prefer-readonly-parameter-types.js
│   │   │   │   │   ├── prefer-readonly-parameter-types.js.map
│   │   │   │   │   ├── prefer-readonly.js
│   │   │   │   │   ├── prefer-readonly.js.map
│   │   │   │   │   ├── prefer-reduce-type-parameter.js
│   │   │   │   │   ├── prefer-reduce-type-parameter.js.map
│   │   │   │   │   ├── prefer-regexp-exec.js
│   │   │   │   │   ├── prefer-regexp-exec.js.map
│   │   │   │   │   ├── prefer-return-this-type.js
│   │   │   │   │   ├── prefer-return-this-type.js.map
│   │   │   │   │   ├── prefer-string-starts-ends-with.js
│   │   │   │   │   ├── prefer-string-starts-ends-with.js.map
│   │   │   │   │   ├── prefer-ts-expect-error.js
│   │   │   │   │   ├── prefer-ts-expect-error.js.map
│   │   │   │   │   ├── promise-function-async.js
│   │   │   │   │   ├── promise-function-async.js.map
│   │   │   │   │   ├── quotes.js
│   │   │   │   │   ├── quotes.js.map
│   │   │   │   │   ├── require-array-sort-compare.js
│   │   │   │   │   ├── require-array-sort-compare.js.map
│   │   │   │   │   ├── require-await.js
│   │   │   │   │   ├── require-await.js.map
│   │   │   │   │   ├── restrict-plus-operands.js
│   │   │   │   │   ├── restrict-plus-operands.js.map
│   │   │   │   │   ├── restrict-template-expressions.js
│   │   │   │   │   ├── restrict-template-expressions.js.map
│   │   │   │   │   ├── return-await.js
│   │   │   │   │   ├── return-await.js.map
│   │   │   │   │   ├── semi.js
│   │   │   │   │   ├── semi.js.map
│   │   │   │   │   ├── sort-type-constituents.js
│   │   │   │   │   ├── sort-type-constituents.js.map
│   │   │   │   │   ├── sort-type-union-intersection-members.js
│   │   │   │   │   ├── sort-type-union-intersection-members.js.map
│   │   │   │   │   ├── space-before-blocks.js
│   │   │   │   │   ├── space-before-blocks.js.map
│   │   │   │   │   ├── space-before-function-paren.js
│   │   │   │   │   ├── space-before-function-paren.js.map
│   │   │   │   │   ├── space-infix-ops.js
│   │   │   │   │   ├── space-infix-ops.js.map
│   │   │   │   │   ├── strict-boolean-expressions.js
│   │   │   │   │   ├── strict-boolean-expressions.js.map
│   │   │   │   │   ├── switch-exhaustiveness-check.js
│   │   │   │   │   ├── switch-exhaustiveness-check.js.map
│   │   │   │   │   ├── triple-slash-reference.js
│   │   │   │   │   ├── triple-slash-reference.js.map
│   │   │   │   │   ├── type-annotation-spacing.js
│   │   │   │   │   ├── type-annotation-spacing.js.map
│   │   │   │   │   ├── typedef.js
│   │   │   │   │   ├── typedef.js.map
│   │   │   │   │   ├── unbound-method.js
│   │   │   │   │   ├── unbound-method.js.map
│   │   │   │   │   ├── unified-signatures.js
│   │   │   │   │   └── unified-signatures.js.map
│   │   │   │   └── util
│   │   │   │       ├── astUtils.js
│   │   │   │       ├── astUtils.js.map
│   │   │   │       ├── collectUnusedVariables.js
│   │   │   │       ├── collectUnusedVariables.js.map
│   │   │   │       ├── createRule.js
│   │   │   │       ├── createRule.js.map
│   │   │   │       ├── escapeRegExp.js
│   │   │   │       ├── escapeRegExp.js.map
│   │   │   │       ├── explicitReturnTypeUtils.js
│   │   │   │       ├── explicitReturnTypeUtils.js.map
│   │   │   │       ├── getESLintCoreRule.js
│   │   │   │       ├── getESLintCoreRule.js.map
│   │   │   │       ├── getFunctionHeadLoc.js
│   │   │   │       ├── getFunctionHeadLoc.js.map
│   │   │   │       ├── getOperatorPrecedence.js
│   │   │   │       ├── getOperatorPrecedence.js.map
│   │   │   │       ├── getStringLength.js
│   │   │   │       ├── getStringLength.js.map
│   │   │   │       ├── getThisExpression.js
│   │   │   │       ├── getThisExpression.js.map
│   │   │   │       ├── getWrappingFixer.js
│   │   │   │       ├── getWrappingFixer.js.map
│   │   │   │       ├── index.js
│   │   │   │       ├── index.js.map
│   │   │   │       ├── isNodeEqual.js
│   │   │   │       ├── isNodeEqual.js.map
│   │   │   │       ├── isNullLiteral.js
│   │   │   │       ├── isNullLiteral.js.map
│   │   │   │       ├── isUndefinedIdentifier.js
│   │   │   │       ├── isUndefinedIdentifier.js.map
│   │   │   │       ├── misc.js
│   │   │   │       ├── misc.js.map
│   │   │   │       ├── objectIterators.js
│   │   │   │       └── objectIterators.js.map
│   │   │   ├── docs
│   │   │   │   └── rules
│   │   │   │       ├── README.md
│   │   │   │       ├── TEMPLATE.md
│   │   │   │       ├── adjacent-overload-signatures.md
│   │   │   │       ├── array-type.md
│   │   │   │       ├── await-thenable.md
│   │   │   │       ├── ban-ts-comment.md
│   │   │   │       ├── ban-tslint-comment.md
│   │   │   │       ├── ban-types.md
│   │   │   │       ├── block-spacing.md
│   │   │   │       ├── brace-style.md
│   │   │   │       ├── camelcase.md
│   │   │   │       ├── class-literal-property-style.md
│   │   │   │       ├── comma-dangle.md
│   │   │   │       ├── comma-spacing.md
│   │   │   │       ├── consistent-generic-constructors.md
│   │   │   │       ├── consistent-indexed-object-style.md
│   │   │   │       ├── consistent-type-assertions.md
│   │   │   │       ├── consistent-type-definitions.md
│   │   │   │       ├── consistent-type-exports.md
│   │   │   │       ├── consistent-type-imports.md
│   │   │   │       ├── default-param-last.md
│   │   │   │       ├── dot-notation.md
│   │   │   │       ├── explicit-function-return-type.md
│   │   │   │       ├── explicit-member-accessibility.md
│   │   │   │       ├── explicit-module-boundary-types.md
│   │   │   │       ├── func-call-spacing.md
│   │   │   │       ├── indent.md
│   │   │   │       ├── init-declarations.md
│   │   │   │       ├── key-spacing.md
│   │   │   │       ├── keyword-spacing.md
│   │   │   │       ├── lines-around-comment.md
│   │   │   │       ├── lines-between-class-members.md
│   │   │   │       ├── member-delimiter-style.md
│   │   │   │       ├── member-ordering.md
│   │   │   │       ├── method-signature-style.md
│   │   │   │       ├── naming-convention.md
│   │   │   │       ├── no-array-constructor.md
│   │   │   │       ├── no-base-to-string.md
│   │   │   │       ├── no-confusing-non-null-assertion.md
│   │   │   │       ├── no-confusing-void-expression.md
│   │   │   │       ├── no-dupe-class-members.md
│   │   │   │       ├── no-duplicate-enum-values.md
│   │   │   │       ├── no-duplicate-imports.md
│   │   │   │       ├── no-duplicate-type-constituents.md
│   │   │   │       ├── no-dynamic-delete.md
│   │   │   │       ├── no-empty-function.md
│   │   │   │       ├── no-empty-interface.md
│   │   │   │       ├── no-explicit-any.md
│   │   │   │       ├── no-extra-non-null-assertion.md
│   │   │   │       ├── no-extra-parens.md
│   │   │   │       ├── no-extra-semi.md
│   │   │   │       ├── no-extraneous-class.md
│   │   │   │       ├── no-floating-promises.md
│   │   │   │       ├── no-for-in-array.md
│   │   │   │       ├── no-implicit-any-catch.md
│   │   │   │       ├── no-implied-eval.md
│   │   │   │       ├── no-import-type-side-effects.md
│   │   │   │       ├── no-inferrable-types.md
│   │   │   │       ├── no-invalid-this.md
│   │   │   │       ├── no-invalid-void-type.md
│   │   │   │       ├── no-loop-func.md
│   │   │   │       ├── no-loss-of-precision.md
│   │   │   │       ├── no-magic-numbers.md
│   │   │   │       ├── no-meaningless-void-operator.md
│   │   │   │       ├── no-misused-new.md
│   │   │   │       ├── no-misused-promises.md
│   │   │   │       ├── no-mixed-enums.md
│   │   │   │       ├── no-namespace.md
│   │   │   │       ├── no-non-null-asserted-nullish-coalescing.md
│   │   │   │       ├── no-non-null-asserted-optional-chain.md
│   │   │   │       ├── no-non-null-assertion.md
│   │   │   │       ├── no-parameter-properties.md
│   │   │   │       ├── no-redeclare.md
│   │   │   │       ├── no-redundant-type-constituents.md
│   │   │   │       ├── no-require-imports.md
│   │   │   │       ├── no-restricted-imports.md
│   │   │   │       ├── no-shadow.md
│   │   │   │       ├── no-this-alias.md
│   │   │   │       ├── no-throw-literal.md
│   │   │   │       ├── no-type-alias.md
│   │   │   │       ├── no-unnecessary-boolean-literal-compare.md
│   │   │   │       ├── no-unnecessary-condition.md
│   │   │   │       ├── no-unnecessary-qualifier.md
│   │   │   │       ├── no-unnecessary-type-arguments.md
│   │   │   │       ├── no-unnecessary-type-assertion.md
│   │   │   │       ├── no-unnecessary-type-constraint.md
│   │   │   │       ├── no-unsafe-argument.md
│   │   │   │       ├── no-unsafe-assignment.md
│   │   │   │       ├── no-unsafe-call.md
│   │   │   │       ├── no-unsafe-declaration-merging.md
│   │   │   │       ├── no-unsafe-enum-comparison.md
│   │   │   │       ├── no-unsafe-member-access.md
│   │   │   │       ├── no-unsafe-return.md
│   │   │   │       ├── no-unused-expressions.md
│   │   │   │       ├── no-unused-vars.md
│   │   │   │       ├── no-use-before-define.md
│   │   │   │       ├── no-useless-constructor.md
│   │   │   │       ├── no-useless-empty-export.md
│   │   │   │       ├── no-var-requires.md
│   │   │   │       ├── non-nullable-type-assertion-style.md
│   │   │   │       ├── object-curly-spacing.md
│   │   │   │       ├── padding-line-between-statements.md
│   │   │   │       ├── parameter-properties.md
│   │   │   │       ├── prefer-as-const.md
│   │   │   │       ├── prefer-enum-initializers.md
│   │   │   │       ├── prefer-for-of.md
│   │   │   │       ├── prefer-function-type.md
│   │   │   │       ├── prefer-includes.md
│   │   │   │       ├── prefer-literal-enum-member.md
│   │   │   │       ├── prefer-namespace-keyword.md
│   │   │   │       ├── prefer-nullish-coalescing.md
│   │   │   │       ├── prefer-optional-chain.md
│   │   │   │       ├── prefer-readonly-parameter-types.md
│   │   │   │       ├── prefer-readonly.md
│   │   │   │       ├── prefer-reduce-type-parameter.md
│   │   │   │       ├── prefer-regexp-exec.md
│   │   │   │       ├── prefer-return-this-type.md
│   │   │   │       ├── prefer-string-starts-ends-with.md
│   │   │   │       ├── prefer-ts-expect-error.md
│   │   │   │       ├── promise-function-async.md
│   │   │   │       ├── quotes.md
│   │   │   │       ├── require-array-sort-compare.md
│   │   │   │       ├── require-await.md
│   │   │   │       ├── restrict-plus-operands.md
│   │   │   │       ├── restrict-template-expressions.md
│   │   │   │       ├── return-await.md
│   │   │   │       ├── semi.md
│   │   │   │       ├── sort-type-constituents.md
│   │   │   │       ├── sort-type-union-intersection-members.md
│   │   │   │       ├── space-before-blocks.md
│   │   │   │       ├── space-before-function-paren.md
│   │   │   │       ├── space-infix-ops.md
│   │   │   │       ├── strict-boolean-expressions.md
│   │   │   │       ├── switch-exhaustiveness-check.md
│   │   │   │       ├── triple-slash-reference.md
│   │   │   │       ├── type-annotation-spacing.md
│   │   │   │       ├── typedef.md
│   │   │   │       ├── unbound-method.md
│   │   │   │       └── unified-signatures.md
│   │   │   ├── index.d.ts
│   │   │   └── package.json
│   │   ├── parser
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── _ts3.4
│   │   │   │   └── dist
│   │   │   │       ├── index.d.ts
│   │   │   │       └── parser.d.ts
│   │   │   ├── dist
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.d.ts.map
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── parser.d.ts
│   │   │   │   ├── parser.d.ts.map
│   │   │   │   ├── parser.js
│   │   │   │   └── parser.js.map
│   │   │   └── package.json
│   │   ├── scope-manager
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── dist
│   │   │   │   ├── ID.d.ts
│   │   │   │   ├── ID.d.ts.map
│   │   │   │   ├── ID.js
│   │   │   │   ├── ID.js.map
│   │   │   │   ├── ScopeManager.d.ts
│   │   │   │   ├── ScopeManager.d.ts.map
│   │   │   │   ├── ScopeManager.js
│   │   │   │   ├── ScopeManager.js.map
│   │   │   │   ├── analyze.d.ts
│   │   │   │   ├── analyze.d.ts.map
│   │   │   │   ├── analyze.js
│   │   │   │   ├── analyze.js.map
│   │   │   │   ├── assert.d.ts
│   │   │   │   ├── assert.d.ts.map
│   │   │   │   ├── assert.js
│   │   │   │   ├── assert.js.map
│   │   │   │   ├── definition
│   │   │   │   │   ├── CatchClauseDefinition.d.ts
│   │   │   │   │   ├── CatchClauseDefinition.d.ts.map
│   │   │   │   │   ├── CatchClauseDefinition.js
│   │   │   │   │   ├── CatchClauseDefinition.js.map
│   │   │   │   │   ├── ClassNameDefinition.d.ts
│   │   │   │   │   ├── ClassNameDefinition.d.ts.map
│   │   │   │   │   ├── ClassNameDefinition.js
│   │   │   │   │   ├── ClassNameDefinition.js.map
│   │   │   │   │   ├── Definition.d.ts
│   │   │   │   │   ├── Definition.d.ts.map
│   │   │   │   │   ├── Definition.js
│   │   │   │   │   ├── Definition.js.map
│   │   │   │   │   ├── DefinitionBase.d.ts
│   │   │   │   │   ├── DefinitionBase.d.ts.map
│   │   │   │   │   ├── DefinitionBase.js
│   │   │   │   │   ├── DefinitionBase.js.map
│   │   │   │   │   ├── DefinitionType.d.ts
│   │   │   │   │   ├── DefinitionType.d.ts.map
│   │   │   │   │   ├── DefinitionType.js
│   │   │   │   │   ├── DefinitionType.js.map
│   │   │   │   │   ├── FunctionNameDefinition.d.ts
│   │   │   │   │   ├── FunctionNameDefinition.d.ts.map
│   │   │   │   │   ├── FunctionNameDefinition.js
│   │   │   │   │   ├── FunctionNameDefinition.js.map
│   │   │   │   │   ├── ImplicitGlobalVariableDefinition.d.ts
│   │   │   │   │   ├── ImplicitGlobalVariableDefinition.d.ts.map
│   │   │   │   │   ├── ImplicitGlobalVariableDefinition.js
│   │   │   │   │   ├── ImplicitGlobalVariableDefinition.js.map
│   │   │   │   │   ├── ImportBindingDefinition.d.ts
│   │   │   │   │   ├── ImportBindingDefinition.d.ts.map
│   │   │   │   │   ├── ImportBindingDefinition.js
│   │   │   │   │   ├── ImportBindingDefinition.js.map
│   │   │   │   │   ├── ParameterDefinition.d.ts
│   │   │   │   │   ├── ParameterDefinition.d.ts.map
│   │   │   │   │   ├── ParameterDefinition.js
│   │   │   │   │   ├── ParameterDefinition.js.map
│   │   │   │   │   ├── TSEnumMemberDefinition.d.ts
│   │   │   │   │   ├── TSEnumMemberDefinition.d.ts.map
│   │   │   │   │   ├── TSEnumMemberDefinition.js
│   │   │   │   │   ├── TSEnumMemberDefinition.js.map
│   │   │   │   │   ├── TSEnumNameDefinition.d.ts
│   │   │   │   │   ├── TSEnumNameDefinition.d.ts.map
│   │   │   │   │   ├── TSEnumNameDefinition.js
│   │   │   │   │   ├── TSEnumNameDefinition.js.map
│   │   │   │   │   ├── TSModuleNameDefinition.d.ts
│   │   │   │   │   ├── TSModuleNameDefinition.d.ts.map
│   │   │   │   │   ├── TSModuleNameDefinition.js
│   │   │   │   │   ├── TSModuleNameDefinition.js.map
│   │   │   │   │   ├── TypeDefinition.d.ts
│   │   │   │   │   ├── TypeDefinition.d.ts.map
│   │   │   │   │   ├── TypeDefinition.js
│   │   │   │   │   ├── TypeDefinition.js.map
│   │   │   │   │   ├── VariableDefinition.d.ts
│   │   │   │   │   ├── VariableDefinition.d.ts.map
│   │   │   │   │   ├── VariableDefinition.js
│   │   │   │   │   ├── VariableDefinition.js.map
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── index.d.ts.map
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── index.js.map
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.d.ts.map
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── lib
│   │   │   │   │   ├── base-config.d.ts
│   │   │   │   │   ├── base-config.d.ts.map
│   │   │   │   │   ├── base-config.js
│   │   │   │   │   ├── base-config.js.map
│   │   │   │   │   ├── decorators.d.ts
│   │   │   │   │   ├── decorators.d.ts.map
│   │   │   │   │   ├── decorators.js
│   │   │   │   │   ├── decorators.js.map
│   │   │   │   │   ├── decorators.legacy.d.ts
│   │   │   │   │   ├── decorators.legacy.d.ts.map
│   │   │   │   │   ├── decorators.legacy.js
│   │   │   │   │   ├── decorators.legacy.js.map
│   │   │   │   │   ├── dom.d.ts
│   │   │   │   │   ├── dom.d.ts.map
│   │   │   │   │   ├── dom.iterable.d.ts
│   │   │   │   │   ├── dom.iterable.d.ts.map
│   │   │   │   │   ├── dom.iterable.js
│   │   │   │   │   ├── dom.iterable.js.map
│   │   │   │   │   ├── dom.js
│   │   │   │   │   ├── dom.js.map
│   │   │   │   │   ├── es2015.collection.d.ts
│   │   │   │   │   ├── es2015.collection.d.ts.map
│   │   │   │   │   ├── es2015.collection.js
│   │   │   │   │   ├── es2015.collection.js.map
│   │   │   │   │   ├── es2015.core.d.ts
│   │   │   │   │   ├── es2015.core.d.ts.map
│   │   │   │   │   ├── es2015.core.js
│   │   │   │   │   ├── es2015.core.js.map
│   │   │   │   │   ├── es2015.d.ts
│   │   │   │   │   ├── es2015.d.ts.map
│   │   │   │   │   ├── es2015.generator.d.ts
│   │   │   │   │   ├── es2015.generator.d.ts.map
│   │   │   │   │   ├── es2015.generator.js
│   │   │   │   │   ├── es2015.generator.js.map
│   │   │   │   │   ├── es2015.iterable.d.ts
│   │   │   │   │   ├── es2015.iterable.d.ts.map
│   │   │   │   │   ├── es2015.iterable.js
│   │   │   │   │   ├── es2015.iterable.js.map
│   │   │   │   │   ├── es2015.js
│   │   │   │   │   ├── es2015.js.map
│   │   │   │   │   ├── es2015.promise.d.ts
│   │   │   │   │   ├── es2015.promise.d.ts.map
│   │   │   │   │   ├── es2015.promise.js
│   │   │   │   │   ├── es2015.promise.js.map
│   │   │   │   │   ├── es2015.proxy.d.ts
│   │   │   │   │   ├── es2015.proxy.d.ts.map
│   │   │   │   │   ├── es2015.proxy.js
│   │   │   │   │   ├── es2015.proxy.js.map
│   │   │   │   │   ├── es2015.reflect.d.ts
│   │   │   │   │   ├── es2015.reflect.d.ts.map
│   │   │   │   │   ├── es2015.reflect.js
│   │   │   │   │   ├── es2015.reflect.js.map
│   │   │   │   │   ├── es2015.symbol.d.ts
│   │   │   │   │   ├── es2015.symbol.d.ts.map
│   │   │   │   │   ├── es2015.symbol.js
│   │   │   │   │   ├── es2015.symbol.js.map
│   │   │   │   │   ├── es2015.symbol.wellknown.d.ts
│   │   │   │   │   ├── es2015.symbol.wellknown.d.ts.map
│   │   │   │   │   ├── es2015.symbol.wellknown.js
│   │   │   │   │   ├── es2015.symbol.wellknown.js.map
│   │   │   │   │   ├── es2016.array.include.d.ts
│   │   │   │   │   ├── es2016.array.include.d.ts.map
│   │   │   │   │   ├── es2016.array.include.js
│   │   │   │   │   ├── es2016.array.include.js.map
│   │   │   │   │   ├── es2016.d.ts
│   │   │   │   │   ├── es2016.d.ts.map
│   │   │   │   │   ├── es2016.full.d.ts
│   │   │   │   │   ├── es2016.full.d.ts.map
│   │   │   │   │   ├── es2016.full.js
│   │   │   │   │   ├── es2016.full.js.map
│   │   │   │   │   ├── es2016.js
│   │   │   │   │   ├── es2016.js.map
│   │   │   │   │   ├── es2017.d.ts
│   │   │   │   │   ├── es2017.d.ts.map
│   │   │   │   │   ├── es2017.full.d.ts
│   │   │   │   │   ├── es2017.full.d.ts.map
│   │   │   │   │   ├── es2017.full.js
│   │   │   │   │   ├── es2017.full.js.map
│   │   │   │   │   ├── es2017.intl.d.ts
│   │   │   │   │   ├── es2017.intl.d.ts.map
│   │   │   │   │   ├── es2017.intl.js
│   │   │   │   │   ├── es2017.intl.js.map
│   │   │   │   │   ├── es2017.js
│   │   │   │   │   ├── es2017.js.map
│   │   │   │   │   ├── es2017.object.d.ts
│   │   │   │   │   ├── es2017.object.d.ts.map
│   │   │   │   │   ├── es2017.object.js
│   │   │   │   │   ├── es2017.object.js.map
│   │   │   │   │   ├── es2017.sharedmemory.d.ts
│   │   │   │   │   ├── es2017.sharedmemory.d.ts.map
│   │   │   │   │   ├── es2017.sharedmemory.js
│   │   │   │   │   ├── es2017.sharedmemory.js.map
│   │   │   │   │   ├── es2017.string.d.ts
│   │   │   │   │   ├── es2017.string.d.ts.map
│   │   │   │   │   ├── es2017.string.js
│   │   │   │   │   ├── es2017.string.js.map
│   │   │   │   │   ├── es2017.typedarrays.d.ts
│   │   │   │   │   ├── es2017.typedarrays.d.ts.map
│   │   │   │   │   ├── es2017.typedarrays.js
│   │   │   │   │   ├── es2017.typedarrays.js.map
│   │   │   │   │   ├── es2018.asyncgenerator.d.ts
│   │   │   │   │   ├── es2018.asyncgenerator.d.ts.map
│   │   │   │   │   ├── es2018.asyncgenerator.js
│   │   │   │   │   ├── es2018.asyncgenerator.js.map
│   │   │   │   │   ├── es2018.asynciterable.d.ts
│   │   │   │   │   ├── es2018.asynciterable.d.ts.map
│   │   │   │   │   ├── es2018.asynciterable.js
│   │   │   │   │   ├── es2018.asynciterable.js.map
│   │   │   │   │   ├── es2018.d.ts
│   │   │   │   │   ├── es2018.d.ts.map
│   │   │   │   │   ├── es2018.full.d.ts
│   │   │   │   │   ├── es2018.full.d.ts.map
│   │   │   │   │   ├── es2018.full.js
│   │   │   │   │   ├── es2018.full.js.map
│   │   │   │   │   ├── es2018.intl.d.ts
│   │   │   │   │   ├── es2018.intl.d.ts.map
│   │   │   │   │   ├── es2018.intl.js
│   │   │   │   │   ├── es2018.intl.js.map
│   │   │   │   │   ├── es2018.js
│   │   │   │   │   ├── es2018.js.map
│   │   │   │   │   ├── es2018.promise.d.ts
│   │   │   │   │   ├── es2018.promise.d.ts.map
│   │   │   │   │   ├── es2018.promise.js
│   │   │   │   │   ├── es2018.promise.js.map
│   │   │   │   │   ├── es2018.regexp.d.ts
│   │   │   │   │   ├── es2018.regexp.d.ts.map
│   │   │   │   │   ├── es2018.regexp.js
│   │   │   │   │   ├── es2018.regexp.js.map
│   │   │   │   │   ├── es2019.array.d.ts
│   │   │   │   │   ├── es2019.array.d.ts.map
│   │   │   │   │   ├── es2019.array.js
│   │   │   │   │   ├── es2019.array.js.map
│   │   │   │   │   ├── es2019.d.ts
│   │   │   │   │   ├── es2019.d.ts.map
│   │   │   │   │   ├── es2019.full.d.ts
│   │   │   │   │   ├── es2019.full.d.ts.map
│   │   │   │   │   ├── es2019.full.js
│   │   │   │   │   ├── es2019.full.js.map
│   │   │   │   │   ├── es2019.intl.d.ts
│   │   │   │   │   ├── es2019.intl.d.ts.map
│   │   │   │   │   ├── es2019.intl.js
│   │   │   │   │   ├── es2019.intl.js.map
│   │   │   │   │   ├── es2019.js
│   │   │   │   │   ├── es2019.js.map
│   │   │   │   │   ├── es2019.object.d.ts
│   │   │   │   │   ├── es2019.object.d.ts.map
│   │   │   │   │   ├── es2019.object.js
│   │   │   │   │   ├── es2019.object.js.map
│   │   │   │   │   ├── es2019.string.d.ts
│   │   │   │   │   ├── es2019.string.d.ts.map
│   │   │   │   │   ├── es2019.string.js
│   │   │   │   │   ├── es2019.string.js.map
│   │   │   │   │   ├── es2019.symbol.d.ts
│   │   │   │   │   ├── es2019.symbol.d.ts.map
│   │   │   │   │   ├── es2019.symbol.js
│   │   │   │   │   ├── es2019.symbol.js.map
│   │   │   │   │   ├── es2020.bigint.d.ts
│   │   │   │   │   ├── es2020.bigint.d.ts.map
│   │   │   │   │   ├── es2020.bigint.js
│   │   │   │   │   ├── es2020.bigint.js.map
│   │   │   │   │   ├── es2020.d.ts
│   │   │   │   │   ├── es2020.d.ts.map
│   │   │   │   │   ├── es2020.date.d.ts
│   │   │   │   │   ├── es2020.date.d.ts.map
│   │   │   │   │   ├── es2020.date.js
│   │   │   │   │   ├── es2020.date.js.map
│   │   │   │   │   ├── es2020.full.d.ts
│   │   │   │   │   ├── es2020.full.d.ts.map
│   │   │   │   │   ├── es2020.full.js
│   │   │   │   │   ├── es2020.full.js.map
│   │   │   │   │   ├── es2020.intl.d.ts
│   │   │   │   │   ├── es2020.intl.d.ts.map
│   │   │   │   │   ├── es2020.intl.js
│   │   │   │   │   ├── es2020.intl.js.map
│   │   │   │   │   ├── es2020.js
│   │   │   │   │   ├── es2020.js.map
│   │   │   │   │   ├── es2020.number.d.ts
│   │   │   │   │   ├── es2020.number.d.ts.map
│   │   │   │   │   ├── es2020.number.js
│   │   │   │   │   ├── es2020.number.js.map
│   │   │   │   │   ├── es2020.promise.d.ts
│   │   │   │   │   ├── es2020.promise.d.ts.map
│   │   │   │   │   ├── es2020.promise.js
│   │   │   │   │   ├── es2020.promise.js.map
│   │   │   │   │   ├── es2020.sharedmemory.d.ts
│   │   │   │   │   ├── es2020.sharedmemory.d.ts.map
│   │   │   │   │   ├── es2020.sharedmemory.js
│   │   │   │   │   ├── es2020.sharedmemory.js.map
│   │   │   │   │   ├── es2020.string.d.ts
│   │   │   │   │   ├── es2020.string.d.ts.map
│   │   │   │   │   ├── es2020.string.js
│   │   │   │   │   ├── es2020.string.js.map
│   │   │   │   │   ├── es2020.symbol.wellknown.d.ts
│   │   │   │   │   ├── es2020.symbol.wellknown.d.ts.map
│   │   │   │   │   ├── es2020.symbol.wellknown.js
│   │   │   │   │   ├── es2020.symbol.wellknown.js.map
│   │   │   │   │   ├── es2021.d.ts
│   │   │   │   │   ├── es2021.d.ts.map
│   │   │   │   │   ├── es2021.full.d.ts
│   │   │   │   │   ├── es2021.full.d.ts.map
│   │   │   │   │   ├── es2021.full.js
│   │   │   │   │   ├── es2021.full.js.map
│   │   │   │   │   ├── es2021.intl.d.ts
│   │   │   │   │   ├── es2021.intl.d.ts.map
│   │   │   │   │   ├── es2021.intl.js
│   │   │   │   │   ├── es2021.intl.js.map
│   │   │   │   │   ├── es2021.js
│   │   │   │   │   ├── es2021.js.map
│   │   │   │   │   ├── es2021.promise.d.ts
│   │   │   │   │   ├── es2021.promise.d.ts.map
│   │   │   │   │   ├── es2021.promise.js
│   │   │   │   │   ├── es2021.promise.js.map
│   │   │   │   │   ├── es2021.string.d.ts
│   │   │   │   │   ├── es2021.string.d.ts.map
│   │   │   │   │   ├── es2021.string.js
│   │   │   │   │   ├── es2021.string.js.map
│   │   │   │   │   ├── es2021.weakref.d.ts
│   │   │   │   │   ├── es2021.weakref.d.ts.map
│   │   │   │   │   ├── es2021.weakref.js
│   │   │   │   │   ├── es2021.weakref.js.map
│   │   │   │   │   ├── es2022.array.d.ts
│   │   │   │   │   ├── es2022.array.d.ts.map
│   │   │   │   │   ├── es2022.array.js
│   │   │   │   │   ├── es2022.array.js.map
│   │   │   │   │   ├── es2022.d.ts
│   │   │   │   │   ├── es2022.d.ts.map
│   │   │   │   │   ├── es2022.error.d.ts
│   │   │   │   │   ├── es2022.error.d.ts.map
│   │   │   │   │   ├── es2022.error.js
│   │   │   │   │   ├── es2022.error.js.map
│   │   │   │   │   ├── es2022.full.d.ts
│   │   │   │   │   ├── es2022.full.d.ts.map
│   │   │   │   │   ├── es2022.full.js
│   │   │   │   │   ├── es2022.full.js.map
│   │   │   │   │   ├── es2022.intl.d.ts
│   │   │   │   │   ├── es2022.intl.d.ts.map
│   │   │   │   │   ├── es2022.intl.js
│   │   │   │   │   ├── es2022.intl.js.map
│   │   │   │   │   ├── es2022.js
│   │   │   │   │   ├── es2022.js.map
│   │   │   │   │   ├── es2022.object.d.ts
│   │   │   │   │   ├── es2022.object.d.ts.map
│   │   │   │   │   ├── es2022.object.js
│   │   │   │   │   ├── es2022.object.js.map
│   │   │   │   │   ├── es2022.regexp.d.ts
│   │   │   │   │   ├── es2022.regexp.d.ts.map
│   │   │   │   │   ├── es2022.regexp.js
│   │   │   │   │   ├── es2022.regexp.js.map
│   │   │   │   │   ├── es2022.sharedmemory.d.ts
│   │   │   │   │   ├── es2022.sharedmemory.d.ts.map
│   │   │   │   │   ├── es2022.sharedmemory.js
│   │   │   │   │   ├── es2022.sharedmemory.js.map
│   │   │   │   │   ├── es2022.string.d.ts
│   │   │   │   │   ├── es2022.string.d.ts.map
│   │   │   │   │   ├── es2022.string.js
│   │   │   │   │   ├── es2022.string.js.map
│   │   │   │   │   ├── es2023.array.d.ts
│   │   │   │   │   ├── es2023.array.d.ts.map
│   │   │   │   │   ├── es2023.array.js
│   │   │   │   │   ├── es2023.array.js.map
│   │   │   │   │   ├── es2023.d.ts
│   │   │   │   │   ├── es2023.d.ts.map
│   │   │   │   │   ├── es2023.full.d.ts
│   │   │   │   │   ├── es2023.full.d.ts.map
│   │   │   │   │   ├── es2023.full.js
│   │   │   │   │   ├── es2023.full.js.map
│   │   │   │   │   ├── es2023.js
│   │   │   │   │   ├── es2023.js.map
│   │   │   │   │   ├── es5.d.ts
│   │   │   │   │   ├── es5.d.ts.map
│   │   │   │   │   ├── es5.js
│   │   │   │   │   ├── es5.js.map
│   │   │   │   │   ├── es6.d.ts
│   │   │   │   │   ├── es6.d.ts.map
│   │   │   │   │   ├── es6.js
│   │   │   │   │   ├── es6.js.map
│   │   │   │   │   ├── es7.d.ts
│   │   │   │   │   ├── es7.d.ts.map
│   │   │   │   │   ├── es7.js
│   │   │   │   │   ├── es7.js.map
│   │   │   │   │   ├── esnext.array.d.ts
│   │   │   │   │   ├── esnext.array.d.ts.map
│   │   │   │   │   ├── esnext.array.js
│   │   │   │   │   ├── esnext.array.js.map
│   │   │   │   │   ├── esnext.asynciterable.d.ts
│   │   │   │   │   ├── esnext.asynciterable.d.ts.map
│   │   │   │   │   ├── esnext.asynciterable.js
│   │   │   │   │   ├── esnext.asynciterable.js.map
│   │   │   │   │   ├── esnext.bigint.d.ts
│   │   │   │   │   ├── esnext.bigint.d.ts.map
│   │   │   │   │   ├── esnext.bigint.js
│   │   │   │   │   ├── esnext.bigint.js.map
│   │   │   │   │   ├── esnext.d.ts
│   │   │   │   │   ├── esnext.d.ts.map
│   │   │   │   │   ├── esnext.full.d.ts
│   │   │   │   │   ├── esnext.full.d.ts.map
│   │   │   │   │   ├── esnext.full.js
│   │   │   │   │   ├── esnext.full.js.map
│   │   │   │   │   ├── esnext.intl.d.ts
│   │   │   │   │   ├── esnext.intl.d.ts.map
│   │   │   │   │   ├── esnext.intl.js
│   │   │   │   │   ├── esnext.intl.js.map
│   │   │   │   │   ├── esnext.js
│   │   │   │   │   ├── esnext.js.map
│   │   │   │   │   ├── esnext.promise.d.ts
│   │   │   │   │   ├── esnext.promise.d.ts.map
│   │   │   │   │   ├── esnext.promise.js
│   │   │   │   │   ├── esnext.promise.js.map
│   │   │   │   │   ├── esnext.string.d.ts
│   │   │   │   │   ├── esnext.string.d.ts.map
│   │   │   │   │   ├── esnext.string.js
│   │   │   │   │   ├── esnext.string.js.map
│   │   │   │   │   ├── esnext.symbol.d.ts
│   │   │   │   │   ├── esnext.symbol.d.ts.map
│   │   │   │   │   ├── esnext.symbol.js
│   │   │   │   │   ├── esnext.symbol.js.map
│   │   │   │   │   ├── esnext.weakref.d.ts
│   │   │   │   │   ├── esnext.weakref.d.ts.map
│   │   │   │   │   ├── esnext.weakref.js
│   │   │   │   │   ├── esnext.weakref.js.map
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── index.d.ts.map
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── index.js.map
│   │   │   │   │   ├── lib.d.ts
│   │   │   │   │   ├── lib.d.ts.map
│   │   │   │   │   ├── lib.js
│   │   │   │   │   ├── lib.js.map
│   │   │   │   │   ├── scripthost.d.ts
│   │   │   │   │   ├── scripthost.d.ts.map
│   │   │   │   │   ├── scripthost.js
│   │   │   │   │   ├── scripthost.js.map
│   │   │   │   │   ├── webworker.d.ts
│   │   │   │   │   ├── webworker.d.ts.map
│   │   │   │   │   ├── webworker.importscripts.d.ts
│   │   │   │   │   ├── webworker.importscripts.d.ts.map
│   │   │   │   │   ├── webworker.importscripts.js
│   │   │   │   │   ├── webworker.importscripts.js.map
│   │   │   │   │   ├── webworker.iterable.d.ts
│   │   │   │   │   ├── webworker.iterable.d.ts.map
│   │   │   │   │   ├── webworker.iterable.js
│   │   │   │   │   ├── webworker.iterable.js.map
│   │   │   │   │   ├── webworker.js
│   │   │   │   │   └── webworker.js.map
│   │   │   │   ├── referencer
│   │   │   │   │   ├── ClassVisitor.d.ts
│   │   │   │   │   ├── ClassVisitor.d.ts.map
│   │   │   │   │   ├── ClassVisitor.js
│   │   │   │   │   ├── ClassVisitor.js.map
│   │   │   │   │   ├── ExportVisitor.d.ts
│   │   │   │   │   ├── ExportVisitor.d.ts.map
│   │   │   │   │   ├── ExportVisitor.js
│   │   │   │   │   ├── ExportVisitor.js.map
│   │   │   │   │   ├── ImportVisitor.d.ts
│   │   │   │   │   ├── ImportVisitor.d.ts.map
│   │   │   │   │   ├── ImportVisitor.js
│   │   │   │   │   ├── ImportVisitor.js.map
│   │   │   │   │   ├── PatternVisitor.d.ts
│   │   │   │   │   ├── PatternVisitor.d.ts.map
│   │   │   │   │   ├── PatternVisitor.js
│   │   │   │   │   ├── PatternVisitor.js.map
│   │   │   │   │   ├── Reference.d.ts
│   │   │   │   │   ├── Reference.d.ts.map
│   │   │   │   │   ├── Reference.js
│   │   │   │   │   ├── Reference.js.map
│   │   │   │   │   ├── Referencer.d.ts
│   │   │   │   │   ├── Referencer.d.ts.map
│   │   │   │   │   ├── Referencer.js
│   │   │   │   │   ├── Referencer.js.map
│   │   │   │   │   ├── TypeVisitor.d.ts
│   │   │   │   │   ├── TypeVisitor.d.ts.map
│   │   │   │   │   ├── TypeVisitor.js
│   │   │   │   │   ├── TypeVisitor.js.map
│   │   │   │   │   ├── Visitor.d.ts
│   │   │   │   │   ├── Visitor.d.ts.map
│   │   │   │   │   ├── Visitor.js
│   │   │   │   │   ├── Visitor.js.map
│   │   │   │   │   ├── VisitorBase.d.ts
│   │   │   │   │   ├── VisitorBase.d.ts.map
│   │   │   │   │   ├── VisitorBase.js
│   │   │   │   │   ├── VisitorBase.js.map
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── index.d.ts.map
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── index.js.map
│   │   │   │   ├── scope
│   │   │   │   │   ├── BlockScope.d.ts
│   │   │   │   │   ├── BlockScope.d.ts.map
│   │   │   │   │   ├── BlockScope.js
│   │   │   │   │   ├── BlockScope.js.map
│   │   │   │   │   ├── CatchScope.d.ts
│   │   │   │   │   ├── CatchScope.d.ts.map
│   │   │   │   │   ├── CatchScope.js
│   │   │   │   │   ├── CatchScope.js.map
│   │   │   │   │   ├── ClassFieldInitializerScope.d.ts
│   │   │   │   │   ├── ClassFieldInitializerScope.d.ts.map
│   │   │   │   │   ├── ClassFieldInitializerScope.js
│   │   │   │   │   ├── ClassFieldInitializerScope.js.map
│   │   │   │   │   ├── ClassScope.d.ts
│   │   │   │   │   ├── ClassScope.d.ts.map
│   │   │   │   │   ├── ClassScope.js
│   │   │   │   │   ├── ClassScope.js.map
│   │   │   │   │   ├── ClassStaticBlockScope.d.ts
│   │   │   │   │   ├── ClassStaticBlockScope.d.ts.map
│   │   │   │   │   ├── ClassStaticBlockScope.js
│   │   │   │   │   ├── ClassStaticBlockScope.js.map
│   │   │   │   │   ├── ConditionalTypeScope.d.ts
│   │   │   │   │   ├── ConditionalTypeScope.d.ts.map
│   │   │   │   │   ├── ConditionalTypeScope.js
│   │   │   │   │   ├── ConditionalTypeScope.js.map
│   │   │   │   │   ├── ForScope.d.ts
│   │   │   │   │   ├── ForScope.d.ts.map
│   │   │   │   │   ├── ForScope.js
│   │   │   │   │   ├── ForScope.js.map
│   │   │   │   │   ├── FunctionExpressionNameScope.d.ts
│   │   │   │   │   ├── FunctionExpressionNameScope.d.ts.map
│   │   │   │   │   ├── FunctionExpressionNameScope.js
│   │   │   │   │   ├── FunctionExpressionNameScope.js.map
│   │   │   │   │   ├── FunctionScope.d.ts
│   │   │   │   │   ├── FunctionScope.d.ts.map
│   │   │   │   │   ├── FunctionScope.js
│   │   │   │   │   ├── FunctionScope.js.map
│   │   │   │   │   ├── FunctionTypeScope.d.ts
│   │   │   │   │   ├── FunctionTypeScope.d.ts.map
│   │   │   │   │   ├── FunctionTypeScope.js
│   │   │   │   │   ├── FunctionTypeScope.js.map
│   │   │   │   │   ├── GlobalScope.d.ts
│   │   │   │   │   ├── GlobalScope.d.ts.map
│   │   │   │   │   ├── GlobalScope.js
│   │   │   │   │   ├── GlobalScope.js.map
│   │   │   │   │   ├── MappedTypeScope.d.ts
│   │   │   │   │   ├── MappedTypeScope.d.ts.map
│   │   │   │   │   ├── MappedTypeScope.js
│   │   │   │   │   ├── MappedTypeScope.js.map
│   │   │   │   │   ├── ModuleScope.d.ts
│   │   │   │   │   ├── ModuleScope.d.ts.map
│   │   │   │   │   ├── ModuleScope.js
│   │   │   │   │   ├── ModuleScope.js.map
│   │   │   │   │   ├── Scope.d.ts
│   │   │   │   │   ├── Scope.d.ts.map
│   │   │   │   │   ├── Scope.js
│   │   │   │   │   ├── Scope.js.map
│   │   │   │   │   ├── ScopeBase.d.ts
│   │   │   │   │   ├── ScopeBase.d.ts.map
│   │   │   │   │   ├── ScopeBase.js
│   │   │   │   │   ├── ScopeBase.js.map
│   │   │   │   │   ├── ScopeType.d.ts
│   │   │   │   │   ├── ScopeType.d.ts.map
│   │   │   │   │   ├── ScopeType.js
│   │   │   │   │   ├── ScopeType.js.map
│   │   │   │   │   ├── SwitchScope.d.ts
│   │   │   │   │   ├── SwitchScope.d.ts.map
│   │   │   │   │   ├── SwitchScope.js
│   │   │   │   │   ├── SwitchScope.js.map
│   │   │   │   │   ├── TSEnumScope.d.ts
│   │   │   │   │   ├── TSEnumScope.d.ts.map
│   │   │   │   │   ├── TSEnumScope.js
│   │   │   │   │   ├── TSEnumScope.js.map
│   │   │   │   │   ├── TSModuleScope.d.ts
│   │   │   │   │   ├── TSModuleScope.d.ts.map
│   │   │   │   │   ├── TSModuleScope.js
│   │   │   │   │   ├── TSModuleScope.js.map
│   │   │   │   │   ├── TypeScope.d.ts
│   │   │   │   │   ├── TypeScope.d.ts.map
│   │   │   │   │   ├── TypeScope.js
│   │   │   │   │   ├── TypeScope.js.map
│   │   │   │   │   ├── WithScope.d.ts
│   │   │   │   │   ├── WithScope.d.ts.map
│   │   │   │   │   ├── WithScope.js
│   │   │   │   │   ├── WithScope.js.map
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── index.d.ts.map
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── index.js.map
│   │   │   │   └── variable
│   │   │   │       ├── ESLintScopeVariable.d.ts
│   │   │   │       ├── ESLintScopeVariable.d.ts.map
│   │   │   │       ├── ESLintScopeVariable.js
│   │   │   │       ├── ESLintScopeVariable.js.map
│   │   │   │       ├── ImplicitLibVariable.d.ts
│   │   │   │       ├── ImplicitLibVariable.d.ts.map
│   │   │   │       ├── ImplicitLibVariable.js
│   │   │   │       ├── ImplicitLibVariable.js.map
│   │   │   │       ├── Variable.d.ts
│   │   │   │       ├── Variable.d.ts.map
│   │   │   │       ├── Variable.js
│   │   │   │       ├── Variable.js.map
│   │   │   │       ├── VariableBase.d.ts
│   │   │   │       ├── VariableBase.d.ts.map
│   │   │   │       ├── VariableBase.js
│   │   │   │       ├── VariableBase.js.map
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── index.d.ts.map
│   │   │   │       ├── index.js
│   │   │   │       └── index.js.map
│   │   │   └── package.json
│   │   ├── type-utils
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── _ts3.4
│   │   │   │   └── dist
│   │   │   │       ├── containsAllTypesByName.d.ts
│   │   │   │       ├── getConstrainedTypeAtLocation.d.ts
│   │   │   │       ├── getContextualType.d.ts
│   │   │   │       ├── getDeclaration.d.ts
│   │   │   │       ├── getSourceFileOfNode.d.ts
│   │   │   │       ├── getTokenAtPosition.d.ts
│   │   │   │       ├── getTypeArguments.d.ts
│   │   │   │       ├── getTypeName.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── isTypeReadonly.d.ts
│   │   │   │       ├── isUnsafeAssignment.d.ts
│   │   │   │       ├── predicates.d.ts
│   │   │   │       ├── propertyTypes.d.ts
│   │   │   │       ├── requiresQuoting.d.ts
│   │   │   │       └── typeFlagUtils.d.ts
│   │   │   ├── dist
│   │   │   │   ├── containsAllTypesByName.d.ts
│   │   │   │   ├── containsAllTypesByName.d.ts.map
│   │   │   │   ├── containsAllTypesByName.js
│   │   │   │   ├── containsAllTypesByName.js.map
│   │   │   │   ├── getConstrainedTypeAtLocation.d.ts
│   │   │   │   ├── getConstrainedTypeAtLocation.d.ts.map
│   │   │   │   ├── getConstrainedTypeAtLocation.js
│   │   │   │   ├── getConstrainedTypeAtLocation.js.map
│   │   │   │   ├── getContextualType.d.ts
│   │   │   │   ├── getContextualType.d.ts.map
│   │   │   │   ├── getContextualType.js
│   │   │   │   ├── getContextualType.js.map
│   │   │   │   ├── getDeclaration.d.ts
│   │   │   │   ├── getDeclaration.d.ts.map
│   │   │   │   ├── getDeclaration.js
│   │   │   │   ├── getDeclaration.js.map
│   │   │   │   ├── getSourceFileOfNode.d.ts
│   │   │   │   ├── getSourceFileOfNode.d.ts.map
│   │   │   │   ├── getSourceFileOfNode.js
│   │   │   │   ├── getSourceFileOfNode.js.map
│   │   │   │   ├── getTokenAtPosition.d.ts
│   │   │   │   ├── getTokenAtPosition.d.ts.map
│   │   │   │   ├── getTokenAtPosition.js
│   │   │   │   ├── getTokenAtPosition.js.map
│   │   │   │   ├── getTypeArguments.d.ts
│   │   │   │   ├── getTypeArguments.d.ts.map
│   │   │   │   ├── getTypeArguments.js
│   │   │   │   ├── getTypeArguments.js.map
│   │   │   │   ├── getTypeName.d.ts
│   │   │   │   ├── getTypeName.d.ts.map
│   │   │   │   ├── getTypeName.js
│   │   │   │   ├── getTypeName.js.map
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.d.ts.map
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── isTypeReadonly.d.ts
│   │   │   │   ├── isTypeReadonly.d.ts.map
│   │   │   │   ├── isTypeReadonly.js
│   │   │   │   ├── isTypeReadonly.js.map
│   │   │   │   ├── isUnsafeAssignment.d.ts
│   │   │   │   ├── isUnsafeAssignment.d.ts.map
│   │   │   │   ├── isUnsafeAssignment.js
│   │   │   │   ├── isUnsafeAssignment.js.map
│   │   │   │   ├── predicates.d.ts
│   │   │   │   ├── predicates.d.ts.map
│   │   │   │   ├── predicates.js
│   │   │   │   ├── predicates.js.map
│   │   │   │   ├── propertyTypes.d.ts
│   │   │   │   ├── propertyTypes.d.ts.map
│   │   │   │   ├── propertyTypes.js
│   │   │   │   ├── propertyTypes.js.map
│   │   │   │   ├── requiresQuoting.d.ts
│   │   │   │   ├── requiresQuoting.d.ts.map
│   │   │   │   ├── requiresQuoting.js
│   │   │   │   ├── requiresQuoting.js.map
│   │   │   │   ├── typeFlagUtils.d.ts
│   │   │   │   ├── typeFlagUtils.d.ts.map
│   │   │   │   ├── typeFlagUtils.js
│   │   │   │   └── typeFlagUtils.js.map
│   │   │   └── package.json
│   │   ├── types
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── _ts3.4
│   │   │   │   └── dist
│   │   │   │       ├── generated
│   │   │   │       │   └── ast-spec.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── lib.d.ts
│   │   │   │       ├── parser-options.d.ts
│   │   │   │       └── ts-estree.d.ts
│   │   │   ├── dist
│   │   │   │   ├── generated
│   │   │   │   │   ├── ast-spec.d.ts
│   │   │   │   │   ├── ast-spec.d.ts.map
│   │   │   │   │   ├── ast-spec.js
│   │   │   │   │   └── ast-spec.js.map
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.d.ts.map
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── lib.d.ts
│   │   │   │   ├── lib.d.ts.map
│   │   │   │   ├── lib.js
│   │   │   │   ├── lib.js.map
│   │   │   │   ├── parser-options.d.ts
│   │   │   │   ├── parser-options.d.ts.map
│   │   │   │   ├── parser-options.js
│   │   │   │   ├── parser-options.js.map
│   │   │   │   ├── ts-estree.d.ts
│   │   │   │   ├── ts-estree.d.ts.map
│   │   │   │   ├── ts-estree.js
│   │   │   │   └── ts-estree.js.map
│   │   │   └── package.json
│   │   ├── typescript-estree
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── _ts3.4
│   │   │   │   └── dist
│   │   │   │       ├── ast-converter.d.ts
│   │   │   │       ├── clear-caches.d.ts
│   │   │   │       ├── convert-comments.d.ts
│   │   │   │       ├── convert.d.ts
│   │   │   │       ├── create-program
│   │   │   │       │   ├── WatchCompilerHostOfConfigFile.d.ts
│   │   │   │       │   ├── createDefaultProgram.d.ts
│   │   │   │       │   ├── createIsolatedProgram.d.ts
│   │   │   │       │   ├── createProjectProgram.d.ts
│   │   │   │       │   ├── createSourceFile.d.ts
│   │   │   │       │   ├── describeFilePath.d.ts
│   │   │   │       │   ├── getScriptKind.d.ts
│   │   │   │       │   ├── getWatchProgramsForProjects.d.ts
│   │   │   │       │   ├── shared.d.ts
│   │   │   │       │   └── useProvidedPrograms.d.ts
│   │   │   │       ├── getModifiers.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── jsx
│   │   │   │       │   └── xhtml-entities.d.ts
│   │   │   │       ├── node-utils.d.ts
│   │   │   │       ├── parseSettings
│   │   │   │       │   ├── ExpiringCache.d.ts
│   │   │   │       │   ├── createParseSettings.d.ts
│   │   │   │       │   ├── getProjectConfigFiles.d.ts
│   │   │   │       │   ├── index.d.ts
│   │   │   │       │   ├── inferSingleRun.d.ts
│   │   │   │       │   ├── resolveProjectList.d.ts
│   │   │   │       │   └── warnAboutTSVersion.d.ts
│   │   │   │       ├── parser-options.d.ts
│   │   │   │       ├── parser.d.ts
│   │   │   │       ├── semantic-or-syntactic-errors.d.ts
│   │   │   │       ├── simple-traverse.d.ts
│   │   │   │       ├── ts-estree
│   │   │   │       │   ├── estree-to-ts-node-types.d.ts
│   │   │   │       │   ├── index.d.ts
│   │   │   │       │   └── ts-nodes.d.ts
│   │   │   │       └── version-check.d.ts
│   │   │   ├── dist
│   │   │   │   ├── ast-converter.d.ts
│   │   │   │   ├── ast-converter.d.ts.map
│   │   │   │   ├── ast-converter.js
│   │   │   │   ├── ast-converter.js.map
│   │   │   │   ├── clear-caches.d.ts
│   │   │   │   ├── clear-caches.d.ts.map
│   │   │   │   ├── clear-caches.js
│   │   │   │   ├── clear-caches.js.map
│   │   │   │   ├── convert-comments.d.ts
│   │   │   │   ├── convert-comments.d.ts.map
│   │   │   │   ├── convert-comments.js
│   │   │   │   ├── convert-comments.js.map
│   │   │   │   ├── convert.d.ts
│   │   │   │   ├── convert.d.ts.map
│   │   │   │   ├── convert.js
│   │   │   │   ├── convert.js.map
│   │   │   │   ├── create-program
│   │   │   │   │   ├── WatchCompilerHostOfConfigFile.d.ts
│   │   │   │   │   ├── WatchCompilerHostOfConfigFile.d.ts.map
│   │   │   │   │   ├── WatchCompilerHostOfConfigFile.js
│   │   │   │   │   ├── WatchCompilerHostOfConfigFile.js.map
│   │   │   │   │   ├── createDefaultProgram.d.ts
│   │   │   │   │   ├── createDefaultProgram.d.ts.map
│   │   │   │   │   ├── createDefaultProgram.js
│   │   │   │   │   ├── createDefaultProgram.js.map
│   │   │   │   │   ├── createIsolatedProgram.d.ts
│   │   │   │   │   ├── createIsolatedProgram.d.ts.map
│   │   │   │   │   ├── createIsolatedProgram.js
│   │   │   │   │   ├── createIsolatedProgram.js.map
│   │   │   │   │   ├── createProjectProgram.d.ts
│   │   │   │   │   ├── createProjectProgram.d.ts.map
│   │   │   │   │   ├── createProjectProgram.js
│   │   │   │   │   ├── createProjectProgram.js.map
│   │   │   │   │   ├── createSourceFile.d.ts
│   │   │   │   │   ├── createSourceFile.d.ts.map
│   │   │   │   │   ├── createSourceFile.js
│   │   │   │   │   ├── createSourceFile.js.map
│   │   │   │   │   ├── describeFilePath.d.ts
│   │   │   │   │   ├── describeFilePath.d.ts.map
│   │   │   │   │   ├── describeFilePath.js
│   │   │   │   │   ├── describeFilePath.js.map
│   │   │   │   │   ├── getScriptKind.d.ts
│   │   │   │   │   ├── getScriptKind.d.ts.map
│   │   │   │   │   ├── getScriptKind.js
│   │   │   │   │   ├── getScriptKind.js.map
│   │   │   │   │   ├── getWatchProgramsForProjects.d.ts
│   │   │   │   │   ├── getWatchProgramsForProjects.d.ts.map
│   │   │   │   │   ├── getWatchProgramsForProjects.js
│   │   │   │   │   ├── getWatchProgramsForProjects.js.map
│   │   │   │   │   ├── shared.d.ts
│   │   │   │   │   ├── shared.d.ts.map
│   │   │   │   │   ├── shared.js
│   │   │   │   │   ├── shared.js.map
│   │   │   │   │   ├── useProvidedPrograms.d.ts
│   │   │   │   │   ├── useProvidedPrograms.d.ts.map
│   │   │   │   │   ├── useProvidedPrograms.js
│   │   │   │   │   └── useProvidedPrograms.js.map
│   │   │   │   ├── getModifiers.d.ts
│   │   │   │   ├── getModifiers.d.ts.map
│   │   │   │   ├── getModifiers.js
│   │   │   │   ├── getModifiers.js.map
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.d.ts.map
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── jsx
│   │   │   │   │   ├── xhtml-entities.d.ts
│   │   │   │   │   ├── xhtml-entities.d.ts.map
│   │   │   │   │   ├── xhtml-entities.js
│   │   │   │   │   └── xhtml-entities.js.map
│   │   │   │   ├── node-utils.d.ts
│   │   │   │   ├── node-utils.d.ts.map
│   │   │   │   ├── node-utils.js
│   │   │   │   ├── node-utils.js.map
│   │   │   │   ├── parseSettings
│   │   │   │   │   ├── ExpiringCache.d.ts
│   │   │   │   │   ├── ExpiringCache.d.ts.map
│   │   │   │   │   ├── ExpiringCache.js
│   │   │   │   │   ├── ExpiringCache.js.map
│   │   │   │   │   ├── createParseSettings.d.ts
│   │   │   │   │   ├── createParseSettings.d.ts.map
│   │   │   │   │   ├── createParseSettings.js
│   │   │   │   │   ├── createParseSettings.js.map
│   │   │   │   │   ├── getProjectConfigFiles.d.ts
│   │   │   │   │   ├── getProjectConfigFiles.d.ts.map
│   │   │   │   │   ├── getProjectConfigFiles.js
│   │   │   │   │   ├── getProjectConfigFiles.js.map
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── index.d.ts.map
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── index.js.map
│   │   │   │   │   ├── inferSingleRun.d.ts
│   │   │   │   │   ├── inferSingleRun.d.ts.map
│   │   │   │   │   ├── inferSingleRun.js
│   │   │   │   │   ├── inferSingleRun.js.map
│   │   │   │   │   ├── resolveProjectList.d.ts
│   │   │   │   │   ├── resolveProjectList.d.ts.map
│   │   │   │   │   ├── resolveProjectList.js
│   │   │   │   │   ├── resolveProjectList.js.map
│   │   │   │   │   ├── warnAboutTSVersion.d.ts
│   │   │   │   │   ├── warnAboutTSVersion.d.ts.map
│   │   │   │   │   ├── warnAboutTSVersion.js
│   │   │   │   │   └── warnAboutTSVersion.js.map
│   │   │   │   ├── parser-options.d.ts
│   │   │   │   ├── parser-options.d.ts.map
│   │   │   │   ├── parser-options.js
│   │   │   │   ├── parser-options.js.map
│   │   │   │   ├── parser.d.ts
│   │   │   │   ├── parser.d.ts.map
│   │   │   │   ├── parser.js
│   │   │   │   ├── parser.js.map
│   │   │   │   ├── semantic-or-syntactic-errors.d.ts
│   │   │   │   ├── semantic-or-syntactic-errors.d.ts.map
│   │   │   │   ├── semantic-or-syntactic-errors.js
│   │   │   │   ├── semantic-or-syntactic-errors.js.map
│   │   │   │   ├── simple-traverse.d.ts
│   │   │   │   ├── simple-traverse.d.ts.map
│   │   │   │   ├── simple-traverse.js
│   │   │   │   ├── simple-traverse.js.map
│   │   │   │   ├── ts-estree
│   │   │   │   │   ├── estree-to-ts-node-types.d.ts
│   │   │   │   │   ├── estree-to-ts-node-types.d.ts.map
│   │   │   │   │   ├── estree-to-ts-node-types.js
│   │   │   │   │   ├── estree-to-ts-node-types.js.map
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── index.d.ts.map
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── index.js.map
│   │   │   │   │   ├── ts-nodes.d.ts
│   │   │   │   │   ├── ts-nodes.d.ts.map
│   │   │   │   │   ├── ts-nodes.js
│   │   │   │   │   └── ts-nodes.js.map
│   │   │   │   ├── version-check.d.ts
│   │   │   │   ├── version-check.d.ts.map
│   │   │   │   ├── version-check.js
│   │   │   │   └── version-check.js.map
│   │   │   └── package.json
│   │   ├── utils
│   │   │   ├── LICENSE
│   │   │   ├── README.md
│   │   │   ├── _ts3.4
│   │   │   │   └── dist
│   │   │   │       ├── ast-utils
│   │   │   │       │   ├── eslint-utils
│   │   │   │       │   │   ├── PatternMatcher.d.ts
│   │   │   │       │   │   ├── ReferenceTracker.d.ts
│   │   │   │       │   │   ├── astUtilities.d.ts
│   │   │   │       │   │   ├── index.d.ts
│   │   │   │       │   │   ├── predicates.d.ts
│   │   │   │       │   │   └── scopeAnalysis.d.ts
│   │   │   │       │   ├── helpers.d.ts
│   │   │   │       │   ├── index.d.ts
│   │   │   │       │   ├── misc.d.ts
│   │   │   │       │   └── predicates.d.ts
│   │   │   │       ├── eslint-utils
│   │   │   │       │   ├── InferTypesFromRule.d.ts
│   │   │   │       │   ├── RuleCreator.d.ts
│   │   │   │       │   ├── applyDefault.d.ts
│   │   │   │       │   ├── batchedSingleLineTests.d.ts
│   │   │   │       │   ├── deepMerge.d.ts
│   │   │   │       │   ├── getParserServices.d.ts
│   │   │   │       │   ├── index.d.ts
│   │   │   │       │   ├── nullThrows.d.ts
│   │   │   │       │   └── rule-tester
│   │   │   │       │       ├── RuleTester.d.ts
│   │   │   │       │       └── dependencyConstraints.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── json-schema.d.ts
│   │   │   │       ├── ts-eslint
│   │   │   │       │   ├── AST.d.ts
│   │   │   │       │   ├── CLIEngine.d.ts
│   │   │   │       │   ├── ESLint.d.ts
│   │   │   │       │   ├── Linter.d.ts
│   │   │   │       │   ├── ParserOptions.d.ts
│   │   │   │       │   ├── Rule.d.ts
│   │   │   │       │   ├── RuleTester.d.ts
│   │   │   │       │   ├── Scope.d.ts
│   │   │   │       │   ├── SourceCode.d.ts
│   │   │   │       │   └── index.d.ts
│   │   │   │       ├── ts-eslint-scope
│   │   │   │       │   ├── Definition.d.ts
│   │   │   │       │   ├── Options.d.ts
│   │   │   │       │   ├── PatternVisitor.d.ts
│   │   │   │       │   ├── Reference.d.ts
│   │   │   │       │   ├── Referencer.d.ts
│   │   │   │       │   ├── Scope.d.ts
│   │   │   │       │   ├── ScopeManager.d.ts
│   │   │   │       │   ├── Variable.d.ts
│   │   │   │       │   ├── analyze.d.ts
│   │   │   │       │   └── index.d.ts
│   │   │   │       └── ts-estree.d.ts
│   │   │   ├── dist
│   │   │   │   ├── ast-utils
│   │   │   │   │   ├── eslint-utils
│   │   │   │   │   │   ├── PatternMatcher.d.ts
│   │   │   │   │   │   ├── PatternMatcher.d.ts.map
│   │   │   │   │   │   ├── PatternMatcher.js
│   │   │   │   │   │   ├── PatternMatcher.js.map
│   │   │   │   │   │   ├── ReferenceTracker.d.ts
│   │   │   │   │   │   ├── ReferenceTracker.d.ts.map
│   │   │   │   │   │   ├── ReferenceTracker.js
│   │   │   │   │   │   ├── ReferenceTracker.js.map
│   │   │   │   │   │   ├── astUtilities.d.ts
│   │   │   │   │   │   ├── astUtilities.d.ts.map
│   │   │   │   │   │   ├── astUtilities.js
│   │   │   │   │   │   ├── astUtilities.js.map
│   │   │   │   │   │   ├── index.d.ts
│   │   │   │   │   │   ├── index.d.ts.map
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── index.js.map
│   │   │   │   │   │   ├── predicates.d.ts
│   │   │   │   │   │   ├── predicates.d.ts.map
│   │   │   │   │   │   ├── predicates.js
│   │   │   │   │   │   ├── predicates.js.map
│   │   │   │   │   │   ├── scopeAnalysis.d.ts
│   │   │   │   │   │   ├── scopeAnalysis.d.ts.map
│   │   │   │   │   │   ├── scopeAnalysis.js
│   │   │   │   │   │   └── scopeAnalysis.js.map
│   │   │   │   │   ├── helpers.d.ts
│   │   │   │   │   ├── helpers.d.ts.map
│   │   │   │   │   ├── helpers.js
│   │   │   │   │   ├── helpers.js.map
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── index.d.ts.map
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── index.js.map
│   │   │   │   │   ├── misc.d.ts
│   │   │   │   │   ├── misc.d.ts.map
│   │   │   │   │   ├── misc.js
│   │   │   │   │   ├── misc.js.map
│   │   │   │   │   ├── predicates.d.ts
│   │   │   │   │   ├── predicates.d.ts.map
│   │   │   │   │   ├── predicates.js
│   │   │   │   │   └── predicates.js.map
│   │   │   │   ├── eslint-utils
│   │   │   │   │   ├── InferTypesFromRule.d.ts
│   │   │   │   │   ├── InferTypesFromRule.d.ts.map
│   │   │   │   │   ├── InferTypesFromRule.js
│   │   │   │   │   ├── InferTypesFromRule.js.map
│   │   │   │   │   ├── RuleCreator.d.ts
│   │   │   │   │   ├── RuleCreator.d.ts.map
│   │   │   │   │   ├── RuleCreator.js
│   │   │   │   │   ├── RuleCreator.js.map
│   │   │   │   │   ├── applyDefault.d.ts
│   │   │   │   │   ├── applyDefault.d.ts.map
│   │   │   │   │   ├── applyDefault.js
│   │   │   │   │   ├── applyDefault.js.map
│   │   │   │   │   ├── batchedSingleLineTests.d.ts
│   │   │   │   │   ├── batchedSingleLineTests.d.ts.map
│   │   │   │   │   ├── batchedSingleLineTests.js
│   │   │   │   │   ├── batchedSingleLineTests.js.map
│   │   │   │   │   ├── deepMerge.d.ts
│   │   │   │   │   ├── deepMerge.d.ts.map
│   │   │   │   │   ├── deepMerge.js
│   │   │   │   │   ├── deepMerge.js.map
│   │   │   │   │   ├── getParserServices.d.ts
│   │   │   │   │   ├── getParserServices.d.ts.map
│   │   │   │   │   ├── getParserServices.js
│   │   │   │   │   ├── getParserServices.js.map
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── index.d.ts.map
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── index.js.map
│   │   │   │   │   ├── nullThrows.d.ts
│   │   │   │   │   ├── nullThrows.d.ts.map
│   │   │   │   │   ├── nullThrows.js
│   │   │   │   │   ├── nullThrows.js.map
│   │   │   │   │   └── rule-tester
│   │   │   │   │       ├── RuleTester.d.ts
│   │   │   │   │       ├── RuleTester.d.ts.map
│   │   │   │   │       ├── RuleTester.js
│   │   │   │   │       ├── RuleTester.js.map
│   │   │   │   │       ├── dependencyConstraints.d.ts
│   │   │   │   │       ├── dependencyConstraints.d.ts.map
│   │   │   │   │       ├── dependencyConstraints.js
│   │   │   │   │       └── dependencyConstraints.js.map
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.d.ts.map
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── json-schema.d.ts
│   │   │   │   ├── json-schema.d.ts.map
│   │   │   │   ├── json-schema.js
│   │   │   │   ├── json-schema.js.map
│   │   │   │   ├── ts-eslint
│   │   │   │   │   ├── AST.d.ts
│   │   │   │   │   ├── AST.d.ts.map
│   │   │   │   │   ├── AST.js
│   │   │   │   │   ├── AST.js.map
│   │   │   │   │   ├── CLIEngine.d.ts
│   │   │   │   │   ├── CLIEngine.d.ts.map
│   │   │   │   │   ├── CLIEngine.js
│   │   │   │   │   ├── CLIEngine.js.map
│   │   │   │   │   ├── ESLint.d.ts
│   │   │   │   │   ├── ESLint.d.ts.map
│   │   │   │   │   ├── ESLint.js
│   │   │   │   │   ├── ESLint.js.map
│   │   │   │   │   ├── Linter.d.ts
│   │   │   │   │   ├── Linter.d.ts.map
│   │   │   │   │   ├── Linter.js
│   │   │   │   │   ├── Linter.js.map
│   │   │   │   │   ├── ParserOptions.d.ts
│   │   │   │   │   ├── ParserOptions.d.ts.map
│   │   │   │   │   ├── ParserOptions.js
│   │   │   │   │   ├── ParserOptions.js.map
│   │   │   │   │   ├── Rule.d.ts
│   │   │   │   │   ├── Rule.d.ts.map
│   │   │   │   │   ├── Rule.js
│   │   │   │   │   ├── Rule.js.map
│   │   │   │   │   ├── RuleTester.d.ts
│   │   │   │   │   ├── RuleTester.d.ts.map
│   │   │   │   │   ├── RuleTester.js
│   │   │   │   │   ├── RuleTester.js.map
│   │   │   │   │   ├── Scope.d.ts
│   │   │   │   │   ├── Scope.d.ts.map
│   │   │   │   │   ├── Scope.js
│   │   │   │   │   ├── Scope.js.map
│   │   │   │   │   ├── SourceCode.d.ts
│   │   │   │   │   ├── SourceCode.d.ts.map
│   │   │   │   │   ├── SourceCode.js
│   │   │   │   │   ├── SourceCode.js.map
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── index.d.ts.map
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── index.js.map
│   │   │   │   ├── ts-eslint-scope
│   │   │   │   │   ├── Definition.d.ts
│   │   │   │   │   ├── Definition.d.ts.map
│   │   │   │   │   ├── Definition.js
│   │   │   │   │   ├── Definition.js.map
│   │   │   │   │   ├── Options.d.ts
│   │   │   │   │   ├── Options.d.ts.map
│   │   │   │   │   ├── Options.js
│   │   │   │   │   ├── Options.js.map
│   │   │   │   │   ├── PatternVisitor.d.ts
│   │   │   │   │   ├── PatternVisitor.d.ts.map
│   │   │   │   │   ├── PatternVisitor.js
│   │   │   │   │   ├── PatternVisitor.js.map
│   │   │   │   │   ├── Reference.d.ts
│   │   │   │   │   ├── Reference.d.ts.map
│   │   │   │   │   ├── Reference.js
│   │   │   │   │   ├── Reference.js.map
│   │   │   │   │   ├── Referencer.d.ts
│   │   │   │   │   ├── Referencer.d.ts.map
│   │   │   │   │   ├── Referencer.js
│   │   │   │   │   ├── Referencer.js.map
│   │   │   │   │   ├── Scope.d.ts
│   │   │   │   │   ├── Scope.d.ts.map
│   │   │   │   │   ├── Scope.js
│   │   │   │   │   ├── Scope.js.map
│   │   │   │   │   ├── ScopeManager.d.ts
│   │   │   │   │   ├── ScopeManager.d.ts.map
│   │   │   │   │   ├── ScopeManager.js
│   │   │   │   │   ├── ScopeManager.js.map
│   │   │   │   │   ├── Variable.d.ts
│   │   │   │   │   ├── Variable.d.ts.map
│   │   │   │   │   ├── Variable.js
│   │   │   │   │   ├── Variable.js.map
│   │   │   │   │   ├── analyze.d.ts
│   │   │   │   │   ├── analyze.d.ts.map
│   │   │   │   │   ├── analyze.js
│   │   │   │   │   ├── analyze.js.map
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── index.d.ts.map
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── index.js.map
│   │   │   │   ├── ts-estree.d.ts
│   │   │   │   ├── ts-estree.d.ts.map
│   │   │   │   ├── ts-estree.js
│   │   │   │   └── ts-estree.js.map
│   │   │   └── package.json
│   │   └── visitor-keys
│   │       ├── LICENSE
│   │       ├── README.md
│   │       ├── _ts3.4
│   │       │   └── dist
│   │       │       ├── get-keys.d.ts
│   │       │       ├── index.d.ts
│   │       │       └── visitor-keys.d.ts
│   │       ├── dist
│   │       │   ├── get-keys.d.ts
│   │       │   ├── get-keys.d.ts.map
│   │       │   ├── get-keys.js
│   │       │   ├── get-keys.js.map
│   │       │   ├── index.d.ts
│   │       │   ├── index.d.ts.map
│   │       │   ├── index.js
│   │       │   ├── index.js.map
│   │       │   ├── visitor-keys.d.ts
│   │       │   ├── visitor-keys.d.ts.map
│   │       │   ├── visitor-keys.js
│   │       │   └── visitor-keys.js.map
│   │       └── package.json
│   ├── @ungap
│   │   └── structured-clone
│   │       ├── .github
│   │       │   └── workflows
│   │       │       └── node.js.yml
│   │       ├── LICENSE
│   │       ├── README.md
│   │       ├── cjs
│   │       │   ├── deserialize.js
│   │       │   ├── index.js
│   │       │   ├── json.js
│   │       │   ├── package.json
│   │       │   ├── serialize.js
│   │       │   └── types.js
│   │       ├── esm
│   │       │   ├── deserialize.js
│   │       │   ├── index.js
│   │       │   ├── json.js
│   │       │   ├── serialize.js
│   │       │   └── types.js
│   │       ├── package.json
│   │       └── structured-json.js
│   ├── @vladfrangu
│   │   └── async_event_emitter
│   │       ├── CHANGELOG.md
│   │       ├── LICENSE.md
│   │       ├── README.md
│   │       ├── THIRD_PARTY_LICENSE.md
│   │       ├── dist
│   │       │   ├── index.cjs
│   │       │   ├── index.cjs.map
│   │       │   ├── index.d.mts
│   │       │   ├── index.d.ts
│   │       │   ├── index.global.js
│   │       │   ├── index.global.js.map
│   │       │   ├── index.mjs
│   │       │   └── index.mjs.map
│   │       └── package.json
│   ├── abbrev
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── abbrev.js
│   │   └── package.json
│   ├── acorn
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── bin
│   │   │   └── acorn
│   │   ├── dist
│   │   │   ├── acorn.d.mts
│   │   │   ├── acorn.d.ts
│   │   │   ├── acorn.js
│   │   │   ├── acorn.mjs
│   │   │   └── bin.js
│   │   └── package.json
│   ├── acorn-jsx
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── package.json
│   │   └── xhtml.js
│   ├── acorn-walk
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── dist
│   │   │   ├── walk.d.mts
│   │   │   ├── walk.d.ts
│   │   │   ├── walk.js
│   │   │   └── walk.mjs
│   │   └── package.json
│   ├── agent-base
│   │   ├── README.md
│   │   ├── dist
│   │   │   └── src
│   │   │       ├── index.d.ts
│   │   │       ├── index.js
│   │   │       ├── index.js.map
│   │   │       ├── promisify.d.ts
│   │   │       ├── promisify.js
│   │   │       └── promisify.js.map
│   │   ├── package.json
│   │   └── src
│   │       ├── index.ts
│   │       └── promisify.ts
│   ├── ajv
│   │   ├── .tonic_example.js
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── dist
│   │   │   ├── ajv.bundle.js
│   │   │   ├── ajv.min.js
│   │   │   └── ajv.min.js.map
│   │   ├── lib
│   │   │   ├── ajv.d.ts
│   │   │   ├── ajv.js
│   │   │   ├── cache.js
│   │   │   ├── compile
│   │   │   │   ├── async.js
│   │   │   │   ├── equal.js
│   │   │   │   ├── error_classes.js
│   │   │   │   ├── formats.js
│   │   │   │   ├── index.js
│   │   │   │   ├── resolve.js
│   │   │   │   ├── rules.js
│   │   │   │   ├── schema_obj.js
│   │   │   │   ├── ucs2length.js
│   │   │   │   └── util.js
│   │   │   ├── data.js
│   │   │   ├── definition_schema.js
│   │   │   ├── dot
│   │   │   │   ├── _limit.jst
│   │   │   │   ├── _limitItems.jst
│   │   │   │   ├── _limitLength.jst
│   │   │   │   ├── _limitProperties.jst
│   │   │   │   ├── allOf.jst
│   │   │   │   ├── anyOf.jst
│   │   │   │   ├── coerce.def
│   │   │   │   ├── comment.jst
│   │   │   │   ├── const.jst
│   │   │   │   ├── contains.jst
│   │   │   │   ├── custom.jst
│   │   │   │   ├── defaults.def
│   │   │   │   ├── definitions.def
│   │   │   │   ├── dependencies.jst
│   │   │   │   ├── enum.jst
│   │   │   │   ├── errors.def
│   │   │   │   ├── format.jst
│   │   │   │   ├── if.jst
│   │   │   │   ├── items.jst
│   │   │   │   ├── missing.def
│   │   │   │   ├── multipleOf.jst
│   │   │   │   ├── not.jst
│   │   │   │   ├── oneOf.jst
│   │   │   │   ├── pattern.jst
│   │   │   │   ├── properties.jst
│   │   │   │   ├── propertyNames.jst
│   │   │   │   ├── ref.jst
│   │   │   │   ├── required.jst
│   │   │   │   ├── uniqueItems.jst
│   │   │   │   └── validate.jst
│   │   │   ├── dotjs
│   │   │   │   ├── README.md
│   │   │   │   ├── _limit.js
│   │   │   │   ├── _limitItems.js
│   │   │   │   ├── _limitLength.js
│   │   │   │   ├── _limitProperties.js
│   │   │   │   ├── allOf.js
│   │   │   │   ├── anyOf.js
│   │   │   │   ├── comment.js
│   │   │   │   ├── const.js
│   │   │   │   ├── contains.js
│   │   │   │   ├── custom.js
│   │   │   │   ├── dependencies.js
│   │   │   │   ├── enum.js
│   │   │   │   ├── format.js
│   │   │   │   ├── if.js
│   │   │   │   ├── index.js
│   │   │   │   ├── items.js
│   │   │   │   ├── multipleOf.js
│   │   │   │   ├── not.js
│   │   │   │   ├── oneOf.js
│   │   │   │   ├── pattern.js
│   │   │   │   ├── properties.js
│   │   │   │   ├── propertyNames.js
│   │   │   │   ├── ref.js
│   │   │   │   ├── required.js
│   │   │   │   ├── uniqueItems.js
│   │   │   │   └── validate.js
│   │   │   ├── keyword.js
│   │   │   └── refs
│   │   │       ├── data.json
│   │   │       ├── json-schema-draft-04.json
│   │   │       ├── json-schema-draft-06.json
│   │   │       ├── json-schema-draft-07.json
│   │   │       └── json-schema-secure.json
│   │   ├── package.json
│   │   └── scripts
│   │       ├── .eslintrc.yml
│   │       ├── bundle.js
│   │       ├── compile-dots.js
│   │       ├── info
│   │       ├── prepare-tests
│   │       ├── publish-built-version
│   │       └── travis-gh-pages
│   ├── ansi-regex
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── ansi-styles
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── aproba
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── are-we-there-yet
│   │   ├── LICENSE.md
│   │   ├── README.md
│   │   ├── lib
│   │   │   ├── index.js
│   │   │   ├── tracker-base.js
│   │   │   ├── tracker-group.js
│   │   │   ├── tracker-stream.js
│   │   │   └── tracker.js
│   │   └── package.json
│   ├── arg
│   │   ├── LICENSE.md
│   │   ├── README.md
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   └── package.json
│   ├── argparse
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── argparse.js
│   │   ├── lib
│   │   │   ├── sub.js
│   │   │   └── textwrap.js
│   │   └── package.json
│   ├── array-union
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── balanced-match
│   │   ├── .github
│   │   │   └── FUNDING.yml
│   │   ├── LICENSE.md
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── bowser
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── bundled.js
│   │   ├── es5.js
│   │   ├── index.d.ts
│   │   ├── package.json
│   │   └── src
│   │       ├── bowser.js
│   │       ├── constants.js
│   │       ├── parser-browsers.js
│   │       ├── parser-engines.js
│   │       ├── parser-os.js
│   │       ├── parser-platforms.js
│   │       ├── parser.js
│   │       └── utils.js
│   ├── brace-expansion
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── braces
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── compile.js
│   │   │   ├── constants.js
│   │   │   ├── expand.js
│   │   │   ├── parse.js
│   │   │   ├── stringify.js
│   │   │   └── utils.js
│   │   └── package.json
│   ├── buffer-from
│   │   ├── LICENSE
│   │   ├── index.js
│   │   ├── package.json
│   │   └── readme.md
│   ├── callsites
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── caseless
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test.js
│   ├── chalk
│   │   ├── index.d.ts
│   │   ├── license
│   │   ├── package.json
│   │   ├── readme.md
│   │   └── source
│   │       ├── index.js
│   │       ├── templates.js
│   │       └── util.js
│   ├── chownr
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── chownr.js
│   │   └── package.json
│   ├── color-convert
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── conversions.js
│   │   ├── index.js
│   │   ├── package.json
│   │   └── route.js
│   ├── color-name
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── color-support
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── bin.js
│   │   ├── browser.js
│   │   ├── index.js
│   │   └── package.json
│   ├── concat-map
│   │   ├── .travis.yml
│   │   ├── LICENSE
│   │   ├── README.markdown
│   │   ├── example
│   │   │   └── map.js
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test
│   │       └── map.js
│   ├── concat-stream
│   │   ├── LICENSE
│   │   ├── index.js
│   │   ├── package.json
│   │   └── readme.md
│   ├── console-control-strings
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── README.md~
│   │   ├── index.js
│   │   └── package.json
│   ├── create-require
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── create-require.d.ts
│   │   ├── create-require.js
│   │   └── package.json
│   ├── cross-spawn
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── enoent.js
│   │   │   ├── parse.js
│   │   │   └── util
│   │   │       ├── escape.js
│   │   │       ├── readShebang.js
│   │   │       └── resolveCommand.js
│   │   └── package.json
│   ├── debug
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── package.json
│   │   └── src
│   │       ├── browser.js
│   │       ├── common.js
│   │       ├── index.js
│   │       └── node.js
│   ├── deep-is
│   │   ├── .travis.yml
│   │   ├── LICENSE
│   │   ├── README.markdown
│   │   ├── example
│   │   │   └── cmp.js
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test
│   │       ├── NaN.js
│   │       ├── cmp.js
│   │       └── neg-vs-pos-0.js
│   ├── delegates
│   │   ├── .npmignore
│   │   ├── History.md
│   │   ├── License
│   │   ├── Makefile
│   │   ├── Readme.md
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test
│   │       └── index.js
│   ├── detect-libc
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.d.ts
│   │   ├── lib
│   │   │   ├── detect-libc.js
│   │   │   ├── filesystem.js
│   │   │   └── process.js
│   │   └── package.json
│   ├── diff
│   │   ├── CONTRIBUTING.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── dist
│   │   │   ├── diff.js
│   │   │   └── diff.min.js
│   │   ├── lib
│   │   │   ├── convert
│   │   │   │   ├── dmp.js
│   │   │   │   └── xml.js
│   │   │   ├── diff
│   │   │   │   ├── array.js
│   │   │   │   ├── base.js
│   │   │   │   ├── character.js
│   │   │   │   ├── css.js
│   │   │   │   ├── json.js
│   │   │   │   ├── line.js
│   │   │   │   ├── sentence.js
│   │   │   │   └── word.js
│   │   │   ├── index.es6.js
│   │   │   ├── index.js
│   │   │   ├── patch
│   │   │   │   ├── apply.js
│   │   │   │   ├── create.js
│   │   │   │   ├── merge.js
│   │   │   │   └── parse.js
│   │   │   └── util
│   │   │       ├── array.js
│   │   │       ├── distance-iterator.js
│   │   │       └── params.js
│   │   ├── package.json
│   │   ├── release-notes.md
│   │   └── runtime.js
│   ├── dir-glob
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── discord-api-types
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── gateway
│   │   │   ├── common.d.ts
│   │   │   ├── common.d.ts.map
│   │   │   ├── common.js
│   │   │   ├── common.js.map
│   │   │   ├── index.d.ts
│   │   │   ├── index.d.ts.map
│   │   │   ├── index.js
│   │   │   ├── index.js.map
│   │   │   ├── index.mjs
│   │   │   ├── v10.d.ts
│   │   │   ├── v10.d.ts.map
│   │   │   ├── v10.js
│   │   │   ├── v10.js.map
│   │   │   ├── v10.mjs
│   │   │   ├── v6.d.ts
│   │   │   ├── v6.d.ts.map
│   │   │   ├── v6.js
│   │   │   ├── v6.js.map
│   │   │   ├── v6.mjs
│   │   │   ├── v8.d.ts
│   │   │   ├── v8.d.ts.map
│   │   │   ├── v8.js
│   │   │   ├── v8.js.map
│   │   │   ├── v8.mjs
│   │   │   ├── v9.d.ts
│   │   │   ├── v9.d.ts.map
│   │   │   ├── v9.js
│   │   │   ├── v9.js.map
│   │   │   └── v9.mjs
│   │   ├── globals.d.ts
│   │   ├── globals.d.ts.map
│   │   ├── globals.js
│   │   ├── globals.js.map
│   │   ├── globals.mjs
│   │   ├── package.json
│   │   ├── payloads
│   │   │   ├── common.d.ts
│   │   │   ├── common.d.ts.map
│   │   │   ├── common.js
│   │   │   ├── common.js.map
│   │   │   ├── index.d.ts
│   │   │   ├── index.d.ts.map
│   │   │   ├── index.js
│   │   │   ├── index.js.map
│   │   │   ├── index.mjs
│   │   │   ├── v10
│   │   │   │   ├── _interactions
│   │   │   │   │   ├── _applicationCommands
│   │   │   │   │   │   ├── _chatInput
│   │   │   │   │   │   │   ├── attachment.d.ts
│   │   │   │   │   │   │   ├── attachment.d.ts.map
│   │   │   │   │   │   │   ├── attachment.js
│   │   │   │   │   │   │   ├── attachment.js.map
│   │   │   │   │   │   │   ├── base.d.ts
│   │   │   │   │   │   │   ├── base.d.ts.map
│   │   │   │   │   │   │   ├── base.js
│   │   │   │   │   │   │   ├── base.js.map
│   │   │   │   │   │   │   ├── boolean.d.ts
│   │   │   │   │   │   │   ├── boolean.d.ts.map
│   │   │   │   │   │   │   ├── boolean.js
│   │   │   │   │   │   │   ├── boolean.js.map
│   │   │   │   │   │   │   ├── channel.d.ts
│   │   │   │   │   │   │   ├── channel.d.ts.map
│   │   │   │   │   │   │   ├── channel.js
│   │   │   │   │   │   │   ├── channel.js.map
│   │   │   │   │   │   │   ├── integer.d.ts
│   │   │   │   │   │   │   ├── integer.d.ts.map
│   │   │   │   │   │   │   ├── integer.js
│   │   │   │   │   │   │   ├── integer.js.map
│   │   │   │   │   │   │   ├── mentionable.d.ts
│   │   │   │   │   │   │   ├── mentionable.d.ts.map
│   │   │   │   │   │   │   ├── mentionable.js
│   │   │   │   │   │   │   ├── mentionable.js.map
│   │   │   │   │   │   │   ├── number.d.ts
│   │   │   │   │   │   │   ├── number.d.ts.map
│   │   │   │   │   │   │   ├── number.js
│   │   │   │   │   │   │   ├── number.js.map
│   │   │   │   │   │   │   ├── role.d.ts
│   │   │   │   │   │   │   ├── role.d.ts.map
│   │   │   │   │   │   │   ├── role.js
│   │   │   │   │   │   │   ├── role.js.map
│   │   │   │   │   │   │   ├── shared.d.ts
│   │   │   │   │   │   │   ├── shared.d.ts.map
│   │   │   │   │   │   │   ├── shared.js
│   │   │   │   │   │   │   ├── shared.js.map
│   │   │   │   │   │   │   ├── string.d.ts
│   │   │   │   │   │   │   ├── string.d.ts.map
│   │   │   │   │   │   │   ├── string.js
│   │   │   │   │   │   │   ├── string.js.map
│   │   │   │   │   │   │   ├── subcommand.d.ts
│   │   │   │   │   │   │   ├── subcommand.d.ts.map
│   │   │   │   │   │   │   ├── subcommand.js
│   │   │   │   │   │   │   ├── subcommand.js.map
│   │   │   │   │   │   │   ├── subcommandGroup.d.ts
│   │   │   │   │   │   │   ├── subcommandGroup.d.ts.map
│   │   │   │   │   │   │   ├── subcommandGroup.js
│   │   │   │   │   │   │   ├── subcommandGroup.js.map
│   │   │   │   │   │   │   ├── user.d.ts
│   │   │   │   │   │   │   ├── user.d.ts.map
│   │   │   │   │   │   │   ├── user.js
│   │   │   │   │   │   │   └── user.js.map
│   │   │   │   │   │   ├── chatInput.d.ts
│   │   │   │   │   │   ├── chatInput.d.ts.map
│   │   │   │   │   │   ├── chatInput.js
│   │   │   │   │   │   ├── chatInput.js.map
│   │   │   │   │   │   ├── contextMenu.d.ts
│   │   │   │   │   │   ├── contextMenu.d.ts.map
│   │   │   │   │   │   ├── contextMenu.js
│   │   │   │   │   │   ├── contextMenu.js.map
│   │   │   │   │   │   ├── entryPoint.d.ts
│   │   │   │   │   │   ├── entryPoint.d.ts.map
│   │   │   │   │   │   ├── entryPoint.js
│   │   │   │   │   │   ├── entryPoint.js.map
│   │   │   │   │   │   ├── internals.d.ts
│   │   │   │   │   │   ├── internals.d.ts.map
│   │   │   │   │   │   ├── internals.js
│   │   │   │   │   │   ├── internals.js.map
│   │   │   │   │   │   ├── permissions.d.ts
│   │   │   │   │   │   ├── permissions.d.ts.map
│   │   │   │   │   │   ├── permissions.js
│   │   │   │   │   │   └── permissions.js.map
│   │   │   │   │   ├── applicationCommands.d.ts
│   │   │   │   │   ├── applicationCommands.d.ts.map
│   │   │   │   │   ├── applicationCommands.js
│   │   │   │   │   ├── applicationCommands.js.map
│   │   │   │   │   ├── autocomplete.d.ts
│   │   │   │   │   ├── autocomplete.d.ts.map
│   │   │   │   │   ├── autocomplete.js
│   │   │   │   │   ├── autocomplete.js.map
│   │   │   │   │   ├── base.d.ts
│   │   │   │   │   ├── base.d.ts.map
│   │   │   │   │   ├── base.js
│   │   │   │   │   ├── base.js.map
│   │   │   │   │   ├── messageComponents.d.ts
│   │   │   │   │   ├── messageComponents.d.ts.map
│   │   │   │   │   ├── messageComponents.js
│   │   │   │   │   ├── messageComponents.js.map
│   │   │   │   │   ├── modalSubmit.d.ts
│   │   │   │   │   ├── modalSubmit.d.ts.map
│   │   │   │   │   ├── modalSubmit.js
│   │   │   │   │   ├── modalSubmit.js.map
│   │   │   │   │   ├── ping.d.ts
│   │   │   │   │   ├── ping.d.ts.map
│   │   │   │   │   ├── ping.js
│   │   │   │   │   ├── ping.js.map
│   │   │   │   │   ├── responses.d.ts
│   │   │   │   │   ├── responses.d.ts.map
│   │   │   │   │   ├── responses.js
│   │   │   │   │   └── responses.js.map
│   │   │   │   ├── application.d.ts
│   │   │   │   ├── application.d.ts.map
│   │   │   │   ├── application.js
│   │   │   │   ├── application.js.map
│   │   │   │   ├── auditLog.d.ts
│   │   │   │   ├── auditLog.d.ts.map
│   │   │   │   ├── auditLog.js
│   │   │   │   ├── auditLog.js.map
│   │   │   │   ├── autoModeration.d.ts
│   │   │   │   ├── autoModeration.d.ts.map
│   │   │   │   ├── autoModeration.js
│   │   │   │   ├── autoModeration.js.map
│   │   │   │   ├── channel.d.ts
│   │   │   │   ├── channel.d.ts.map
│   │   │   │   ├── channel.js
│   │   │   │   ├── channel.js.map
│   │   │   │   ├── emoji.d.ts
│   │   │   │   ├── emoji.d.ts.map
│   │   │   │   ├── emoji.js
│   │   │   │   ├── emoji.js.map
│   │   │   │   ├── gateway.d.ts
│   │   │   │   ├── gateway.d.ts.map
│   │   │   │   ├── gateway.js
│   │   │   │   ├── gateway.js.map
│   │   │   │   ├── guild.d.ts
│   │   │   │   ├── guild.d.ts.map
│   │   │   │   ├── guild.js
│   │   │   │   ├── guild.js.map
│   │   │   │   ├── guildScheduledEvent.d.ts
│   │   │   │   ├── guildScheduledEvent.d.ts.map
│   │   │   │   ├── guildScheduledEvent.js
│   │   │   │   ├── guildScheduledEvent.js.map
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.d.ts.map
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── index.mjs
│   │   │   │   ├── interactions.d.ts
│   │   │   │   ├── interactions.d.ts.map
│   │   │   │   ├── interactions.js
│   │   │   │   ├── interactions.js.map
│   │   │   │   ├── invite.d.ts
│   │   │   │   ├── invite.d.ts.map
│   │   │   │   ├── invite.js
│   │   │   │   ├── invite.js.map
│   │   │   │   ├── monetization.d.ts
│   │   │   │   ├── monetization.d.ts.map
│   │   │   │   ├── monetization.js
│   │   │   │   ├── monetization.js.map
│   │   │   │   ├── oauth2.d.ts
│   │   │   │   ├── oauth2.d.ts.map
│   │   │   │   ├── oauth2.js
│   │   │   │   ├── oauth2.js.map
│   │   │   │   ├── permissions.d.ts
│   │   │   │   ├── permissions.d.ts.map
│   │   │   │   ├── permissions.js
│   │   │   │   ├── permissions.js.map
│   │   │   │   ├── poll.d.ts
│   │   │   │   ├── poll.d.ts.map
│   │   │   │   ├── poll.js
│   │   │   │   ├── poll.js.map
│   │   │   │   ├── soundboard.d.ts
│   │   │   │   ├── soundboard.d.ts.map
│   │   │   │   ├── soundboard.js
│   │   │   │   ├── soundboard.js.map
│   │   │   │   ├── stageInstance.d.ts
│   │   │   │   ├── stageInstance.d.ts.map
│   │   │   │   ├── stageInstance.js
│   │   │   │   ├── stageInstance.js.map
│   │   │   │   ├── sticker.d.ts
│   │   │   │   ├── sticker.d.ts.map
│   │   │   │   ├── sticker.js
│   │   │   │   ├── sticker.js.map
│   │   │   │   ├── teams.d.ts
│   │   │   │   ├── teams.d.ts.map
│   │   │   │   ├── teams.js
│   │   │   │   ├── teams.js.map
│   │   │   │   ├── template.d.ts
│   │   │   │   ├── template.d.ts.map
│   │   │   │   ├── template.js
│   │   │   │   ├── template.js.map
│   │   │   │   ├── user.d.ts
│   │   │   │   ├── user.d.ts.map
│   │   │   │   ├── user.js
│   │   │   │   ├── user.js.map
│   │   │   │   ├── voice.d.ts
│   │   │   │   ├── voice.d.ts.map
│   │   │   │   ├── voice.js
│   │   │   │   ├── voice.js.map
│   │   │   │   ├── webhook.d.ts
│   │   │   │   ├── webhook.d.ts.map
│   │   │   │   ├── webhook.js
│   │   │   │   └── webhook.js.map
│   │   │   ├── v6
│   │   │   │   ├── auditLog.d.ts
│   │   │   │   ├── auditLog.d.ts.map
│   │   │   │   ├── auditLog.js
│   │   │   │   ├── auditLog.js.map
│   │   │   │   ├── channel.d.ts
│   │   │   │   ├── channel.d.ts.map
│   │   │   │   ├── channel.js
│   │   │   │   ├── channel.js.map
│   │   │   │   ├── emoji.d.ts
│   │   │   │   ├── emoji.d.ts.map
│   │   │   │   ├── emoji.js
│   │   │   │   ├── emoji.js.map
│   │   │   │   ├── gateway.d.ts
│   │   │   │   ├── gateway.d.ts.map
│   │   │   │   ├── gateway.js
│   │   │   │   ├── gateway.js.map
│   │   │   │   ├── guild.d.ts
│   │   │   │   ├── guild.d.ts.map
│   │   │   │   ├── guild.js
│   │   │   │   ├── guild.js.map
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.d.ts.map
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── index.mjs
│   │   │   │   ├── invite.d.ts
│   │   │   │   ├── invite.d.ts.map
│   │   │   │   ├── invite.js
│   │   │   │   ├── invite.js.map
│   │   │   │   ├── oauth2.d.ts
│   │   │   │   ├── oauth2.d.ts.map
│   │   │   │   ├── oauth2.js
│   │   │   │   ├── oauth2.js.map
│   │   │   │   ├── permissions.d.ts
│   │   │   │   ├── permissions.d.ts.map
│   │   │   │   ├── permissions.js
│   │   │   │   ├── permissions.js.map
│   │   │   │   ├── teams.d.ts
│   │   │   │   ├── teams.d.ts.map
│   │   │   │   ├── teams.js
│   │   │   │   ├── teams.js.map
│   │   │   │   ├── user.d.ts
│   │   │   │   ├── user.d.ts.map
│   │   │   │   ├── user.js
│   │   │   │   ├── user.js.map
│   │   │   │   ├── voice.d.ts
│   │   │   │   ├── voice.d.ts.map
│   │   │   │   ├── voice.js
│   │   │   │   ├── voice.js.map
│   │   │   │   ├── webhook.d.ts
│   │   │   │   ├── webhook.d.ts.map
│   │   │   │   ├── webhook.js
│   │   │   │   └── webhook.js.map
│   │   │   ├── v8
│   │   │   │   ├── _interactions
│   │   │   │   │   ├── _applicationCommands
│   │   │   │   │   │   ├── _chatInput
│   │   │   │   │   │   │   ├── attachment.d.ts
│   │   │   │   │   │   │   ├── attachment.d.ts.map
│   │   │   │   │   │   │   ├── attachment.js
│   │   │   │   │   │   │   ├── attachment.js.map
│   │   │   │   │   │   │   ├── base.d.ts
│   │   │   │   │   │   │   ├── base.d.ts.map
│   │   │   │   │   │   │   ├── base.js
│   │   │   │   │   │   │   ├── base.js.map
│   │   │   │   │   │   │   ├── boolean.d.ts
│   │   │   │   │   │   │   ├── boolean.d.ts.map
│   │   │   │   │   │   │   ├── boolean.js
│   │   │   │   │   │   │   ├── boolean.js.map
│   │   │   │   │   │   │   ├── channel.d.ts
│   │   │   │   │   │   │   ├── channel.d.ts.map
│   │   │   │   │   │   │   ├── channel.js
│   │   │   │   │   │   │   ├── channel.js.map
│   │   │   │   │   │   │   ├── integer.d.ts
│   │   │   │   │   │   │   ├── integer.d.ts.map
│   │   │   │   │   │   │   ├── integer.js
│   │   │   │   │   │   │   ├── integer.js.map
│   │   │   │   │   │   │   ├── mentionable.d.ts
│   │   │   │   │   │   │   ├── mentionable.d.ts.map
│   │   │   │   │   │   │   ├── mentionable.js
│   │   │   │   │   │   │   ├── mentionable.js.map
│   │   │   │   │   │   │   ├── number.d.ts
│   │   │   │   │   │   │   ├── number.d.ts.map
│   │   │   │   │   │   │   ├── number.js
│   │   │   │   │   │   │   ├── number.js.map
│   │   │   │   │   │   │   ├── role.d.ts
│   │   │   │   │   │   │   ├── role.d.ts.map
│   │   │   │   │   │   │   ├── role.js
│   │   │   │   │   │   │   ├── role.js.map
│   │   │   │   │   │   │   ├── shared.d.ts
│   │   │   │   │   │   │   ├── shared.d.ts.map
│   │   │   │   │   │   │   ├── shared.js
│   │   │   │   │   │   │   ├── shared.js.map
│   │   │   │   │   │   │   ├── string.d.ts
│   │   │   │   │   │   │   ├── string.d.ts.map
│   │   │   │   │   │   │   ├── string.js
│   │   │   │   │   │   │   ├── string.js.map
│   │   │   │   │   │   │   ├── subcommand.d.ts
│   │   │   │   │   │   │   ├── subcommand.d.ts.map
│   │   │   │   │   │   │   ├── subcommand.js
│   │   │   │   │   │   │   ├── subcommand.js.map
│   │   │   │   │   │   │   ├── subcommandGroup.d.ts
│   │   │   │   │   │   │   ├── subcommandGroup.d.ts.map
│   │   │   │   │   │   │   ├── subcommandGroup.js
│   │   │   │   │   │   │   ├── subcommandGroup.js.map
│   │   │   │   │   │   │   ├── user.d.ts
│   │   │   │   │   │   │   ├── user.d.ts.map
│   │   │   │   │   │   │   ├── user.js
│   │   │   │   │   │   │   └── user.js.map
│   │   │   │   │   │   ├── chatInput.d.ts
│   │   │   │   │   │   ├── chatInput.d.ts.map
│   │   │   │   │   │   ├── chatInput.js
│   │   │   │   │   │   ├── chatInput.js.map
│   │   │   │   │   │   ├── contextMenu.d.ts
│   │   │   │   │   │   ├── contextMenu.d.ts.map
│   │   │   │   │   │   ├── contextMenu.js
│   │   │   │   │   │   ├── contextMenu.js.map
│   │   │   │   │   │   ├── internals.d.ts
│   │   │   │   │   │   ├── internals.d.ts.map
│   │   │   │   │   │   ├── internals.js
│   │   │   │   │   │   ├── internals.js.map
│   │   │   │   │   │   ├── permissions.d.ts
│   │   │   │   │   │   ├── permissions.d.ts.map
│   │   │   │   │   │   ├── permissions.js
│   │   │   │   │   │   └── permissions.js.map
│   │   │   │   │   ├── applicationCommands.d.ts
│   │   │   │   │   ├── applicationCommands.d.ts.map
│   │   │   │   │   ├── applicationCommands.js
│   │   │   │   │   ├── applicationCommands.js.map
│   │   │   │   │   ├── autocomplete.d.ts
│   │   │   │   │   ├── autocomplete.d.ts.map
│   │   │   │   │   ├── autocomplete.js
│   │   │   │   │   ├── autocomplete.js.map
│   │   │   │   │   ├── base.d.ts
│   │   │   │   │   ├── base.d.ts.map
│   │   │   │   │   ├── base.js
│   │   │   │   │   ├── base.js.map
│   │   │   │   │   ├── messageComponents.d.ts
│   │   │   │   │   ├── messageComponents.d.ts.map
│   │   │   │   │   ├── messageComponents.js
│   │   │   │   │   ├── messageComponents.js.map
│   │   │   │   │   ├── modalSubmit.d.ts
│   │   │   │   │   ├── modalSubmit.d.ts.map
│   │   │   │   │   ├── modalSubmit.js
│   │   │   │   │   ├── modalSubmit.js.map
│   │   │   │   │   ├── ping.d.ts
│   │   │   │   │   ├── ping.d.ts.map
│   │   │   │   │   ├── ping.js
│   │   │   │   │   ├── ping.js.map
│   │   │   │   │   ├── responses.d.ts
│   │   │   │   │   ├── responses.d.ts.map
│   │   │   │   │   ├── responses.js
│   │   │   │   │   └── responses.js.map
│   │   │   │   ├── application.d.ts
│   │   │   │   ├── application.d.ts.map
│   │   │   │   ├── application.js
│   │   │   │   ├── application.js.map
│   │   │   │   ├── auditLog.d.ts
│   │   │   │   ├── auditLog.d.ts.map
│   │   │   │   ├── auditLog.js
│   │   │   │   ├── auditLog.js.map
│   │   │   │   ├── channel.d.ts
│   │   │   │   ├── channel.d.ts.map
│   │   │   │   ├── channel.js
│   │   │   │   ├── channel.js.map
│   │   │   │   ├── emoji.d.ts
│   │   │   │   ├── emoji.d.ts.map
│   │   │   │   ├── emoji.js
│   │   │   │   ├── emoji.js.map
│   │   │   │   ├── gateway.d.ts
│   │   │   │   ├── gateway.d.ts.map
│   │   │   │   ├── gateway.js
│   │   │   │   ├── gateway.js.map
│   │   │   │   ├── guild.d.ts
│   │   │   │   ├── guild.d.ts.map
│   │   │   │   ├── guild.js
│   │   │   │   ├── guild.js.map
│   │   │   │   ├── guildScheduledEvent.d.ts
│   │   │   │   ├── guildScheduledEvent.d.ts.map
│   │   │   │   ├── guildScheduledEvent.js
│   │   │   │   ├── guildScheduledEvent.js.map
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.d.ts.map
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── index.mjs
│   │   │   │   ├── interactions.d.ts
│   │   │   │   ├── interactions.d.ts.map
│   │   │   │   ├── interactions.js
│   │   │   │   ├── interactions.js.map
│   │   │   │   ├── invite.d.ts
│   │   │   │   ├── invite.d.ts.map
│   │   │   │   ├── invite.js
│   │   │   │   ├── invite.js.map
│   │   │   │   ├── oauth2.d.ts
│   │   │   │   ├── oauth2.d.ts.map
│   │   │   │   ├── oauth2.js
│   │   │   │   ├── oauth2.js.map
│   │   │   │   ├── permissions.d.ts
│   │   │   │   ├── permissions.d.ts.map
│   │   │   │   ├── permissions.js
│   │   │   │   ├── permissions.js.map
│   │   │   │   ├── stageInstance.d.ts
│   │   │   │   ├── stageInstance.d.ts.map
│   │   │   │   ├── stageInstance.js
│   │   │   │   ├── stageInstance.js.map
│   │   │   │   ├── sticker.d.ts
│   │   │   │   ├── sticker.d.ts.map
│   │   │   │   ├── sticker.js
│   │   │   │   ├── sticker.js.map
│   │   │   │   ├── teams.d.ts
│   │   │   │   ├── teams.d.ts.map
│   │   │   │   ├── teams.js
│   │   │   │   ├── teams.js.map
│   │   │   │   ├── template.d.ts
│   │   │   │   ├── template.d.ts.map
│   │   │   │   ├── template.js
│   │   │   │   ├── template.js.map
│   │   │   │   ├── user.d.ts
│   │   │   │   ├── user.d.ts.map
│   │   │   │   ├── user.js
│   │   │   │   ├── user.js.map
│   │   │   │   ├── voice.d.ts
│   │   │   │   ├── voice.d.ts.map
│   │   │   │   ├── voice.js
│   │   │   │   ├── voice.js.map
│   │   │   │   ├── webhook.d.ts
│   │   │   │   ├── webhook.d.ts.map
│   │   │   │   ├── webhook.js
│   │   │   │   └── webhook.js.map
│   │   │   └── v9
│   │   │       ├── _interactions
│   │   │       │   ├── _applicationCommands
│   │   │       │   │   ├── _chatInput
│   │   │       │   │   │   ├── attachment.d.ts
│   │   │       │   │   │   ├── attachment.d.ts.map
│   │   │       │   │   │   ├── attachment.js
│   │   │       │   │   │   ├── attachment.js.map
│   │   │       │   │   │   ├── base.d.ts
│   │   │       │   │   │   ├── base.d.ts.map
│   │   │       │   │   │   ├── base.js
│   │   │       │   │   │   ├── base.js.map
│   │   │       │   │   │   ├── boolean.d.ts
│   │   │       │   │   │   ├── boolean.d.ts.map
│   │   │       │   │   │   ├── boolean.js
│   │   │       │   │   │   ├── boolean.js.map
│   │   │       │   │   │   ├── channel.d.ts
│   │   │       │   │   │   ├── channel.d.ts.map
│   │   │       │   │   │   ├── channel.js
│   │   │       │   │   │   ├── channel.js.map
│   │   │       │   │   │   ├── integer.d.ts
│   │   │       │   │   │   ├── integer.d.ts.map
│   │   │       │   │   │   ├── integer.js
│   │   │       │   │   │   ├── integer.js.map
│   │   │       │   │   │   ├── mentionable.d.ts
│   │   │       │   │   │   ├── mentionable.d.ts.map
│   │   │       │   │   │   ├── mentionable.js
│   │   │       │   │   │   ├── mentionable.js.map
│   │   │       │   │   │   ├── number.d.ts
│   │   │       │   │   │   ├── number.d.ts.map
│   │   │       │   │   │   ├── number.js
│   │   │       │   │   │   ├── number.js.map
│   │   │       │   │   │   ├── role.d.ts
│   │   │       │   │   │   ├── role.d.ts.map
│   │   │       │   │   │   ├── role.js
│   │   │       │   │   │   ├── role.js.map
│   │   │       │   │   │   ├── shared.d.ts
│   │   │       │   │   │   ├── shared.d.ts.map
│   │   │       │   │   │   ├── shared.js
│   │   │       │   │   │   ├── shared.js.map
│   │   │       │   │   │   ├── string.d.ts
│   │   │       │   │   │   ├── string.d.ts.map
│   │   │       │   │   │   ├── string.js
│   │   │       │   │   │   ├── string.js.map
│   │   │       │   │   │   ├── subcommand.d.ts
│   │   │       │   │   │   ├── subcommand.d.ts.map
│   │   │       │   │   │   ├── subcommand.js
│   │   │       │   │   │   ├── subcommand.js.map
│   │   │       │   │   │   ├── subcommandGroup.d.ts
│   │   │       │   │   │   ├── subcommandGroup.d.ts.map
│   │   │       │   │   │   ├── subcommandGroup.js
│   │   │       │   │   │   ├── subcommandGroup.js.map
│   │   │       │   │   │   ├── user.d.ts
│   │   │       │   │   │   ├── user.d.ts.map
│   │   │       │   │   │   ├── user.js
│   │   │       │   │   │   └── user.js.map
│   │   │       │   │   ├── chatInput.d.ts
│   │   │       │   │   ├── chatInput.d.ts.map
│   │   │       │   │   ├── chatInput.js
│   │   │       │   │   ├── chatInput.js.map
│   │   │       │   │   ├── contextMenu.d.ts
│   │   │       │   │   ├── contextMenu.d.ts.map
│   │   │       │   │   ├── contextMenu.js
│   │   │       │   │   ├── contextMenu.js.map
│   │   │       │   │   ├── entryPoint.d.ts
│   │   │       │   │   ├── entryPoint.d.ts.map
│   │   │       │   │   ├── entryPoint.js
│   │   │       │   │   ├── entryPoint.js.map
│   │   │       │   │   ├── internals.d.ts
│   │   │       │   │   ├── internals.d.ts.map
│   │   │       │   │   ├── internals.js
│   │   │       │   │   ├── internals.js.map
│   │   │       │   │   ├── permissions.d.ts
│   │   │       │   │   ├── permissions.d.ts.map
│   │   │       │   │   ├── permissions.js
│   │   │       │   │   └── permissions.js.map
│   │   │       │   ├── applicationCommands.d.ts
│   │   │       │   ├── applicationCommands.d.ts.map
│   │   │       │   ├── applicationCommands.js
│   │   │       │   ├── applicationCommands.js.map
│   │   │       │   ├── autocomplete.d.ts
│   │   │       │   ├── autocomplete.d.ts.map
│   │   │       │   ├── autocomplete.js
│   │   │       │   ├── autocomplete.js.map
│   │   │       │   ├── base.d.ts
│   │   │       │   ├── base.d.ts.map
│   │   │       │   ├── base.js
│   │   │       │   ├── base.js.map
│   │   │       │   ├── messageComponents.d.ts
│   │   │       │   ├── messageComponents.d.ts.map
│   │   │       │   ├── messageComponents.js
│   │   │       │   ├── messageComponents.js.map
│   │   │       │   ├── modalSubmit.d.ts
│   │   │       │   ├── modalSubmit.d.ts.map
│   │   │       │   ├── modalSubmit.js
│   │   │       │   ├── modalSubmit.js.map
│   │   │       │   ├── ping.d.ts
│   │   │       │   ├── ping.d.ts.map
│   │   │       │   ├── ping.js
│   │   │       │   ├── ping.js.map
│   │   │       │   ├── responses.d.ts
│   │   │       │   ├── responses.d.ts.map
│   │   │       │   ├── responses.js
│   │   │       │   └── responses.js.map
│   │   │       ├── application.d.ts
│   │   │       ├── application.d.ts.map
│   │   │       ├── application.js
│   │   │       ├── application.js.map
│   │   │       ├── auditLog.d.ts
│   │   │       ├── auditLog.d.ts.map
│   │   │       ├── auditLog.js
│   │   │       ├── auditLog.js.map
│   │   │       ├── autoModeration.d.ts
│   │   │       ├── autoModeration.d.ts.map
│   │   │       ├── autoModeration.js
│   │   │       ├── autoModeration.js.map
│   │   │       ├── channel.d.ts
│   │   │       ├── channel.d.ts.map
│   │   │       ├── channel.js
│   │   │       ├── channel.js.map
│   │   │       ├── emoji.d.ts
│   │   │       ├── emoji.d.ts.map
│   │   │       ├── emoji.js
│   │   │       ├── emoji.js.map
│   │   │       ├── gateway.d.ts
│   │   │       ├── gateway.d.ts.map
│   │   │       ├── gateway.js
│   │   │       ├── gateway.js.map
│   │   │       ├── guild.d.ts
│   │   │       ├── guild.d.ts.map
│   │   │       ├── guild.js
│   │   │       ├── guild.js.map
│   │   │       ├── guildScheduledEvent.d.ts
│   │   │       ├── guildScheduledEvent.d.ts.map
│   │   │       ├── guildScheduledEvent.js
│   │   │       ├── guildScheduledEvent.js.map
│   │   │       ├── index.d.ts
│   │   │       ├── index.d.ts.map
│   │   │       ├── index.js
│   │   │       ├── index.js.map
│   │   │       ├── index.mjs
│   │   │       ├── interactions.d.ts
│   │   │       ├── interactions.d.ts.map
│   │   │       ├── interactions.js
│   │   │       ├── interactions.js.map
│   │   │       ├── invite.d.ts
│   │   │       ├── invite.d.ts.map
│   │   │       ├── invite.js
│   │   │       ├── invite.js.map
│   │   │       ├── monetization.d.ts
│   │   │       ├── monetization.d.ts.map
│   │   │       ├── monetization.js
│   │   │       ├── monetization.js.map
│   │   │       ├── oauth2.d.ts
│   │   │       ├── oauth2.d.ts.map
│   │   │       ├── oauth2.js
│   │   │       ├── oauth2.js.map
│   │   │       ├── permissions.d.ts
│   │   │       ├── permissions.d.ts.map
│   │   │       ├── permissions.js
│   │   │       ├── permissions.js.map
│   │   │       ├── poll.d.ts
│   │   │       ├── poll.d.ts.map
│   │   │       ├── poll.js
│   │   │       ├── poll.js.map
│   │   │       ├── soundboard.d.ts
│   │   │       ├── soundboard.d.ts.map
│   │   │       ├── soundboard.js
│   │   │       ├── soundboard.js.map
│   │   │       ├── stageInstance.d.ts
│   │   │       ├── stageInstance.d.ts.map
│   │   │       ├── stageInstance.js
│   │   │       ├── stageInstance.js.map
│   │   │       ├── sticker.d.ts
│   │   │       ├── sticker.d.ts.map
│   │   │       ├── sticker.js
│   │   │       ├── sticker.js.map
│   │   │       ├── teams.d.ts
│   │   │       ├── teams.d.ts.map
│   │   │       ├── teams.js
│   │   │       ├── teams.js.map
│   │   │       ├── template.d.ts
│   │   │       ├── template.d.ts.map
│   │   │       ├── template.js
│   │   │       ├── template.js.map
│   │   │       ├── user.d.ts
│   │   │       ├── user.d.ts.map
│   │   │       ├── user.js
│   │   │       ├── user.js.map
│   │   │       ├── voice.d.ts
│   │   │       ├── voice.d.ts.map
│   │   │       ├── voice.js
│   │   │       ├── voice.js.map
│   │   │       ├── webhook.d.ts
│   │   │       ├── webhook.d.ts.map
│   │   │       ├── webhook.js
│   │   │       └── webhook.js.map
│   │   ├── rest
│   │   │   ├── common.d.ts
│   │   │   ├── common.d.ts.map
│   │   │   ├── common.js
│   │   │   ├── common.js.map
│   │   │   ├── index.d.ts
│   │   │   ├── index.d.ts.map
│   │   │   ├── index.js
│   │   │   ├── index.js.map
│   │   │   ├── index.mjs
│   │   │   ├── v10
│   │   │   │   ├── application.d.ts
│   │   │   │   ├── application.d.ts.map
│   │   │   │   ├── application.js
│   │   │   │   ├── application.js.map
│   │   │   │   ├── auditLog.d.ts
│   │   │   │   ├── auditLog.d.ts.map
│   │   │   │   ├── auditLog.js
│   │   │   │   ├── auditLog.js.map
│   │   │   │   ├── autoModeration.d.ts
│   │   │   │   ├── autoModeration.d.ts.map
│   │   │   │   ├── autoModeration.js
│   │   │   │   ├── autoModeration.js.map
│   │   │   │   ├── channel.d.ts
│   │   │   │   ├── channel.d.ts.map
│   │   │   │   ├── channel.js
│   │   │   │   ├── channel.js.map
│   │   │   │   ├── emoji.d.ts
│   │   │   │   ├── emoji.d.ts.map
│   │   │   │   ├── emoji.js
│   │   │   │   ├── emoji.js.map
│   │   │   │   ├── gateway.d.ts
│   │   │   │   ├── gateway.d.ts.map
│   │   │   │   ├── gateway.js
│   │   │   │   ├── gateway.js.map
│   │   │   │   ├── guild.d.ts
│   │   │   │   ├── guild.d.ts.map
│   │   │   │   ├── guild.js
│   │   │   │   ├── guild.js.map
│   │   │   │   ├── guildScheduledEvent.d.ts
│   │   │   │   ├── guildScheduledEvent.d.ts.map
│   │   │   │   ├── guildScheduledEvent.js
│   │   │   │   ├── guildScheduledEvent.js.map
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.d.ts.map
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── index.mjs
│   │   │   │   ├── interactions.d.ts
│   │   │   │   ├── interactions.d.ts.map
│   │   │   │   ├── interactions.js
│   │   │   │   ├── interactions.js.map
│   │   │   │   ├── invite.d.ts
│   │   │   │   ├── invite.d.ts.map
│   │   │   │   ├── invite.js
│   │   │   │   ├── invite.js.map
│   │   │   │   ├── monetization.d.ts
│   │   │   │   ├── monetization.d.ts.map
│   │   │   │   ├── monetization.js
│   │   │   │   ├── monetization.js.map
│   │   │   │   ├── oauth2.d.ts
│   │   │   │   ├── oauth2.d.ts.map
│   │   │   │   ├── oauth2.js
│   │   │   │   ├── oauth2.js.map
│   │   │   │   ├── poll.d.ts
│   │   │   │   ├── poll.d.ts.map
│   │   │   │   ├── poll.js
│   │   │   │   ├── poll.js.map
│   │   │   │   ├── soundboard.d.ts
│   │   │   │   ├── soundboard.d.ts.map
│   │   │   │   ├── soundboard.js
│   │   │   │   ├── soundboard.js.map
│   │   │   │   ├── stageInstance.d.ts
│   │   │   │   ├── stageInstance.d.ts.map
│   │   │   │   ├── stageInstance.js
│   │   │   │   ├── stageInstance.js.map
│   │   │   │   ├── sticker.d.ts
│   │   │   │   ├── sticker.d.ts.map
│   │   │   │   ├── sticker.js
│   │   │   │   ├── sticker.js.map
│   │   │   │   ├── template.d.ts
│   │   │   │   ├── template.d.ts.map
│   │   │   │   ├── template.js
│   │   │   │   ├── template.js.map
│   │   │   │   ├── user.d.ts
│   │   │   │   ├── user.d.ts.map
│   │   │   │   ├── user.js
│   │   │   │   ├── user.js.map
│   │   │   │   ├── voice.d.ts
│   │   │   │   ├── voice.d.ts.map
│   │   │   │   ├── voice.js
│   │   │   │   ├── voice.js.map
│   │   │   │   ├── webhook.d.ts
│   │   │   │   ├── webhook.d.ts.map
│   │   │   │   ├── webhook.js
│   │   │   │   └── webhook.js.map
│   │   │   ├── v6
│   │   │   │   ├── auditLog.d.ts
│   │   │   │   ├── auditLog.d.ts.map
│   │   │   │   ├── auditLog.js
│   │   │   │   ├── auditLog.js.map
│   │   │   │   ├── channel.d.ts
│   │   │   │   ├── channel.d.ts.map
│   │   │   │   ├── channel.js
│   │   │   │   ├── channel.js.map
│   │   │   │   ├── emoji.d.ts
│   │   │   │   ├── emoji.d.ts.map
│   │   │   │   ├── emoji.js
│   │   │   │   ├── emoji.js.map
│   │   │   │   ├── gateway.d.ts
│   │   │   │   ├── gateway.d.ts.map
│   │   │   │   ├── gateway.js
│   │   │   │   ├── gateway.js.map
│   │   │   │   ├── guild.d.ts
│   │   │   │   ├── guild.d.ts.map
│   │   │   │   ├── guild.js
│   │   │   │   ├── guild.js.map
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.d.ts.map
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── index.mjs
│   │   │   │   ├── invite.d.ts
│   │   │   │   ├── invite.d.ts.map
│   │   │   │   ├── invite.js
│   │   │   │   ├── invite.js.map
│   │   │   │   ├── oauth2.d.ts
│   │   │   │   ├── oauth2.d.ts.map
│   │   │   │   ├── oauth2.js
│   │   │   │   ├── oauth2.js.map
│   │   │   │   ├── user.d.ts
│   │   │   │   ├── user.d.ts.map
│   │   │   │   ├── user.js
│   │   │   │   ├── user.js.map
│   │   │   │   ├── voice.d.ts
│   │   │   │   ├── voice.d.ts.map
│   │   │   │   ├── voice.js
│   │   │   │   ├── voice.js.map
│   │   │   │   ├── webhook.d.ts
│   │   │   │   ├── webhook.d.ts.map
│   │   │   │   ├── webhook.js
│   │   │   │   └── webhook.js.map
│   │   │   ├── v8
│   │   │   │   ├── auditLog.d.ts
│   │   │   │   ├── auditLog.d.ts.map
│   │   │   │   ├── auditLog.js
│   │   │   │   ├── auditLog.js.map
│   │   │   │   ├── channel.d.ts
│   │   │   │   ├── channel.d.ts.map
│   │   │   │   ├── channel.js
│   │   │   │   ├── channel.js.map
│   │   │   │   ├── emoji.d.ts
│   │   │   │   ├── emoji.d.ts.map
│   │   │   │   ├── emoji.js
│   │   │   │   ├── emoji.js.map
│   │   │   │   ├── gateway.d.ts
│   │   │   │   ├── gateway.d.ts.map
│   │   │   │   ├── gateway.js
│   │   │   │   ├── gateway.js.map
│   │   │   │   ├── guild.d.ts
│   │   │   │   ├── guild.d.ts.map
│   │   │   │   ├── guild.js
│   │   │   │   ├── guild.js.map
│   │   │   │   ├── guildScheduledEvent.d.ts
│   │   │   │   ├── guildScheduledEvent.d.ts.map
│   │   │   │   ├── guildScheduledEvent.js
│   │   │   │   ├── guildScheduledEvent.js.map
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.d.ts.map
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── index.mjs
│   │   │   │   ├── interactions.d.ts
│   │   │   │   ├── interactions.d.ts.map
│   │   │   │   ├── interactions.js
│   │   │   │   ├── interactions.js.map
│   │   │   │   ├── invite.d.ts
│   │   │   │   ├── invite.d.ts.map
│   │   │   │   ├── invite.js
│   │   │   │   ├── invite.js.map
│   │   │   │   ├── oauth2.d.ts
│   │   │   │   ├── oauth2.d.ts.map
│   │   │   │   ├── oauth2.js
│   │   │   │   ├── oauth2.js.map
│   │   │   │   ├── stageInstance.d.ts
│   │   │   │   ├── stageInstance.d.ts.map
│   │   │   │   ├── stageInstance.js
│   │   │   │   ├── stageInstance.js.map
│   │   │   │   ├── sticker.d.ts
│   │   │   │   ├── sticker.d.ts.map
│   │   │   │   ├── sticker.js
│   │   │   │   ├── sticker.js.map
│   │   │   │   ├── template.d.ts
│   │   │   │   ├── template.d.ts.map
│   │   │   │   ├── template.js
│   │   │   │   ├── template.js.map
│   │   │   │   ├── user.d.ts
│   │   │   │   ├── user.d.ts.map
│   │   │   │   ├── user.js
│   │   │   │   ├── user.js.map
│   │   │   │   ├── voice.d.ts
│   │   │   │   ├── voice.d.ts.map
│   │   │   │   ├── voice.js
│   │   │   │   ├── voice.js.map
│   │   │   │   ├── webhook.d.ts
│   │   │   │   ├── webhook.d.ts.map
│   │   │   │   ├── webhook.js
│   │   │   │   └── webhook.js.map
│   │   │   └── v9
│   │   │       ├── application.d.ts
│   │   │       ├── application.d.ts.map
│   │   │       ├── application.js
│   │   │       ├── application.js.map
│   │   │       ├── auditLog.d.ts
│   │   │       ├── auditLog.d.ts.map
│   │   │       ├── auditLog.js
│   │   │       ├── auditLog.js.map
│   │   │       ├── autoModeration.d.ts
│   │   │       ├── autoModeration.d.ts.map
│   │   │       ├── autoModeration.js
│   │   │       ├── autoModeration.js.map
│   │   │       ├── channel.d.ts
│   │   │       ├── channel.d.ts.map
│   │   │       ├── channel.js
│   │   │       ├── channel.js.map
│   │   │       ├── emoji.d.ts
│   │   │       ├── emoji.d.ts.map
│   │   │       ├── emoji.js
│   │   │       ├── emoji.js.map
│   │   │       ├── gateway.d.ts
│   │   │       ├── gateway.d.ts.map
│   │   │       ├── gateway.js
│   │   │       ├── gateway.js.map
│   │   │       ├── guild.d.ts
│   │   │       ├── guild.d.ts.map
│   │   │       ├── guild.js
│   │   │       ├── guild.js.map
│   │   │       ├── guildScheduledEvent.d.ts
│   │   │       ├── guildScheduledEvent.d.ts.map
│   │   │       ├── guildScheduledEvent.js
│   │   │       ├── guildScheduledEvent.js.map
│   │   │       ├── index.d.ts
│   │   │       ├── index.d.ts.map
│   │   │       ├── index.js
│   │   │       ├── index.js.map
│   │   │       ├── index.mjs
│   │   │       ├── interactions.d.ts
│   │   │       ├── interactions.d.ts.map
│   │   │       ├── interactions.js
│   │   │       ├── interactions.js.map
│   │   │       ├── invite.d.ts
│   │   │       ├── invite.d.ts.map
│   │   │       ├── invite.js
│   │   │       ├── invite.js.map
│   │   │       ├── monetization.d.ts
│   │   │       ├── monetization.d.ts.map
│   │   │       ├── monetization.js
│   │   │       ├── monetization.js.map
│   │   │       ├── oauth2.d.ts
│   │   │       ├── oauth2.d.ts.map
│   │   │       ├── oauth2.js
│   │   │       ├── oauth2.js.map
│   │   │       ├── poll.d.ts
│   │   │       ├── poll.d.ts.map
│   │   │       ├── poll.js
│   │   │       ├── poll.js.map
│   │   │       ├── soundboard.d.ts
│   │   │       ├── soundboard.d.ts.map
│   │   │       ├── soundboard.js
│   │   │       ├── soundboard.js.map
│   │   │       ├── stageInstance.d.ts
│   │   │       ├── stageInstance.d.ts.map
│   │   │       ├── stageInstance.js
│   │   │       ├── stageInstance.js.map
│   │   │       ├── sticker.d.ts
│   │   │       ├── sticker.d.ts.map
│   │   │       ├── sticker.js
│   │   │       ├── sticker.js.map
│   │   │       ├── template.d.ts
│   │   │       ├── template.d.ts.map
│   │   │       ├── template.js
│   │   │       ├── template.js.map
│   │   │       ├── user.d.ts
│   │   │       ├── user.d.ts.map
│   │   │       ├── user.js
│   │   │       ├── user.js.map
│   │   │       ├── voice.d.ts
│   │   │       ├── voice.d.ts.map
│   │   │       ├── voice.js
│   │   │       ├── voice.js.map
│   │   │       ├── webhook.d.ts
│   │   │       ├── webhook.d.ts.map
│   │   │       ├── webhook.js
│   │   │       └── webhook.js.map
│   │   ├── rpc
│   │   │   ├── common.d.ts
│   │   │   ├── common.d.ts.map
│   │   │   ├── common.js
│   │   │   ├── common.js.map
│   │   │   ├── index.d.ts
│   │   │   ├── index.d.ts.map
│   │   │   ├── index.js
│   │   │   ├── index.js.map
│   │   │   ├── index.mjs
│   │   │   ├── v10.d.ts
│   │   │   ├── v10.d.ts.map
│   │   │   ├── v10.js
│   │   │   ├── v10.js.map
│   │   │   ├── v10.mjs
│   │   │   ├── v8.d.ts
│   │   │   ├── v8.d.ts.map
│   │   │   ├── v8.js
│   │   │   ├── v8.js.map
│   │   │   ├── v8.mjs
│   │   │   ├── v9.d.ts
│   │   │   ├── v9.d.ts.map
│   │   │   ├── v9.js
│   │   │   ├── v9.js.map
│   │   │   └── v9.mjs
│   │   ├── utils
│   │   │   ├── index.d.ts
│   │   │   ├── index.d.ts.map
│   │   │   ├── index.js
│   │   │   ├── index.js.map
│   │   │   ├── index.mjs
│   │   │   ├── internals.d.ts
│   │   │   ├── internals.d.ts.map
│   │   │   ├── internals.js
│   │   │   ├── internals.js.map
│   │   │   ├── v10.d.ts
│   │   │   ├── v10.d.ts.map
│   │   │   ├── v10.js
│   │   │   ├── v10.js.map
│   │   │   ├── v10.mjs
│   │   │   ├── v8.d.ts
│   │   │   ├── v8.d.ts.map
│   │   │   ├── v8.js
│   │   │   ├── v8.js.map
│   │   │   ├── v8.mjs
│   │   │   ├── v9.d.ts
│   │   │   ├── v9.d.ts.map
│   │   │   ├── v9.js
│   │   │   ├── v9.js.map
│   │   │   └── v9.mjs
│   │   ├── v10.d.ts
│   │   ├── v10.d.ts.map
│   │   ├── v10.js
│   │   ├── v10.js.map
│   │   ├── v10.mjs
│   │   ├── v6.d.ts
│   │   ├── v6.d.ts.map
│   │   ├── v6.js
│   │   ├── v6.js.map
│   │   ├── v6.mjs
│   │   ├── v8.d.ts
│   │   ├── v8.d.ts.map
│   │   ├── v8.js
│   │   ├── v8.js.map
│   │   ├── v8.mjs
│   │   ├── v9.d.ts
│   │   ├── v9.d.ts.map
│   │   ├── v9.js
│   │   ├── v9.js.map
│   │   ├── v9.mjs
│   │   └── voice
│   │       ├── index.d.ts
│   │       ├── index.d.ts.map
│   │       ├── index.js
│   │       ├── index.js.map
│   │       ├── index.mjs
│   │       ├── v4.d.ts
│   │       ├── v4.d.ts.map
│   │       ├── v4.js
│   │       ├── v4.js.map
│   │       └── v4.mjs
│   ├── discord.js
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── node_modules
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── client
│   │   │   │   ├── BaseClient.js
│   │   │   │   ├── Client.js
│   │   │   │   ├── WebhookClient.js
│   │   │   │   ├── actions
│   │   │   │   │   ├── Action.js
│   │   │   │   │   ├── ActionsManager.js
│   │   │   │   │   ├── ApplicationCommandPermissionsUpdate.js
│   │   │   │   │   ├── AutoModerationActionExecution.js
│   │   │   │   │   ├── AutoModerationRuleCreate.js
│   │   │   │   │   ├── AutoModerationRuleDelete.js
│   │   │   │   │   ├── AutoModerationRuleUpdate.js
│   │   │   │   │   ├── ChannelCreate.js
│   │   │   │   │   ├── ChannelDelete.js
│   │   │   │   │   ├── ChannelUpdate.js
│   │   │   │   │   ├── EntitlementCreate.js
│   │   │   │   │   ├── EntitlementDelete.js
│   │   │   │   │   ├── EntitlementUpdate.js
│   │   │   │   │   ├── GuildAuditLogEntryCreate.js
│   │   │   │   │   ├── GuildBanAdd.js
│   │   │   │   │   ├── GuildBanRemove.js
│   │   │   │   │   ├── GuildChannelsPositionUpdate.js
│   │   │   │   │   ├── GuildDelete.js
│   │   │   │   │   ├── GuildEmojiCreate.js
│   │   │   │   │   ├── GuildEmojiDelete.js
│   │   │   │   │   ├── GuildEmojiUpdate.js
│   │   │   │   │   ├── GuildEmojisUpdate.js
│   │   │   │   │   ├── GuildIntegrationsUpdate.js
│   │   │   │   │   ├── GuildMemberRemove.js
│   │   │   │   │   ├── GuildMemberUpdate.js
│   │   │   │   │   ├── GuildRoleCreate.js
│   │   │   │   │   ├── GuildRoleDelete.js
│   │   │   │   │   ├── GuildRoleUpdate.js
│   │   │   │   │   ├── GuildRolesPositionUpdate.js
│   │   │   │   │   ├── GuildScheduledEventCreate.js
│   │   │   │   │   ├── GuildScheduledEventDelete.js
│   │   │   │   │   ├── GuildScheduledEventUpdate.js
│   │   │   │   │   ├── GuildScheduledEventUserAdd.js
│   │   │   │   │   ├── GuildScheduledEventUserRemove.js
│   │   │   │   │   ├── GuildStickerCreate.js
│   │   │   │   │   ├── GuildStickerDelete.js
│   │   │   │   │   ├── GuildStickerUpdate.js
│   │   │   │   │   ├── GuildStickersUpdate.js
│   │   │   │   │   ├── GuildUpdate.js
│   │   │   │   │   ├── InteractionCreate.js
│   │   │   │   │   ├── InviteCreate.js
│   │   │   │   │   ├── InviteDelete.js
│   │   │   │   │   ├── MessageCreate.js
│   │   │   │   │   ├── MessageDelete.js
│   │   │   │   │   ├── MessageDeleteBulk.js
│   │   │   │   │   ├── MessagePollVoteAdd.js
│   │   │   │   │   ├── MessagePollVoteRemove.js
│   │   │   │   │   ├── MessageReactionAdd.js
│   │   │   │   │   ├── MessageReactionRemove.js
│   │   │   │   │   ├── MessageReactionRemoveAll.js
│   │   │   │   │   ├── MessageReactionRemoveEmoji.js
│   │   │   │   │   ├── MessageUpdate.js
│   │   │   │   │   ├── PresenceUpdate.js
│   │   │   │   │   ├── StageInstanceCreate.js
│   │   │   │   │   ├── StageInstanceDelete.js
│   │   │   │   │   ├── StageInstanceUpdate.js
│   │   │   │   │   ├── ThreadCreate.js
│   │   │   │   │   ├── ThreadDelete.js
│   │   │   │   │   ├── ThreadListSync.js
│   │   │   │   │   ├── ThreadMemberUpdate.js
│   │   │   │   │   ├── ThreadMembersUpdate.js
│   │   │   │   │   ├── TypingStart.js
│   │   │   │   │   ├── UserUpdate.js
│   │   │   │   │   ├── VoiceStateUpdate.js
│   │   │   │   │   └── WebhooksUpdate.js
│   │   │   │   ├── voice
│   │   │   │   │   └── ClientVoiceManager.js
│   │   │   │   └── websocket
│   │   │   │       ├── WebSocketManager.js
│   │   │   │       ├── WebSocketShard.js
│   │   │   │       └── handlers
│   │   │   │           ├── APPLICATION_COMMAND_PERMISSIONS_UPDATE.js
│   │   │   │           ├── AUTO_MODERATION_ACTION_EXECUTION.js
│   │   │   │           ├── AUTO_MODERATION_RULE_CREATE.js
│   │   │   │           ├── AUTO_MODERATION_RULE_DELETE.js
│   │   │   │           ├── AUTO_MODERATION_RULE_UPDATE.js
│   │   │   │           ├── CHANNEL_CREATE.js
│   │   │   │           ├── CHANNEL_DELETE.js
│   │   │   │           ├── CHANNEL_PINS_UPDATE.js
│   │   │   │           ├── CHANNEL_UPDATE.js
│   │   │   │           ├── ENTITLEMENT_CREATE.js
│   │   │   │           ├── ENTITLEMENT_DELETE.js
│   │   │   │           ├── ENTITLEMENT_UPDATE.js
│   │   │   │           ├── GUILD_AUDIT_LOG_ENTRY_CREATE.js
│   │   │   │           ├── GUILD_BAN_ADD.js
│   │   │   │           ├── GUILD_BAN_REMOVE.js
│   │   │   │           ├── GUILD_CREATE.js
│   │   │   │           ├── GUILD_DELETE.js
│   │   │   │           ├── GUILD_EMOJIS_UPDATE.js
│   │   │   │           ├── GUILD_INTEGRATIONS_UPDATE.js
│   │   │   │           ├── GUILD_MEMBERS_CHUNK.js
│   │   │   │           ├── GUILD_MEMBER_ADD.js
│   │   │   │           ├── GUILD_MEMBER_REMOVE.js
│   │   │   │           ├── GUILD_MEMBER_UPDATE.js
│   │   │   │           ├── GUILD_ROLE_CREATE.js
│   │   │   │           ├── GUILD_ROLE_DELETE.js
│   │   │   │           ├── GUILD_ROLE_UPDATE.js
│   │   │   │           ├── GUILD_SCHEDULED_EVENT_CREATE.js
│   │   │   │           ├── GUILD_SCHEDULED_EVENT_DELETE.js
│   │   │   │           ├── GUILD_SCHEDULED_EVENT_UPDATE.js
│   │   │   │           ├── GUILD_SCHEDULED_EVENT_USER_ADD.js
│   │   │   │           ├── GUILD_SCHEDULED_EVENT_USER_REMOVE.js
│   │   │   │           ├── GUILD_STICKERS_UPDATE.js
│   │   │   │           ├── GUILD_UPDATE.js
│   │   │   │           ├── INTERACTION_CREATE.js
│   │   │   │           ├── INVITE_CREATE.js
│   │   │   │           ├── INVITE_DELETE.js
│   │   │   │           ├── MESSAGE_CREATE.js
│   │   │   │           ├── MESSAGE_DELETE.js
│   │   │   │           ├── MESSAGE_DELETE_BULK.js
│   │   │   │           ├── MESSAGE_POLL_VOTE_ADD.js
│   │   │   │           ├── MESSAGE_POLL_VOTE_REMOVE.js
│   │   │   │           ├── MESSAGE_REACTION_ADD.js
│   │   │   │           ├── MESSAGE_REACTION_REMOVE.js
│   │   │   │           ├── MESSAGE_REACTION_REMOVE_ALL.js
│   │   │   │           ├── MESSAGE_REACTION_REMOVE_EMOJI.js
│   │   │   │           ├── MESSAGE_UPDATE.js
│   │   │   │           ├── PRESENCE_UPDATE.js
│   │   │   │           ├── READY.js
│   │   │   │           ├── RESUMED.js
│   │   │   │           ├── STAGE_INSTANCE_CREATE.js
│   │   │   │           ├── STAGE_INSTANCE_DELETE.js
│   │   │   │           ├── STAGE_INSTANCE_UPDATE.js
│   │   │   │           ├── SUBSCRIPTION_CREATE.js
│   │   │   │           ├── SUBSCRIPTION_DELETE.js
│   │   │   │           ├── SUBSCRIPTION_UPDATE.js
│   │   │   │           ├── THREAD_CREATE.js
│   │   │   │           ├── THREAD_DELETE.js
│   │   │   │           ├── THREAD_LIST_SYNC.js
│   │   │   │           ├── THREAD_MEMBERS_UPDATE.js
│   │   │   │           ├── THREAD_MEMBER_UPDATE.js
│   │   │   │           ├── THREAD_UPDATE.js
│   │   │   │           ├── TYPING_START.js
│   │   │   │           ├── USER_UPDATE.js
│   │   │   │           ├── VOICE_CHANNEL_EFFECT_SEND.js
│   │   │   │           ├── VOICE_SERVER_UPDATE.js
│   │   │   │           ├── VOICE_STATE_UPDATE.js
│   │   │   │           ├── WEBHOOKS_UPDATE.js
│   │   │   │           └── index.js
│   │   │   ├── errors
│   │   │   │   ├── DJSError.js
│   │   │   │   ├── ErrorCodes.js
│   │   │   │   ├── Messages.js
│   │   │   │   └── index.js
│   │   │   ├── index.js
│   │   │   ├── managers
│   │   │   │   ├── ApplicationCommandManager.js
│   │   │   │   ├── ApplicationCommandPermissionsManager.js
│   │   │   │   ├── ApplicationEmojiManager.js
│   │   │   │   ├── AutoModerationRuleManager.js
│   │   │   │   ├── BaseGuildEmojiManager.js
│   │   │   │   ├── BaseManager.js
│   │   │   │   ├── CachedManager.js
│   │   │   │   ├── CategoryChannelChildManager.js
│   │   │   │   ├── ChannelManager.js
│   │   │   │   ├── DMMessageManager.js
│   │   │   │   ├── DataManager.js
│   │   │   │   ├── EntitlementManager.js
│   │   │   │   ├── GuildApplicationCommandManager.js
│   │   │   │   ├── GuildBanManager.js
│   │   │   │   ├── GuildChannelManager.js
│   │   │   │   ├── GuildEmojiManager.js
│   │   │   │   ├── GuildEmojiRoleManager.js
│   │   │   │   ├── GuildForumThreadManager.js
│   │   │   │   ├── GuildInviteManager.js
│   │   │   │   ├── GuildManager.js
│   │   │   │   ├── GuildMemberManager.js
│   │   │   │   ├── GuildMemberRoleManager.js
│   │   │   │   ├── GuildMessageManager.js
│   │   │   │   ├── GuildScheduledEventManager.js
│   │   │   │   ├── GuildStickerManager.js
│   │   │   │   ├── GuildTextThreadManager.js
│   │   │   │   ├── MessageManager.js
│   │   │   │   ├── PartialGroupDMMessageManager.js
│   │   │   │   ├── PermissionOverwriteManager.js
│   │   │   │   ├── PresenceManager.js
│   │   │   │   ├── ReactionManager.js
│   │   │   │   ├── ReactionUserManager.js
│   │   │   │   ├── RoleManager.js
│   │   │   │   ├── StageInstanceManager.js
│   │   │   │   ├── SubscriptionManager.js
│   │   │   │   ├── ThreadManager.js
│   │   │   │   ├── ThreadMemberManager.js
│   │   │   │   ├── UserManager.js
│   │   │   │   └── VoiceStateManager.js
│   │   │   ├── sharding
│   │   │   │   ├── Shard.js
│   │   │   │   ├── ShardClientUtil.js
│   │   │   │   └── ShardingManager.js
│   │   │   ├── structures
│   │   │   │   ├── ActionRow.js
│   │   │   │   ├── ActionRowBuilder.js
│   │   │   │   ├── AnonymousGuild.js
│   │   │   │   ├── ApplicationCommand.js
│   │   │   │   ├── ApplicationEmoji.js
│   │   │   │   ├── ApplicationRoleConnectionMetadata.js
│   │   │   │   ├── Attachment.js
│   │   │   │   ├── AttachmentBuilder.js
│   │   │   │   ├── AutoModerationActionExecution.js
│   │   │   │   ├── AutoModerationRule.js
│   │   │   │   ├── AutocompleteInteraction.js
│   │   │   │   ├── Base.js
│   │   │   │   ├── BaseChannel.js
│   │   │   │   ├── BaseGuild.js
│   │   │   │   ├── BaseGuildEmoji.js
│   │   │   │   ├── BaseGuildTextChannel.js
│   │   │   │   ├── BaseGuildVoiceChannel.js
│   │   │   │   ├── BaseInteraction.js
│   │   │   │   ├── BaseSelectMenuComponent.js
│   │   │   │   ├── ButtonBuilder.js
│   │   │   │   ├── ButtonComponent.js
│   │   │   │   ├── ButtonInteraction.js
│   │   │   │   ├── CategoryChannel.js
│   │   │   │   ├── ChannelSelectMenuBuilder.js
│   │   │   │   ├── ChannelSelectMenuComponent.js
│   │   │   │   ├── ChannelSelectMenuInteraction.js
│   │   │   │   ├── ChatInputCommandInteraction.js
│   │   │   │   ├── ClientApplication.js
│   │   │   │   ├── ClientPresence.js
│   │   │   │   ├── ClientUser.js
│   │   │   │   ├── CommandInteraction.js
│   │   │   │   ├── CommandInteractionOptionResolver.js
│   │   │   │   ├── Component.js
│   │   │   │   ├── ContextMenuCommandInteraction.js
│   │   │   │   ├── DMChannel.js
│   │   │   │   ├── DirectoryChannel.js
│   │   │   │   ├── Embed.js
│   │   │   │   ├── EmbedBuilder.js
│   │   │   │   ├── Emoji.js
│   │   │   │   ├── Entitlement.js
│   │   │   │   ├── ForumChannel.js
│   │   │   │   ├── Guild.js
│   │   │   │   ├── GuildAuditLogs.js
│   │   │   │   ├── GuildAuditLogsEntry.js
│   │   │   │   ├── GuildBan.js
│   │   │   │   ├── GuildChannel.js
│   │   │   │   ├── GuildEmoji.js
│   │   │   │   ├── GuildMember.js
│   │   │   │   ├── GuildOnboarding.js
│   │   │   │   ├── GuildOnboardingPrompt.js
│   │   │   │   ├── GuildOnboardingPromptOption.js
│   │   │   │   ├── GuildPreview.js
│   │   │   │   ├── GuildPreviewEmoji.js
│   │   │   │   ├── GuildScheduledEvent.js
│   │   │   │   ├── GuildTemplate.js
│   │   │   │   ├── Integration.js
│   │   │   │   ├── IntegrationApplication.js
│   │   │   │   ├── InteractionCallback.js
│   │   │   │   ├── InteractionCallbackResource.js
│   │   │   │   ├── InteractionCallbackResponse.js
│   │   │   │   ├── InteractionCollector.js
│   │   │   │   ├── InteractionResponse.js
│   │   │   │   ├── InteractionWebhook.js
│   │   │   │   ├── Invite.js
│   │   │   │   ├── InviteGuild.js
│   │   │   │   ├── InviteStageInstance.js
│   │   │   │   ├── MediaChannel.js
│   │   │   │   ├── MentionableSelectMenuBuilder.js
│   │   │   │   ├── MentionableSelectMenuComponent.js
│   │   │   │   ├── MentionableSelectMenuInteraction.js
│   │   │   │   ├── Message.js
│   │   │   │   ├── MessageCollector.js
│   │   │   │   ├── MessageComponentInteraction.js
│   │   │   │   ├── MessageContextMenuCommandInteraction.js
│   │   │   │   ├── MessageMentions.js
│   │   │   │   ├── MessagePayload.js
│   │   │   │   ├── MessageReaction.js
│   │   │   │   ├── ModalBuilder.js
│   │   │   │   ├── ModalSubmitFields.js
│   │   │   │   ├── ModalSubmitInteraction.js
│   │   │   │   ├── NewsChannel.js
│   │   │   │   ├── OAuth2Guild.js
│   │   │   │   ├── PartialGroupDMChannel.js
│   │   │   │   ├── PermissionOverwrites.js
│   │   │   │   ├── Poll.js
│   │   │   │   ├── PollAnswer.js
│   │   │   │   ├── Presence.js
│   │   │   │   ├── ReactionCollector.js
│   │   │   │   ├── ReactionEmoji.js
│   │   │   │   ├── Role.js
│   │   │   │   ├── RoleSelectMenuBuilder.js
│   │   │   │   ├── RoleSelectMenuComponent.js
│   │   │   │   ├── RoleSelectMenuInteraction.js
│   │   │   │   ├── SKU.js
│   │   │   │   ├── SelectMenuBuilder.js
│   │   │   │   ├── SelectMenuComponent.js
│   │   │   │   ├── SelectMenuInteraction.js
│   │   │   │   ├── SelectMenuOptionBuilder.js
│   │   │   │   ├── StageChannel.js
│   │   │   │   ├── StageInstance.js
│   │   │   │   ├── Sticker.js
│   │   │   │   ├── StickerPack.js
│   │   │   │   ├── StringSelectMenuBuilder.js
│   │   │   │   ├── StringSelectMenuComponent.js
│   │   │   │   ├── StringSelectMenuInteraction.js
│   │   │   │   ├── StringSelectMenuOptionBuilder.js
│   │   │   │   ├── Subscription.js
│   │   │   │   ├── Team.js
│   │   │   │   ├── TeamMember.js
│   │   │   │   ├── TextChannel.js
│   │   │   │   ├── TextInputBuilder.js
│   │   │   │   ├── TextInputComponent.js
│   │   │   │   ├── ThreadChannel.js
│   │   │   │   ├── ThreadMember.js
│   │   │   │   ├── ThreadOnlyChannel.js
│   │   │   │   ├── Typing.js
│   │   │   │   ├── User.js
│   │   │   │   ├── UserContextMenuCommandInteraction.js
│   │   │   │   ├── UserSelectMenuBuilder.js
│   │   │   │   ├── UserSelectMenuComponent.js
│   │   │   │   ├── UserSelectMenuInteraction.js
│   │   │   │   ├── VoiceChannel.js
│   │   │   │   ├── VoiceChannelEffect.js
│   │   │   │   ├── VoiceRegion.js
│   │   │   │   ├── VoiceState.js
│   │   │   │   ├── Webhook.js
│   │   │   │   ├── WelcomeChannel.js
│   │   │   │   ├── WelcomeScreen.js
│   │   │   │   ├── Widget.js
│   │   │   │   ├── WidgetMember.js
│   │   │   │   └── interfaces
│   │   │   │       ├── Application.js
│   │   │   │       ├── Collector.js
│   │   │   │       ├── InteractionResponses.js
│   │   │   │       └── TextBasedChannel.js
│   │   │   └── util
│   │   │       ├── APITypes.js
│   │   │       ├── ActivityFlagsBitField.js
│   │   │       ├── ApplicationFlagsBitField.js
│   │   │       ├── AttachmentFlagsBitField.js
│   │   │       ├── BitField.js
│   │   │       ├── ChannelFlagsBitField.js
│   │   │       ├── Channels.js
│   │   │       ├── Colors.js
│   │   │       ├── Components.js
│   │   │       ├── Constants.js
│   │   │       ├── DataResolver.js
│   │   │       ├── Enums.js
│   │   │       ├── Events.js
│   │   │       ├── Formatters.js
│   │   │       ├── GuildMemberFlagsBitField.js
│   │   │       ├── IntentsBitField.js
│   │   │       ├── LimitedCollection.js
│   │   │       ├── MessageFlagsBitField.js
│   │   │       ├── Options.js
│   │   │       ├── Partials.js
│   │   │       ├── PermissionsBitField.js
│   │   │       ├── RoleFlagsBitField.js
│   │   │       ├── SKUFlagsBitField.js
│   │   │       ├── ShardEvents.js
│   │   │       ├── Status.js
│   │   │       ├── Sweepers.js
│   │   │       ├── Symbols.js
│   │   │       ├── SystemChannelFlagsBitField.js
│   │   │       ├── ThreadMemberFlagsBitField.js
│   │   │       ├── Transformers.js
│   │   │       ├── UserFlagsBitField.js
│   │   │       ├── Util.js
│   │   │       └── WebSocketShardEvents.js
│   │   └── typings
│   │       ├── index.d.mts
│   │       ├── index.d.ts
│   │       ├── index.test-d.ts
│   │       ├── rawDataTypes.d.mts
│   │       ├── rawDataTypes.d.ts
│   │       └── tsdoc-metadata.json
│   ├── doctrine
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── LICENSE.closure-compiler
│   │   ├── LICENSE.esprima
│   │   ├── README.md
│   │   ├── lib
│   │   │   ├── doctrine.js
│   │   │   ├── typed.js
│   │   │   └── utility.js
│   │   └── package.json
│   ├── dotenv
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README-es.md
│   │   ├── README.md
│   │   ├── config.d.ts
│   │   ├── config.js
│   │   ├── lib
│   │   │   ├── cli-options.js
│   │   │   ├── env-options.js
│   │   │   ├── main.d.ts
│   │   │   └── main.js
│   │   └── package.json
│   ├── emoji-regex
│   │   ├── LICENSE-MIT.txt
│   │   ├── README.md
│   │   ├── es2015
│   │   │   ├── index.js
│   │   │   └── text.js
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── package.json
│   │   └── text.js
│   ├── env-paths
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── escape-string-regexp
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── eslint
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── bin
│   │   │   └── eslint.js
│   │   ├── conf
│   │   │   ├── config-schema.js
│   │   │   ├── default-cli-options.js
│   │   │   ├── globals.js
│   │   │   ├── replacements.json
│   │   │   └── rule-type-list.json
│   │   ├── lib
│   │   │   ├── api.js
│   │   │   ├── cli-engine
│   │   │   │   ├── cli-engine.js
│   │   │   │   ├── file-enumerator.js
│   │   │   │   ├── formatters
│   │   │   │   │   ├── checkstyle.js
│   │   │   │   │   ├── compact.js
│   │   │   │   │   ├── formatters-meta.json
│   │   │   │   │   ├── html.js
│   │   │   │   │   ├── jslint-xml.js
│   │   │   │   │   ├── json-with-metadata.js
│   │   │   │   │   ├── json.js
│   │   │   │   │   ├── junit.js
│   │   │   │   │   ├── stylish.js
│   │   │   │   │   ├── tap.js
│   │   │   │   │   ├── unix.js
│   │   │   │   │   └── visualstudio.js
│   │   │   │   ├── hash.js
│   │   │   │   ├── index.js
│   │   │   │   ├── lint-result-cache.js
│   │   │   │   ├── load-rules.js
│   │   │   │   └── xml-escape.js
│   │   │   ├── cli.js
│   │   │   ├── config
│   │   │   │   ├── default-config.js
│   │   │   │   ├── flat-config-array.js
│   │   │   │   ├── flat-config-helpers.js
│   │   │   │   ├── flat-config-schema.js
│   │   │   │   └── rule-validator.js
│   │   │   ├── eslint
│   │   │   │   ├── eslint-helpers.js
│   │   │   │   ├── eslint.js
│   │   │   │   ├── flat-eslint.js
│   │   │   │   └── index.js
│   │   │   ├── linter
│   │   │   │   ├── apply-disable-directives.js
│   │   │   │   ├── code-path-analysis
│   │   │   │   │   ├── code-path-analyzer.js
│   │   │   │   │   ├── code-path-segment.js
│   │   │   │   │   ├── code-path-state.js
│   │   │   │   │   ├── code-path.js
│   │   │   │   │   ├── debug-helpers.js
│   │   │   │   │   ├── fork-context.js
│   │   │   │   │   └── id-generator.js
│   │   │   │   ├── config-comment-parser.js
│   │   │   │   ├── index.js
│   │   │   │   ├── interpolate.js
│   │   │   │   ├── linter.js
│   │   │   │   ├── node-event-generator.js
│   │   │   │   ├── report-translator.js
│   │   │   │   ├── rule-fixer.js
│   │   │   │   ├── rules.js
│   │   │   │   ├── safe-emitter.js
│   │   │   │   ├── source-code-fixer.js
│   │   │   │   └── timing.js
│   │   │   ├── options.js
│   │   │   ├── rule-tester
│   │   │   │   ├── flat-rule-tester.js
│   │   │   │   ├── index.js
│   │   │   │   └── rule-tester.js
│   │   │   ├── rules
│   │   │   │   ├── accessor-pairs.js
│   │   │   │   ├── array-bracket-newline.js
│   │   │   │   ├── array-bracket-spacing.js
│   │   │   │   ├── array-callback-return.js
│   │   │   │   ├── array-element-newline.js
│   │   │   │   ├── arrow-body-style.js
│   │   │   │   ├── arrow-parens.js
│   │   │   │   ├── arrow-spacing.js
│   │   │   │   ├── block-scoped-var.js
│   │   │   │   ├── block-spacing.js
│   │   │   │   ├── brace-style.js
│   │   │   │   ├── callback-return.js
│   │   │   │   ├── camelcase.js
│   │   │   │   ├── capitalized-comments.js
│   │   │   │   ├── class-methods-use-this.js
│   │   │   │   ├── comma-dangle.js
│   │   │   │   ├── comma-spacing.js
│   │   │   │   ├── comma-style.js
│   │   │   │   ├── complexity.js
│   │   │   │   ├── computed-property-spacing.js
│   │   │   │   ├── consistent-return.js
│   │   │   │   ├── consistent-this.js
│   │   │   │   ├── constructor-super.js
│   │   │   │   ├── curly.js
│   │   │   │   ├── default-case-last.js
│   │   │   │   ├── default-case.js
│   │   │   │   ├── default-param-last.js
│   │   │   │   ├── dot-location.js
│   │   │   │   ├── dot-notation.js
│   │   │   │   ├── eol-last.js
│   │   │   │   ├── eqeqeq.js
│   │   │   │   ├── for-direction.js
│   │   │   │   ├── func-call-spacing.js
│   │   │   │   ├── func-name-matching.js
│   │   │   │   ├── func-names.js
│   │   │   │   ├── func-style.js
│   │   │   │   ├── function-call-argument-newline.js
│   │   │   │   ├── function-paren-newline.js
│   │   │   │   ├── generator-star-spacing.js
│   │   │   │   ├── getter-return.js
│   │   │   │   ├── global-require.js
│   │   │   │   ├── grouped-accessor-pairs.js
│   │   │   │   ├── guard-for-in.js
│   │   │   │   ├── handle-callback-err.js
│   │   │   │   ├── id-blacklist.js
│   │   │   │   ├── id-denylist.js
│   │   │   │   ├── id-length.js
│   │   │   │   ├── id-match.js
│   │   │   │   ├── implicit-arrow-linebreak.js
│   │   │   │   ├── indent-legacy.js
│   │   │   │   ├── indent.js
│   │   │   │   ├── index.js
│   │   │   │   ├── init-declarations.js
│   │   │   │   ├── jsx-quotes.js
│   │   │   │   ├── key-spacing.js
│   │   │   │   ├── keyword-spacing.js
│   │   │   │   ├── line-comment-position.js
│   │   │   │   ├── linebreak-style.js
│   │   │   │   ├── lines-around-comment.js
│   │   │   │   ├── lines-around-directive.js
│   │   │   │   ├── lines-between-class-members.js
│   │   │   │   ├── logical-assignment-operators.js
│   │   │   │   ├── max-classes-per-file.js
│   │   │   │   ├── max-depth.js
│   │   │   │   ├── max-len.js
│   │   │   │   ├── max-lines-per-function.js
│   │   │   │   ├── max-lines.js
│   │   │   │   ├── max-nested-callbacks.js
│   │   │   │   ├── max-params.js
│   │   │   │   ├── max-statements-per-line.js
│   │   │   │   ├── max-statements.js
│   │   │   │   ├── multiline-comment-style.js
│   │   │   │   ├── multiline-ternary.js
│   │   │   │   ├── new-cap.js
│   │   │   │   ├── new-parens.js
│   │   │   │   ├── newline-after-var.js
│   │   │   │   ├── newline-before-return.js
│   │   │   │   ├── newline-per-chained-call.js
│   │   │   │   ├── no-alert.js
│   │   │   │   ├── no-array-constructor.js
│   │   │   │   ├── no-async-promise-executor.js
│   │   │   │   ├── no-await-in-loop.js
│   │   │   │   ├── no-bitwise.js
│   │   │   │   ├── no-buffer-constructor.js
│   │   │   │   ├── no-caller.js
│   │   │   │   ├── no-case-declarations.js
│   │   │   │   ├── no-catch-shadow.js
│   │   │   │   ├── no-class-assign.js
│   │   │   │   ├── no-compare-neg-zero.js
│   │   │   │   ├── no-cond-assign.js
│   │   │   │   ├── no-confusing-arrow.js
│   │   │   │   ├── no-console.js
│   │   │   │   ├── no-const-assign.js
│   │   │   │   ├── no-constant-binary-expression.js
│   │   │   │   ├── no-constant-condition.js
│   │   │   │   ├── no-constructor-return.js
│   │   │   │   ├── no-continue.js
│   │   │   │   ├── no-control-regex.js
│   │   │   │   ├── no-debugger.js
│   │   │   │   ├── no-delete-var.js
│   │   │   │   ├── no-div-regex.js
│   │   │   │   ├── no-dupe-args.js
│   │   │   │   ├── no-dupe-class-members.js
│   │   │   │   ├── no-dupe-else-if.js
│   │   │   │   ├── no-dupe-keys.js
│   │   │   │   ├── no-duplicate-case.js
│   │   │   │   ├── no-duplicate-imports.js
│   │   │   │   ├── no-else-return.js
│   │   │   │   ├── no-empty-character-class.js
│   │   │   │   ├── no-empty-function.js
│   │   │   │   ├── no-empty-pattern.js
│   │   │   │   ├── no-empty-static-block.js
│   │   │   │   ├── no-empty.js
│   │   │   │   ├── no-eq-null.js
│   │   │   │   ├── no-eval.js
│   │   │   │   ├── no-ex-assign.js
│   │   │   │   ├── no-extend-native.js
│   │   │   │   ├── no-extra-bind.js
│   │   │   │   ├── no-extra-boolean-cast.js
│   │   │   │   ├── no-extra-label.js
│   │   │   │   ├── no-extra-parens.js
│   │   │   │   ├── no-extra-semi.js
│   │   │   │   ├── no-fallthrough.js
│   │   │   │   ├── no-floating-decimal.js
│   │   │   │   ├── no-func-assign.js
│   │   │   │   ├── no-global-assign.js
│   │   │   │   ├── no-implicit-coercion.js
│   │   │   │   ├── no-implicit-globals.js
│   │   │   │   ├── no-implied-eval.js
│   │   │   │   ├── no-import-assign.js
│   │   │   │   ├── no-inline-comments.js
│   │   │   │   ├── no-inner-declarations.js
│   │   │   │   ├── no-invalid-regexp.js
│   │   │   │   ├── no-invalid-this.js
│   │   │   │   ├── no-irregular-whitespace.js
│   │   │   │   ├── no-iterator.js
│   │   │   │   ├── no-label-var.js
│   │   │   │   ├── no-labels.js
│   │   │   │   ├── no-lone-blocks.js
│   │   │   │   ├── no-lonely-if.js
│   │   │   │   ├── no-loop-func.js
│   │   │   │   ├── no-loss-of-precision.js
│   │   │   │   ├── no-magic-numbers.js
│   │   │   │   ├── no-misleading-character-class.js
│   │   │   │   ├── no-mixed-operators.js
│   │   │   │   ├── no-mixed-requires.js
│   │   │   │   ├── no-mixed-spaces-and-tabs.js
│   │   │   │   ├── no-multi-assign.js
│   │   │   │   ├── no-multi-spaces.js
│   │   │   │   ├── no-multi-str.js
│   │   │   │   ├── no-multiple-empty-lines.js
│   │   │   │   ├── no-native-reassign.js
│   │   │   │   ├── no-negated-condition.js
│   │   │   │   ├── no-negated-in-lhs.js
│   │   │   │   ├── no-nested-ternary.js
│   │   │   │   ├── no-new-func.js
│   │   │   │   ├── no-new-native-nonconstructor.js
│   │   │   │   ├── no-new-object.js
│   │   │   │   ├── no-new-require.js
│   │   │   │   ├── no-new-symbol.js
│   │   │   │   ├── no-new-wrappers.js
│   │   │   │   ├── no-new.js
│   │   │   │   ├── no-nonoctal-decimal-escape.js
│   │   │   │   ├── no-obj-calls.js
│   │   │   │   ├── no-object-constructor.js
│   │   │   │   ├── no-octal-escape.js
│   │   │   │   ├── no-octal.js
│   │   │   │   ├── no-param-reassign.js
│   │   │   │   ├── no-path-concat.js
│   │   │   │   ├── no-plusplus.js
│   │   │   │   ├── no-process-env.js
│   │   │   │   ├── no-process-exit.js
│   │   │   │   ├── no-promise-executor-return.js
│   │   │   │   ├── no-proto.js
│   │   │   │   ├── no-prototype-builtins.js
│   │   │   │   ├── no-redeclare.js
│   │   │   │   ├── no-regex-spaces.js
│   │   │   │   ├── no-restricted-exports.js
│   │   │   │   ├── no-restricted-globals.js
│   │   │   │   ├── no-restricted-imports.js
│   │   │   │   ├── no-restricted-modules.js
│   │   │   │   ├── no-restricted-properties.js
│   │   │   │   ├── no-restricted-syntax.js
│   │   │   │   ├── no-return-assign.js
│   │   │   │   ├── no-return-await.js
│   │   │   │   ├── no-script-url.js
│   │   │   │   ├── no-self-assign.js
│   │   │   │   ├── no-self-compare.js
│   │   │   │   ├── no-sequences.js
│   │   │   │   ├── no-setter-return.js
│   │   │   │   ├── no-shadow-restricted-names.js
│   │   │   │   ├── no-shadow.js
│   │   │   │   ├── no-spaced-func.js
│   │   │   │   ├── no-sparse-arrays.js
│   │   │   │   ├── no-sync.js
│   │   │   │   ├── no-tabs.js
│   │   │   │   ├── no-template-curly-in-string.js
│   │   │   │   ├── no-ternary.js
│   │   │   │   ├── no-this-before-super.js
│   │   │   │   ├── no-throw-literal.js
│   │   │   │   ├── no-trailing-spaces.js
│   │   │   │   ├── no-undef-init.js
│   │   │   │   ├── no-undef.js
│   │   │   │   ├── no-undefined.js
│   │   │   │   ├── no-underscore-dangle.js
│   │   │   │   ├── no-unexpected-multiline.js
│   │   │   │   ├── no-unmodified-loop-condition.js
│   │   │   │   ├── no-unneeded-ternary.js
│   │   │   │   ├── no-unreachable-loop.js
│   │   │   │   ├── no-unreachable.js
│   │   │   │   ├── no-unsafe-finally.js
│   │   │   │   ├── no-unsafe-negation.js
│   │   │   │   ├── no-unsafe-optional-chaining.js
│   │   │   │   ├── no-unused-expressions.js
│   │   │   │   ├── no-unused-labels.js
│   │   │   │   ├── no-unused-private-class-members.js
│   │   │   │   ├── no-unused-vars.js
│   │   │   │   ├── no-use-before-define.js
│   │   │   │   ├── no-useless-backreference.js
│   │   │   │   ├── no-useless-call.js
│   │   │   │   ├── no-useless-catch.js
│   │   │   │   ├── no-useless-computed-key.js
│   │   │   │   ├── no-useless-concat.js
│   │   │   │   ├── no-useless-constructor.js
│   │   │   │   ├── no-useless-escape.js
│   │   │   │   ├── no-useless-rename.js
│   │   │   │   ├── no-useless-return.js
│   │   │   │   ├── no-var.js
│   │   │   │   ├── no-void.js
│   │   │   │   ├── no-warning-comments.js
│   │   │   │   ├── no-whitespace-before-property.js
│   │   │   │   ├── no-with.js
│   │   │   │   ├── nonblock-statement-body-position.js
│   │   │   │   ├── object-curly-newline.js
│   │   │   │   ├── object-curly-spacing.js
│   │   │   │   ├── object-property-newline.js
│   │   │   │   ├── object-shorthand.js
│   │   │   │   ├── one-var-declaration-per-line.js
│   │   │   │   ├── one-var.js
│   │   │   │   ├── operator-assignment.js
│   │   │   │   ├── operator-linebreak.js
│   │   │   │   ├── padded-blocks.js
│   │   │   │   ├── padding-line-between-statements.js
│   │   │   │   ├── prefer-arrow-callback.js
│   │   │   │   ├── prefer-const.js
│   │   │   │   ├── prefer-destructuring.js
│   │   │   │   ├── prefer-exponentiation-operator.js
│   │   │   │   ├── prefer-named-capture-group.js
│   │   │   │   ├── prefer-numeric-literals.js
│   │   │   │   ├── prefer-object-has-own.js
│   │   │   │   ├── prefer-object-spread.js
│   │   │   │   ├── prefer-promise-reject-errors.js
│   │   │   │   ├── prefer-reflect.js
│   │   │   │   ├── prefer-regex-literals.js
│   │   │   │   ├── prefer-rest-params.js
│   │   │   │   ├── prefer-spread.js
│   │   │   │   ├── prefer-template.js
│   │   │   │   ├── quote-props.js
│   │   │   │   ├── quotes.js
│   │   │   │   ├── radix.js
│   │   │   │   ├── require-atomic-updates.js
│   │   │   │   ├── require-await.js
│   │   │   │   ├── require-jsdoc.js
│   │   │   │   ├── require-unicode-regexp.js
│   │   │   │   ├── require-yield.js
│   │   │   │   ├── rest-spread-spacing.js
│   │   │   │   ├── semi-spacing.js
│   │   │   │   ├── semi-style.js
│   │   │   │   ├── semi.js
│   │   │   │   ├── sort-imports.js
│   │   │   │   ├── sort-keys.js
│   │   │   │   ├── sort-vars.js
│   │   │   │   ├── space-before-blocks.js
│   │   │   │   ├── space-before-function-paren.js
│   │   │   │   ├── space-in-parens.js
│   │   │   │   ├── space-infix-ops.js
│   │   │   │   ├── space-unary-ops.js
│   │   │   │   ├── spaced-comment.js
│   │   │   │   ├── strict.js
│   │   │   │   ├── switch-colon-spacing.js
│   │   │   │   ├── symbol-description.js
│   │   │   │   ├── template-curly-spacing.js
│   │   │   │   ├── template-tag-spacing.js
│   │   │   │   ├── unicode-bom.js
│   │   │   │   ├── use-isnan.js
│   │   │   │   ├── utils
│   │   │   │   │   ├── ast-utils.js
│   │   │   │   │   ├── fix-tracker.js
│   │   │   │   │   ├── keywords.js
│   │   │   │   │   ├── lazy-loading-rule-map.js
│   │   │   │   │   ├── patterns
│   │   │   │   │   │   └── letters.js
│   │   │   │   │   ├── regular-expressions.js
│   │   │   │   │   └── unicode
│   │   │   │   │       ├── index.js
│   │   │   │   │       ├── is-combining-character.js
│   │   │   │   │       ├── is-emoji-modifier.js
│   │   │   │   │       ├── is-regional-indicator-symbol.js
│   │   │   │   │       └── is-surrogate-pair.js
│   │   │   │   ├── valid-jsdoc.js
│   │   │   │   ├── valid-typeof.js
│   │   │   │   ├── vars-on-top.js
│   │   │   │   ├── wrap-iife.js
│   │   │   │   ├── wrap-regex.js
│   │   │   │   ├── yield-star-spacing.js
│   │   │   │   └── yoda.js
│   │   │   ├── shared
│   │   │   │   ├── ajv.js
│   │   │   │   ├── ast-utils.js
│   │   │   │   ├── config-validator.js
│   │   │   │   ├── deprecation-warnings.js
│   │   │   │   ├── directives.js
│   │   │   │   ├── logging.js
│   │   │   │   ├── relative-module-resolver.js
│   │   │   │   ├── runtime-info.js
│   │   │   │   ├── severity.js
│   │   │   │   ├── string-utils.js
│   │   │   │   ├── traverser.js
│   │   │   │   └── types.js
│   │   │   ├── source-code
│   │   │   │   ├── index.js
│   │   │   │   ├── source-code.js
│   │   │   │   └── token-store
│   │   │   │       ├── backward-token-comment-cursor.js
│   │   │   │       ├── backward-token-cursor.js
│   │   │   │       ├── cursor.js
│   │   │   │       ├── cursors.js
│   │   │   │       ├── decorative-cursor.js
│   │   │   │       ├── filter-cursor.js
│   │   │   │       ├── forward-token-comment-cursor.js
│   │   │   │       ├── forward-token-cursor.js
│   │   │   │       ├── index.js
│   │   │   │       ├── limit-cursor.js
│   │   │   │       ├── padded-token-cursor.js
│   │   │   │       ├── skip-cursor.js
│   │   │   │       └── utils.js
│   │   │   └── unsupported-api.js
│   │   ├── messages
│   │   │   ├── all-files-ignored.js
│   │   │   ├── eslintrc-incompat.js
│   │   │   ├── eslintrc-plugins.js
│   │   │   ├── extend-config-missing.js
│   │   │   ├── failed-to-read-json.js
│   │   │   ├── file-not-found.js
│   │   │   ├── invalid-rule-options.js
│   │   │   ├── invalid-rule-severity.js
│   │   │   ├── no-config-found.js
│   │   │   ├── plugin-conflict.js
│   │   │   ├── plugin-invalid.js
│   │   │   ├── plugin-missing.js
│   │   │   ├── print-config-with-directory-path.js
│   │   │   ├── shared.js
│   │   │   └── whitespace-found.js
│   │   ├── node_modules
│   │   │   ├── eslint-scope
│   │   │   │   ├── LICENSE
│   │   │   │   ├── README.md
│   │   │   │   ├── dist
│   │   │   │   │   └── eslint-scope.cjs
│   │   │   │   ├── lib
│   │   │   │   │   ├── definition.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── pattern-visitor.js
│   │   │   │   │   ├── reference.js
│   │   │   │   │   ├── referencer.js
│   │   │   │   │   ├── scope-manager.js
│   │   │   │   │   ├── scope.js
│   │   │   │   │   ├── variable.js
│   │   │   │   │   └── version.js
│   │   │   │   └── package.json
│   │   │   └── estraverse
│   │   │       ├── .jshintrc
│   │   │       ├── LICENSE.BSD
│   │   │       ├── README.md
│   │   │       ├── estraverse.js
│   │   │       ├── gulpfile.js
│   │   │       └── package.json
│   │   └── package.json
│   ├── eslint-scope
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── lib
│   │   │   ├── definition.js
│   │   │   ├── index.js
│   │   │   ├── pattern-visitor.js
│   │   │   ├── reference.js
│   │   │   ├── referencer.js
│   │   │   ├── scope-manager.js
│   │   │   ├── scope.js
│   │   │   └── variable.js
│   │   └── package.json
│   ├── eslint-visitor-keys
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── dist
│   │   │   ├── eslint-visitor-keys.cjs
│   │   │   ├── eslint-visitor-keys.d.cts
│   │   │   ├── index.d.ts
│   │   │   └── visitor-keys.d.ts
│   │   ├── lib
│   │   │   ├── index.js
│   │   │   └── visitor-keys.js
│   │   └── package.json
│   ├── espree
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── dist
│   │   │   └── espree.cjs
│   │   ├── espree.js
│   │   ├── lib
│   │   │   ├── espree.js
│   │   │   ├── features.js
│   │   │   ├── options.js
│   │   │   ├── token-translator.js
│   │   │   └── version.js
│   │   └── package.json
│   ├── esquery
│   │   ├── README.md
│   │   ├── dist
│   │   │   ├── esquery.esm.js
│   │   │   ├── esquery.esm.min.js
│   │   │   ├── esquery.esm.min.js.map
│   │   │   ├── esquery.js
│   │   │   ├── esquery.lite.js
│   │   │   ├── esquery.lite.min.js
│   │   │   ├── esquery.lite.min.js.map
│   │   │   ├── esquery.min.js
│   │   │   └── esquery.min.js.map
│   │   ├── license.txt
│   │   ├── node_modules
│   │   │   └── estraverse
│   │   │       ├── .jshintrc
│   │   │       ├── LICENSE.BSD
│   │   │       ├── README.md
│   │   │       ├── estraverse.js
│   │   │       ├── gulpfile.js
│   │   │       └── package.json
│   │   ├── package.json
│   │   └── parser.js
│   ├── esrecurse
│   │   ├── .babelrc
│   │   ├── README.md
│   │   ├── esrecurse.js
│   │   ├── gulpfile.babel.js
│   │   ├── node_modules
│   │   │   └── estraverse
│   │   │       ├── .jshintrc
│   │   │       ├── LICENSE.BSD
│   │   │       ├── README.md
│   │   │       ├── estraverse.js
│   │   │       ├── gulpfile.js
│   │   │       └── package.json
│   │   └── package.json
│   ├── estraverse
│   │   ├── .jshintrc
│   │   ├── LICENSE.BSD
│   │   ├── README.md
│   │   ├── estraverse.js
│   │   ├── gulpfile.js
│   │   └── package.json
│   ├── esutils
│   │   ├── LICENSE.BSD
│   │   ├── README.md
│   │   ├── lib
│   │   │   ├── ast.js
│   │   │   ├── code.js
│   │   │   ├── keyword.js
│   │   │   └── utils.js
│   │   └── package.json
│   ├── fast-deep-equal
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── es6
│   │   │   ├── index.d.ts
│   │   │   ├── index.js
│   │   │   ├── react.d.ts
│   │   │   └── react.js
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── package.json
│   │   ├── react.d.ts
│   │   └── react.js
│   ├── fast-glob
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── node_modules
│   │   │   └── glob-parent
│   │   │       ├── CHANGELOG.md
│   │   │       ├── LICENSE
│   │   │       ├── README.md
│   │   │       ├── index.js
│   │   │       └── package.json
│   │   ├── out
│   │   │   ├── index.d.ts
│   │   │   ├── index.js
│   │   │   ├── managers
│   │   │   │   ├── tasks.d.ts
│   │   │   │   └── tasks.js
│   │   │   ├── providers
│   │   │   │   ├── async.d.ts
│   │   │   │   ├── async.js
│   │   │   │   ├── filters
│   │   │   │   │   ├── deep.d.ts
│   │   │   │   │   ├── deep.js
│   │   │   │   │   ├── entry.d.ts
│   │   │   │   │   ├── entry.js
│   │   │   │   │   ├── error.d.ts
│   │   │   │   │   └── error.js
│   │   │   │   ├── matchers
│   │   │   │   │   ├── matcher.d.ts
│   │   │   │   │   ├── matcher.js
│   │   │   │   │   ├── partial.d.ts
│   │   │   │   │   └── partial.js
│   │   │   │   ├── provider.d.ts
│   │   │   │   ├── provider.js
│   │   │   │   ├── stream.d.ts
│   │   │   │   ├── stream.js
│   │   │   │   ├── sync.d.ts
│   │   │   │   ├── sync.js
│   │   │   │   └── transformers
│   │   │   │       ├── entry.d.ts
│   │   │   │       └── entry.js
│   │   │   ├── readers
│   │   │   │   ├── async.d.ts
│   │   │   │   ├── async.js
│   │   │   │   ├── reader.d.ts
│   │   │   │   ├── reader.js
│   │   │   │   ├── stream.d.ts
│   │   │   │   ├── stream.js
│   │   │   │   ├── sync.d.ts
│   │   │   │   └── sync.js
│   │   │   ├── settings.d.ts
│   │   │   ├── settings.js
│   │   │   ├── types
│   │   │   │   ├── index.d.ts
│   │   │   │   └── index.js
│   │   │   └── utils
│   │   │       ├── array.d.ts
│   │   │       ├── array.js
│   │   │       ├── errno.d.ts
│   │   │       ├── errno.js
│   │   │       ├── fs.d.ts
│   │   │       ├── fs.js
│   │   │       ├── index.d.ts
│   │   │       ├── index.js
│   │   │       ├── path.d.ts
│   │   │       ├── path.js
│   │   │       ├── pattern.d.ts
│   │   │       ├── pattern.js
│   │   │       ├── stream.d.ts
│   │   │       ├── stream.js
│   │   │       ├── string.d.ts
│   │   │       └── string.js
│   │   └── package.json
│   ├── fast-json-stable-stringify
│   │   ├── .eslintrc.yml
│   │   ├── .github
│   │   │   └── FUNDING.yml
│   │   ├── .travis.yml
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── benchmark
│   │   │   ├── index.js
│   │   │   └── test.json
│   │   ├── example
│   │   │   ├── key_cmp.js
│   │   │   ├── nested.js
│   │   │   ├── str.js
│   │   │   └── value_cmp.js
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test
│   │       ├── cmp.js
│   │       ├── nested.js
│   │       ├── str.js
│   │       └── to-json.js
│   ├── fast-levenshtein
│   │   ├── LICENSE.md
│   │   ├── README.md
│   │   ├── levenshtein.js
│   │   └── package.json
│   ├── fast-xml-parser
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── package.json
│   │   └── src
│   │       ├── cli
│   │       │   ├── cli.js
│   │       │   ├── man.js
│   │       │   └── read.js
│   │       ├── fxp.d.ts
│   │       ├── fxp.js
│   │       ├── util.js
│   │       ├── v5
│   │       │   ├── CharsSymbol.js
│   │       │   ├── EntitiesParser.js
│   │       │   ├── OptionsBuilder.js
│   │       │   ├── OutputBuilders
│   │       │   │   ├── BaseOutputBuilder.js
│   │       │   │   ├── JsArrBuilder.js
│   │       │   │   ├── JsMinArrBuilder.js
│   │       │   │   ├── JsObjBuilder.js
│   │       │   │   └── ParserOptionsBuilder.js
│   │       │   ├── Report.js
│   │       │   ├── TagPath.js
│   │       │   ├── TagPathMatcher.js
│   │       │   ├── XMLParser.js
│   │       │   ├── Xml2JsParser.js
│   │       │   ├── XmlPartReader.js
│   │       │   ├── XmlSpecialTagsReader.js
│   │       │   ├── inputSource
│   │       │   │   ├── BufferSource.js
│   │       │   │   └── StringSource.js
│   │       │   └── valueParsers
│   │       │       ├── EntitiesParser.js
│   │       │       ├── booleanParser.js
│   │       │       ├── booleanParserExt.js
│   │       │       ├── currency.js
│   │       │       ├── join.js
│   │       │       ├── number.js
│   │       │       └── trim.js
│   │       ├── validator.js
│   │       ├── xmlbuilder
│   │       │   ├── json2xml.js
│   │       │   ├── orderedJs2Xml.js
│   │       │   └── prettifyJs2Xml.js
│   │       └── xmlparser
│   │           ├── DocTypeReader.js
│   │           ├── OptionsBuilder.js
│   │           ├── OrderedObjParser.js
│   │           ├── XMLParser.js
│   │           ├── node2json.js
│   │           └── xmlNode.js
│   ├── fastq
│   │   ├── .github
│   │   │   ├── dependabot.yml
│   │   │   └── workflows
│   │   │       └── ci.yml
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   ├── bench.js
│   │   ├── example.js
│   │   ├── example.mjs
│   │   ├── index.d.ts
│   │   ├── package.json
│   │   ├── queue.js
│   │   └── test
│   │       ├── example.ts
│   │       ├── promise.js
│   │       ├── test.js
│   │       └── tsconfig.json
│   ├── ffmpeg-static
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── example.js
│   │   ├── ffmpeg
│   │   ├── ffmpeg.LICENSE
│   │   ├── ffmpeg.README
│   │   ├── index.js
│   │   ├── install.js
│   │   ├── package.json
│   │   └── types
│   │       └── index.d.ts
│   ├── file-entry-cache
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── cache.js
│   │   ├── changelog.md
│   │   └── package.json
│   ├── fill-range
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── find-up
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── flat-cache
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── changelog.md
│   │   ├── package.json
│   │   └── src
│   │       ├── cache.js
│   │       ├── del.js
│   │       └── utils.js
│   ├── flatted
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── cjs
│   │   │   ├── index.js
│   │   │   └── package.json
│   │   ├── es.js
│   │   ├── esm
│   │   │   └── index.js
│   │   ├── esm.js
│   │   ├── index.js
│   │   ├── min.js
│   │   ├── package.json
│   │   ├── php
│   │   │   └── flatted.php
│   │   ├── python
│   │   │   ├── flatted.py
│   │   │   └── test.py
│   │   └── types
│   │       └── index.d.ts
│   ├── fs-minipass
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── node_modules
│   │   │   └── minipass
│   │   │       ├── LICENSE
│   │   │       ├── README.md
│   │   │       ├── index.d.ts
│   │   │       ├── index.js
│   │   │       └── package.json
│   │   └── package.json
│   ├── fs.realpath
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── old.js
│   │   └── package.json
│   ├── gauge
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── base-theme.js
│   │   ├── error.js
│   │   ├── has-color.js
│   │   ├── index.js
│   │   ├── package.json
│   │   ├── plumbing.js
│   │   ├── process.js
│   │   ├── progress-bar.js
│   │   ├── render-template.js
│   │   ├── set-immediate.js
│   │   ├── set-interval.js
│   │   ├── spin.js
│   │   ├── template-item.js
│   │   ├── theme-set.js
│   │   ├── themes.js
│   │   └── wide-truncate.js
│   ├── glob
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── common.js
│   │   ├── glob.js
│   │   ├── package.json
│   │   └── sync.js
│   ├── glob-parent
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── globals
│   │   ├── globals.json
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── globby
│   │   ├── gitignore.js
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   ├── readme.md
│   │   └── stream-utils.js
│   ├── graphemer
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── lib
│   │   │   ├── Graphemer.d.ts
│   │   │   ├── Graphemer.d.ts.map
│   │   │   ├── Graphemer.js
│   │   │   ├── GraphemerHelper.d.ts
│   │   │   ├── GraphemerHelper.d.ts.map
│   │   │   ├── GraphemerHelper.js
│   │   │   ├── GraphemerIterator.d.ts
│   │   │   ├── GraphemerIterator.d.ts.map
│   │   │   ├── GraphemerIterator.js
│   │   │   ├── boundaries.d.ts
│   │   │   ├── boundaries.d.ts.map
│   │   │   ├── boundaries.js
│   │   │   ├── index.d.ts
│   │   │   ├── index.d.ts.map
│   │   │   └── index.js
│   │   └── package.json
│   ├── has-flag
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── has-unicode
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── http-response-object
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── lib
│   │   │   ├── headers.d.ts
│   │   │   ├── headers.js
│   │   │   ├── headers.js.flow
│   │   │   ├── index.d.ts
│   │   │   ├── index.js
│   │   │   └── index.js.flow
│   │   ├── node_modules
│   │   │   └── @types
│   │   │       └── node
│   │   │           ├── LICENSE
│   │   │           ├── README.md
│   │   │           ├── assert.d.ts
│   │   │           ├── async_hooks.d.ts
│   │   │           ├── base.d.ts
│   │   │           ├── buffer.d.ts
│   │   │           ├── child_process.d.ts
│   │   │           ├── cluster.d.ts
│   │   │           ├── console.d.ts
│   │   │           ├── constants.d.ts
│   │   │           ├── crypto.d.ts
│   │   │           ├── dgram.d.ts
│   │   │           ├── dns.d.ts
│   │   │           ├── domain.d.ts
│   │   │           ├── events.d.ts
│   │   │           ├── fs.d.ts
│   │   │           ├── globals.d.ts
│   │   │           ├── http.d.ts
│   │   │           ├── http2.d.ts
│   │   │           ├── https.d.ts
│   │   │           ├── index.d.ts
│   │   │           ├── inspector.d.ts
│   │   │           ├── module.d.ts
│   │   │           ├── net.d.ts
│   │   │           ├── os.d.ts
│   │   │           ├── package.json
│   │   │           ├── path.d.ts
│   │   │           ├── perf_hooks.d.ts
│   │   │           ├── process.d.ts
│   │   │           ├── punycode.d.ts
│   │   │           ├── querystring.d.ts
│   │   │           ├── readline.d.ts
│   │   │           ├── repl.d.ts
│   │   │           ├── stream.d.ts
│   │   │           ├── string_decoder.d.ts
│   │   │           ├── timers.d.ts
│   │   │           ├── tls.d.ts
│   │   │           ├── trace_events.d.ts
│   │   │           ├── ts3.6
│   │   │           │   ├── assert.d.ts
│   │   │           │   ├── base.d.ts
│   │   │           │   └── index.d.ts
│   │   │           ├── tty.d.ts
│   │   │           ├── url.d.ts
│   │   │           ├── util.d.ts
│   │   │           ├── v8.d.ts
│   │   │           ├── vm.d.ts
│   │   │           ├── worker_threads.d.ts
│   │   │           └── zlib.d.ts
│   │   └── package.json
│   ├── https-proxy-agent
│   │   ├── README.md
│   │   ├── dist
│   │   │   ├── agent.d.ts
│   │   │   ├── agent.js
│   │   │   ├── agent.js.map
│   │   │   ├── index.d.ts
│   │   │   ├── index.js
│   │   │   ├── index.js.map
│   │   │   ├── parse-proxy-response.d.ts
│   │   │   ├── parse-proxy-response.js
│   │   │   └── parse-proxy-response.js.map
│   │   └── package.json
│   ├── ignore
│   │   ├── LICENSE-MIT
│   │   ├── README.md
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── legacy.js
│   │   └── package.json
│   ├── import-fresh
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── imurmurhash
│   │   ├── README.md
│   │   ├── imurmurhash.js
│   │   ├── imurmurhash.min.js
│   │   └── package.json
│   ├── inflight
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── inflight.js
│   │   └── package.json
│   ├── inherits
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── inherits.js
│   │   ├── inherits_browser.js
│   │   └── package.json
│   ├── is-extglob
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── is-fullwidth-code-point
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── is-glob
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── is-number
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── is-path-inside
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── isexe
│   │   ├── .npmignore
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── mode.js
│   │   ├── package.json
│   │   ├── test
│   │   │   └── basic.js
│   │   └── windows.js
│   ├── js-yaml
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── bin
│   │   │   └── js-yaml.js
│   │   ├── dist
│   │   │   ├── js-yaml.js
│   │   │   ├── js-yaml.min.js
│   │   │   └── js-yaml.mjs
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── common.js
│   │   │   ├── dumper.js
│   │   │   ├── exception.js
│   │   │   ├── loader.js
│   │   │   ├── schema
│   │   │   │   ├── core.js
│   │   │   │   ├── default.js
│   │   │   │   ├── failsafe.js
│   │   │   │   └── json.js
│   │   │   ├── schema.js
│   │   │   ├── snippet.js
│   │   │   ├── type
│   │   │   │   ├── binary.js
│   │   │   │   ├── bool.js
│   │   │   │   ├── float.js
│   │   │   │   ├── int.js
│   │   │   │   ├── map.js
│   │   │   │   ├── merge.js
│   │   │   │   ├── null.js
│   │   │   │   ├── omap.js
│   │   │   │   ├── pairs.js
│   │   │   │   ├── seq.js
│   │   │   │   ├── set.js
│   │   │   │   ├── str.js
│   │   │   │   └── timestamp.js
│   │   │   └── type.js
│   │   └── package.json
│   ├── json-buffer
│   │   ├── .travis.yml
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test
│   │       └── index.js
│   ├── json-schema-traverse
│   │   ├── .eslintrc.yml
│   │   ├── .travis.yml
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── package.json
│   │   └── spec
│   │       ├── .eslintrc.yml
│   │       ├── fixtures
│   │       │   └── schema.js
│   │       └── index.spec.js
│   ├── json-stable-stringify-without-jsonify
│   │   ├── .npmignore
│   │   ├── .travis.yml
│   │   ├── LICENSE
│   │   ├── example
│   │   │   ├── key_cmp.js
│   │   │   ├── nested.js
│   │   │   ├── str.js
│   │   │   └── value_cmp.js
│   │   ├── index.js
│   │   ├── package.json
│   │   ├── readme.markdown
│   │   └── test
│   │       ├── cmp.js
│   │       ├── nested.js
│   │       ├── replacer.js
│   │       ├── space.js
│   │       ├── str.js
│   │       └── to-json.js
│   ├── keyv
│   │   ├── README.md
│   │   ├── package.json
│   │   └── src
│   │       ├── index.d.ts
│   │       └── index.js
│   ├── levn
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── lib
│   │   │   ├── cast.js
│   │   │   ├── index.js
│   │   │   └── parse-string.js
│   │   └── package.json
│   ├── locate-path
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── lodash
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── _DataView.js
│   │   ├── _Hash.js
│   │   ├── _LazyWrapper.js
│   │   ├── _ListCache.js
│   │   ├── _LodashWrapper.js
│   │   ├── _Map.js
│   │   ├── _MapCache.js
│   │   ├── _Promise.js
│   │   ├── _Set.js
│   │   ├── _SetCache.js
│   │   ├── _Stack.js
│   │   ├── _Symbol.js
│   │   ├── _Uint8Array.js
│   │   ├── _WeakMap.js
│   │   ├── _apply.js
│   │   ├── _arrayAggregator.js
│   │   ├── _arrayEach.js
│   │   ├── _arrayEachRight.js
│   │   ├── _arrayEvery.js
│   │   ├── _arrayFilter.js
│   │   ├── _arrayIncludes.js
│   │   ├── _arrayIncludesWith.js
│   │   ├── _arrayLikeKeys.js
│   │   ├── _arrayMap.js
│   │   ├── _arrayPush.js
│   │   ├── _arrayReduce.js
│   │   ├── _arrayReduceRight.js
│   │   ├── _arraySample.js
│   │   ├── _arraySampleSize.js
│   │   ├── _arrayShuffle.js
│   │   ├── _arraySome.js
│   │   ├── _asciiSize.js
│   │   ├── _asciiToArray.js
│   │   ├── _asciiWords.js
│   │   ├── _assignMergeValue.js
│   │   ├── _assignValue.js
│   │   ├── _assocIndexOf.js
│   │   ├── _baseAggregator.js
│   │   ├── _baseAssign.js
│   │   ├── _baseAssignIn.js
│   │   ├── _baseAssignValue.js
│   │   ├── _baseAt.js
│   │   ├── _baseClamp.js
│   │   ├── _baseClone.js
│   │   ├── _baseConforms.js
│   │   ├── _baseConformsTo.js
│   │   ├── _baseCreate.js
│   │   ├── _baseDelay.js
│   │   ├── _baseDifference.js
│   │   ├── _baseEach.js
│   │   ├── _baseEachRight.js
│   │   ├── _baseEvery.js
│   │   ├── _baseExtremum.js
│   │   ├── _baseFill.js
│   │   ├── _baseFilter.js
│   │   ├── _baseFindIndex.js
│   │   ├── _baseFindKey.js
│   │   ├── _baseFlatten.js
│   │   ├── _baseFor.js
│   │   ├── _baseForOwn.js
│   │   ├── _baseForOwnRight.js
│   │   ├── _baseForRight.js
│   │   ├── _baseFunctions.js
│   │   ├── _baseGet.js
│   │   ├── _baseGetAllKeys.js
│   │   ├── _baseGetTag.js
│   │   ├── _baseGt.js
│   │   ├── _baseHas.js
│   │   ├── _baseHasIn.js
│   │   ├── _baseInRange.js
│   │   ├── _baseIndexOf.js
│   │   ├── _baseIndexOfWith.js
│   │   ├── _baseIntersection.js
│   │   ├── _baseInverter.js
│   │   ├── _baseInvoke.js
│   │   ├── _baseIsArguments.js
│   │   ├── _baseIsArrayBuffer.js
│   │   ├── _baseIsDate.js
│   │   ├── _baseIsEqual.js
│   │   ├── _baseIsEqualDeep.js
│   │   ├── _baseIsMap.js
│   │   ├── _baseIsMatch.js
│   │   ├── _baseIsNaN.js
│   │   ├── _baseIsNative.js
│   │   ├── _baseIsRegExp.js
│   │   ├── _baseIsSet.js
│   │   ├── _baseIsTypedArray.js
│   │   ├── _baseIteratee.js
│   │   ├── _baseKeys.js
│   │   ├── _baseKeysIn.js
│   │   ├── _baseLodash.js
│   │   ├── _baseLt.js
│   │   ├── _baseMap.js
│   │   ├── _baseMatches.js
│   │   ├── _baseMatchesProperty.js
│   │   ├── _baseMean.js
│   │   ├── _baseMerge.js
│   │   ├── _baseMergeDeep.js
│   │   ├── _baseNth.js
│   │   ├── _baseOrderBy.js
│   │   ├── _basePick.js
│   │   ├── _basePickBy.js
│   │   ├── _baseProperty.js
│   │   ├── _basePropertyDeep.js
│   │   ├── _basePropertyOf.js
│   │   ├── _basePullAll.js
│   │   ├── _basePullAt.js
│   │   ├── _baseRandom.js
│   │   ├── _baseRange.js
│   │   ├── _baseReduce.js
│   │   ├── _baseRepeat.js
│   │   ├── _baseRest.js
│   │   ├── _baseSample.js
│   │   ├── _baseSampleSize.js
│   │   ├── _baseSet.js
│   │   ├── _baseSetData.js
│   │   ├── _baseSetToString.js
│   │   ├── _baseShuffle.js
│   │   ├── _baseSlice.js
│   │   ├── _baseSome.js
│   │   ├── _baseSortBy.js
│   │   ├── _baseSortedIndex.js
│   │   ├── _baseSortedIndexBy.js
│   │   ├── _baseSortedUniq.js
│   │   ├── _baseSum.js
│   │   ├── _baseTimes.js
│   │   ├── _baseToNumber.js
│   │   ├── _baseToPairs.js
│   │   ├── _baseToString.js
│   │   ├── _baseTrim.js
│   │   ├── _baseUnary.js
│   │   ├── _baseUniq.js
│   │   ├── _baseUnset.js
│   │   ├── _baseUpdate.js
│   │   ├── _baseValues.js
│   │   ├── _baseWhile.js
│   │   ├── _baseWrapperValue.js
│   │   ├── _baseXor.js
│   │   ├── _baseZipObject.js
│   │   ├── _cacheHas.js
│   │   ├── _castArrayLikeObject.js
│   │   ├── _castFunction.js
│   │   ├── _castPath.js
│   │   ├── _castRest.js
│   │   ├── _castSlice.js
│   │   ├── _charsEndIndex.js
│   │   ├── _charsStartIndex.js
│   │   ├── _cloneArrayBuffer.js
│   │   ├── _cloneBuffer.js
│   │   ├── _cloneDataView.js
│   │   ├── _cloneRegExp.js
│   │   ├── _cloneSymbol.js
│   │   ├── _cloneTypedArray.js
│   │   ├── _compareAscending.js
│   │   ├── _compareMultiple.js
│   │   ├── _composeArgs.js
│   │   ├── _composeArgsRight.js
│   │   ├── _copyArray.js
│   │   ├── _copyObject.js
│   │   ├── _copySymbols.js
│   │   ├── _copySymbolsIn.js
│   │   ├── _coreJsData.js
│   │   ├── _countHolders.js
│   │   ├── _createAggregator.js
│   │   ├── _createAssigner.js
│   │   ├── _createBaseEach.js
│   │   ├── _createBaseFor.js
│   │   ├── _createBind.js
│   │   ├── _createCaseFirst.js
│   │   ├── _createCompounder.js
│   │   ├── _createCtor.js
│   │   ├── _createCurry.js
│   │   ├── _createFind.js
│   │   ├── _createFlow.js
│   │   ├── _createHybrid.js
│   │   ├── _createInverter.js
│   │   ├── _createMathOperation.js
│   │   ├── _createOver.js
│   │   ├── _createPadding.js
│   │   ├── _createPartial.js
│   │   ├── _createRange.js
│   │   ├── _createRecurry.js
│   │   ├── _createRelationalOperation.js
│   │   ├── _createRound.js
│   │   ├── _createSet.js
│   │   ├── _createToPairs.js
│   │   ├── _createWrap.js
│   │   ├── _customDefaultsAssignIn.js
│   │   ├── _customDefaultsMerge.js
│   │   ├── _customOmitClone.js
│   │   ├── _deburrLetter.js
│   │   ├── _defineProperty.js
│   │   ├── _equalArrays.js
│   │   ├── _equalByTag.js
│   │   ├── _equalObjects.js
│   │   ├── _escapeHtmlChar.js
│   │   ├── _escapeStringChar.js
│   │   ├── _flatRest.js
│   │   ├── _freeGlobal.js
│   │   ├── _getAllKeys.js
│   │   ├── _getAllKeysIn.js
│   │   ├── _getData.js
│   │   ├── _getFuncName.js
│   │   ├── _getHolder.js
│   │   ├── _getMapData.js
│   │   ├── _getMatchData.js
│   │   ├── _getNative.js
│   │   ├── _getPrototype.js
│   │   ├── _getRawTag.js
│   │   ├── _getSymbols.js
│   │   ├── _getSymbolsIn.js
│   │   ├── _getTag.js
│   │   ├── _getValue.js
│   │   ├── _getView.js
│   │   ├── _getWrapDetails.js
│   │   ├── _hasPath.js
│   │   ├── _hasUnicode.js
│   │   ├── _hasUnicodeWord.js
│   │   ├── _hashClear.js
│   │   ├── _hashDelete.js
│   │   ├── _hashGet.js
│   │   ├── _hashHas.js
│   │   ├── _hashSet.js
│   │   ├── _initCloneArray.js
│   │   ├── _initCloneByTag.js
│   │   ├── _initCloneObject.js
│   │   ├── _insertWrapDetails.js
│   │   ├── _isFlattenable.js
│   │   ├── _isIndex.js
│   │   ├── _isIterateeCall.js
│   │   ├── _isKey.js
│   │   ├── _isKeyable.js
│   │   ├── _isLaziable.js
│   │   ├── _isMaskable.js
│   │   ├── _isMasked.js
│   │   ├── _isPrototype.js
│   │   ├── _isStrictComparable.js
│   │   ├── _iteratorToArray.js
│   │   ├── _lazyClone.js
│   │   ├── _lazyReverse.js
│   │   ├── _lazyValue.js
│   │   ├── _listCacheClear.js
│   │   ├── _listCacheDelete.js
│   │   ├── _listCacheGet.js
│   │   ├── _listCacheHas.js
│   │   ├── _listCacheSet.js
│   │   ├── _mapCacheClear.js
│   │   ├── _mapCacheDelete.js
│   │   ├── _mapCacheGet.js
│   │   ├── _mapCacheHas.js
│   │   ├── _mapCacheSet.js
│   │   ├── _mapToArray.js
│   │   ├── _matchesStrictComparable.js
│   │   ├── _memoizeCapped.js
│   │   ├── _mergeData.js
│   │   ├── _metaMap.js
│   │   ├── _nativeCreate.js
│   │   ├── _nativeKeys.js
│   │   ├── _nativeKeysIn.js
│   │   ├── _nodeUtil.js
│   │   ├── _objectToString.js
│   │   ├── _overArg.js
│   │   ├── _overRest.js
│   │   ├── _parent.js
│   │   ├── _reEscape.js
│   │   ├── _reEvaluate.js
│   │   ├── _reInterpolate.js
│   │   ├── _realNames.js
│   │   ├── _reorder.js
│   │   ├── _replaceHolders.js
│   │   ├── _root.js
│   │   ├── _safeGet.js
│   │   ├── _setCacheAdd.js
│   │   ├── _setCacheHas.js
│   │   ├── _setData.js
│   │   ├── _setToArray.js
│   │   ├── _setToPairs.js
│   │   ├── _setToString.js
│   │   ├── _setWrapToString.js
│   │   ├── _shortOut.js
│   │   ├── _shuffleSelf.js
│   │   ├── _stackClear.js
│   │   ├── _stackDelete.js
│   │   ├── _stackGet.js
│   │   ├── _stackHas.js
│   │   ├── _stackSet.js
│   │   ├── _strictIndexOf.js
│   │   ├── _strictLastIndexOf.js
│   │   ├── _stringSize.js
│   │   ├── _stringToArray.js
│   │   ├── _stringToPath.js
│   │   ├── _toKey.js
│   │   ├── _toSource.js
│   │   ├── _trimmedEndIndex.js
│   │   ├── _unescapeHtmlChar.js
│   │   ├── _unicodeSize.js
│   │   ├── _unicodeToArray.js
│   │   ├── _unicodeWords.js
│   │   ├── _updateWrapDetails.js
│   │   ├── _wrapperClone.js
│   │   ├── add.js
│   │   ├── after.js
│   │   ├── array.js
│   │   ├── ary.js
│   │   ├── assign.js
│   │   ├── assignIn.js
│   │   ├── assignInWith.js
│   │   ├── assignWith.js
│   │   ├── at.js
│   │   ├── attempt.js
│   │   ├── before.js
│   │   ├── bind.js
│   │   ├── bindAll.js
│   │   ├── bindKey.js
│   │   ├── camelCase.js
│   │   ├── capitalize.js
│   │   ├── castArray.js
│   │   ├── ceil.js
│   │   ├── chain.js
│   │   ├── chunk.js
│   │   ├── clamp.js
│   │   ├── clone.js
│   │   ├── cloneDeep.js
│   │   ├── cloneDeepWith.js
│   │   ├── cloneWith.js
│   │   ├── collection.js
│   │   ├── commit.js
│   │   ├── compact.js
│   │   ├── concat.js
│   │   ├── cond.js
│   │   ├── conforms.js
│   │   ├── conformsTo.js
│   │   ├── constant.js
│   │   ├── core.js
│   │   ├── core.min.js
│   │   ├── countBy.js
│   │   ├── create.js
│   │   ├── curry.js
│   │   ├── curryRight.js
│   │   ├── date.js
│   │   ├── debounce.js
│   │   ├── deburr.js
│   │   ├── defaultTo.js
│   │   ├── defaults.js
│   │   ├── defaultsDeep.js
│   │   ├── defer.js
│   │   ├── delay.js
│   │   ├── difference.js
│   │   ├── differenceBy.js
│   │   ├── differenceWith.js
│   │   ├── divide.js
│   │   ├── drop.js
│   │   ├── dropRight.js
│   │   ├── dropRightWhile.js
│   │   ├── dropWhile.js
│   │   ├── each.js
│   │   ├── eachRight.js
│   │   ├── endsWith.js
│   │   ├── entries.js
│   │   ├── entriesIn.js
│   │   ├── eq.js
│   │   ├── escape.js
│   │   ├── escapeRegExp.js
│   │   ├── every.js
│   │   ├── extend.js
│   │   ├── extendWith.js
│   │   ├── fill.js
│   │   ├── filter.js
│   │   ├── find.js
│   │   ├── findIndex.js
│   │   ├── findKey.js
│   │   ├── findLast.js
│   │   ├── findLastIndex.js
│   │   ├── findLastKey.js
│   │   ├── first.js
│   │   ├── flake.lock
│   │   ├── flake.nix
│   │   ├── flatMap.js
│   │   ├── flatMapDeep.js
│   │   ├── flatMapDepth.js
│   │   ├── flatten.js
│   │   ├── flattenDeep.js
│   │   ├── flattenDepth.js
│   │   ├── flip.js
│   │   ├── floor.js
│   │   ├── flow.js
│   │   ├── flowRight.js
│   │   ├── forEach.js
│   │   ├── forEachRight.js
│   │   ├── forIn.js
│   │   ├── forInRight.js
│   │   ├── forOwn.js
│   │   ├── forOwnRight.js
│   │   ├── fp
│   │   │   ├── F.js
│   │   │   ├── T.js
│   │   │   ├── __.js
│   │   │   ├── _baseConvert.js
│   │   │   ├── _convertBrowser.js
│   │   │   ├── _falseOptions.js
│   │   │   ├── _mapping.js
│   │   │   ├── _util.js
│   │   │   ├── add.js
│   │   │   ├── after.js
│   │   │   ├── all.js
│   │   │   ├── allPass.js
│   │   │   ├── always.js
│   │   │   ├── any.js
│   │   │   ├── anyPass.js
│   │   │   ├── apply.js
│   │   │   ├── array.js
│   │   │   ├── ary.js
│   │   │   ├── assign.js
│   │   │   ├── assignAll.js
│   │   │   ├── assignAllWith.js
│   │   │   ├── assignIn.js
│   │   │   ├── assignInAll.js
│   │   │   ├── assignInAllWith.js
│   │   │   ├── assignInWith.js
│   │   │   ├── assignWith.js
│   │   │   ├── assoc.js
│   │   │   ├── assocPath.js
│   │   │   ├── at.js
│   │   │   ├── attempt.js
│   │   │   ├── before.js
│   │   │   ├── bind.js
│   │   │   ├── bindAll.js
│   │   │   ├── bindKey.js
│   │   │   ├── camelCase.js
│   │   │   ├── capitalize.js
│   │   │   ├── castArray.js
│   │   │   ├── ceil.js
│   │   │   ├── chain.js
│   │   │   ├── chunk.js
│   │   │   ├── clamp.js
│   │   │   ├── clone.js
│   │   │   ├── cloneDeep.js
│   │   │   ├── cloneDeepWith.js
│   │   │   ├── cloneWith.js
│   │   │   ├── collection.js
│   │   │   ├── commit.js
│   │   │   ├── compact.js
│   │   │   ├── complement.js
│   │   │   ├── compose.js
│   │   │   ├── concat.js
│   │   │   ├── cond.js
│   │   │   ├── conforms.js
│   │   │   ├── conformsTo.js
│   │   │   ├── constant.js
│   │   │   ├── contains.js
│   │   │   ├── convert.js
│   │   │   ├── countBy.js
│   │   │   ├── create.js
│   │   │   ├── curry.js
│   │   │   ├── curryN.js
│   │   │   ├── curryRight.js
│   │   │   ├── curryRightN.js
│   │   │   ├── date.js
│   │   │   ├── debounce.js
│   │   │   ├── deburr.js
│   │   │   ├── defaultTo.js
│   │   │   ├── defaults.js
│   │   │   ├── defaultsAll.js
│   │   │   ├── defaultsDeep.js
│   │   │   ├── defaultsDeepAll.js
│   │   │   ├── defer.js
│   │   │   ├── delay.js
│   │   │   ├── difference.js
│   │   │   ├── differenceBy.js
│   │   │   ├── differenceWith.js
│   │   │   ├── dissoc.js
│   │   │   ├── dissocPath.js
│   │   │   ├── divide.js
│   │   │   ├── drop.js
│   │   │   ├── dropLast.js
│   │   │   ├── dropLastWhile.js
│   │   │   ├── dropRight.js
│   │   │   ├── dropRightWhile.js
│   │   │   ├── dropWhile.js
│   │   │   ├── each.js
│   │   │   ├── eachRight.js
│   │   │   ├── endsWith.js
│   │   │   ├── entries.js
│   │   │   ├── entriesIn.js
│   │   │   ├── eq.js
│   │   │   ├── equals.js
│   │   │   ├── escape.js
│   │   │   ├── escapeRegExp.js
│   │   │   ├── every.js
│   │   │   ├── extend.js
│   │   │   ├── extendAll.js
│   │   │   ├── extendAllWith.js
│   │   │   ├── extendWith.js
│   │   │   ├── fill.js
│   │   │   ├── filter.js
│   │   │   ├── find.js
│   │   │   ├── findFrom.js
│   │   │   ├── findIndex.js
│   │   │   ├── findIndexFrom.js
│   │   │   ├── findKey.js
│   │   │   ├── findLast.js
│   │   │   ├── findLastFrom.js
│   │   │   ├── findLastIndex.js
│   │   │   ├── findLastIndexFrom.js
│   │   │   ├── findLastKey.js
│   │   │   ├── first.js
│   │   │   ├── flatMap.js
│   │   │   ├── flatMapDeep.js
│   │   │   ├── flatMapDepth.js
│   │   │   ├── flatten.js
│   │   │   ├── flattenDeep.js
│   │   │   ├── flattenDepth.js
│   │   │   ├── flip.js
│   │   │   ├── floor.js
│   │   │   ├── flow.js
│   │   │   ├── flowRight.js
│   │   │   ├── forEach.js
│   │   │   ├── forEachRight.js
│   │   │   ├── forIn.js
│   │   │   ├── forInRight.js
│   │   │   ├── forOwn.js
│   │   │   ├── forOwnRight.js
│   │   │   ├── fromPairs.js
│   │   │   ├── function.js
│   │   │   ├── functions.js
│   │   │   ├── functionsIn.js
│   │   │   ├── get.js
│   │   │   ├── getOr.js
│   │   │   ├── groupBy.js
│   │   │   ├── gt.js
│   │   │   ├── gte.js
│   │   │   ├── has.js
│   │   │   ├── hasIn.js
│   │   │   ├── head.js
│   │   │   ├── identical.js
│   │   │   ├── identity.js
│   │   │   ├── inRange.js
│   │   │   ├── includes.js
│   │   │   ├── includesFrom.js
│   │   │   ├── indexBy.js
│   │   │   ├── indexOf.js
│   │   │   ├── indexOfFrom.js
│   │   │   ├── init.js
│   │   │   ├── initial.js
│   │   │   ├── intersection.js
│   │   │   ├── intersectionBy.js
│   │   │   ├── intersectionWith.js
│   │   │   ├── invert.js
│   │   │   ├── invertBy.js
│   │   │   ├── invertObj.js
│   │   │   ├── invoke.js
│   │   │   ├── invokeArgs.js
│   │   │   ├── invokeArgsMap.js
│   │   │   ├── invokeMap.js
│   │   │   ├── isArguments.js
│   │   │   ├── isArray.js
│   │   │   ├── isArrayBuffer.js
│   │   │   ├── isArrayLike.js
│   │   │   ├── isArrayLikeObject.js
│   │   │   ├── isBoolean.js
│   │   │   ├── isBuffer.js
│   │   │   ├── isDate.js
│   │   │   ├── isElement.js
│   │   │   ├── isEmpty.js
│   │   │   ├── isEqual.js
│   │   │   ├── isEqualWith.js
│   │   │   ├── isError.js
│   │   │   ├── isFinite.js
│   │   │   ├── isFunction.js
│   │   │   ├── isInteger.js
│   │   │   ├── isLength.js
│   │   │   ├── isMap.js
│   │   │   ├── isMatch.js
│   │   │   ├── isMatchWith.js
│   │   │   ├── isNaN.js
│   │   │   ├── isNative.js
│   │   │   ├── isNil.js
│   │   │   ├── isNull.js
│   │   │   ├── isNumber.js
│   │   │   ├── isObject.js
│   │   │   ├── isObjectLike.js
│   │   │   ├── isPlainObject.js
│   │   │   ├── isRegExp.js
│   │   │   ├── isSafeInteger.js
│   │   │   ├── isSet.js
│   │   │   ├── isString.js
│   │   │   ├── isSymbol.js
│   │   │   ├── isTypedArray.js
│   │   │   ├── isUndefined.js
│   │   │   ├── isWeakMap.js
│   │   │   ├── isWeakSet.js
│   │   │   ├── iteratee.js
│   │   │   ├── join.js
│   │   │   ├── juxt.js
│   │   │   ├── kebabCase.js
│   │   │   ├── keyBy.js
│   │   │   ├── keys.js
│   │   │   ├── keysIn.js
│   │   │   ├── lang.js
│   │   │   ├── last.js
│   │   │   ├── lastIndexOf.js
│   │   │   ├── lastIndexOfFrom.js
│   │   │   ├── lowerCase.js
│   │   │   ├── lowerFirst.js
│   │   │   ├── lt.js
│   │   │   ├── lte.js
│   │   │   ├── map.js
│   │   │   ├── mapKeys.js
│   │   │   ├── mapValues.js
│   │   │   ├── matches.js
│   │   │   ├── matchesProperty.js
│   │   │   ├── math.js
│   │   │   ├── max.js
│   │   │   ├── maxBy.js
│   │   │   ├── mean.js
│   │   │   ├── meanBy.js
│   │   │   ├── memoize.js
│   │   │   ├── merge.js
│   │   │   ├── mergeAll.js
│   │   │   ├── mergeAllWith.js
│   │   │   ├── mergeWith.js
│   │   │   ├── method.js
│   │   │   ├── methodOf.js
│   │   │   ├── min.js
│   │   │   ├── minBy.js
│   │   │   ├── mixin.js
│   │   │   ├── multiply.js
│   │   │   ├── nAry.js
│   │   │   ├── negate.js
│   │   │   ├── next.js
│   │   │   ├── noop.js
│   │   │   ├── now.js
│   │   │   ├── nth.js
│   │   │   ├── nthArg.js
│   │   │   ├── number.js
│   │   │   ├── object.js
│   │   │   ├── omit.js
│   │   │   ├── omitAll.js
│   │   │   ├── omitBy.js
│   │   │   ├── once.js
│   │   │   ├── orderBy.js
│   │   │   ├── over.js
│   │   │   ├── overArgs.js
│   │   │   ├── overEvery.js
│   │   │   ├── overSome.js
│   │   │   ├── pad.js
│   │   │   ├── padChars.js
│   │   │   ├── padCharsEnd.js
│   │   │   ├── padCharsStart.js
│   │   │   ├── padEnd.js
│   │   │   ├── padStart.js
│   │   │   ├── parseInt.js
│   │   │   ├── partial.js
│   │   │   ├── partialRight.js
│   │   │   ├── partition.js
│   │   │   ├── path.js
│   │   │   ├── pathEq.js
│   │   │   ├── pathOr.js
│   │   │   ├── paths.js
│   │   │   ├── pick.js
│   │   │   ├── pickAll.js
│   │   │   ├── pickBy.js
│   │   │   ├── pipe.js
│   │   │   ├── placeholder.js
│   │   │   ├── plant.js
│   │   │   ├── pluck.js
│   │   │   ├── prop.js
│   │   │   ├── propEq.js
│   │   │   ├── propOr.js
│   │   │   ├── property.js
│   │   │   ├── propertyOf.js
│   │   │   ├── props.js
│   │   │   ├── pull.js
│   │   │   ├── pullAll.js
│   │   │   ├── pullAllBy.js
│   │   │   ├── pullAllWith.js
│   │   │   ├── pullAt.js
│   │   │   ├── random.js
│   │   │   ├── range.js
│   │   │   ├── rangeRight.js
│   │   │   ├── rangeStep.js
│   │   │   ├── rangeStepRight.js
│   │   │   ├── rearg.js
│   │   │   ├── reduce.js
│   │   │   ├── reduceRight.js
│   │   │   ├── reject.js
│   │   │   ├── remove.js
│   │   │   ├── repeat.js
│   │   │   ├── replace.js
│   │   │   ├── rest.js
│   │   │   ├── restFrom.js
│   │   │   ├── result.js
│   │   │   ├── reverse.js
│   │   │   ├── round.js
│   │   │   ├── sample.js
│   │   │   ├── sampleSize.js
│   │   │   ├── seq.js
│   │   │   ├── set.js
│   │   │   ├── setWith.js
│   │   │   ├── shuffle.js
│   │   │   ├── size.js
│   │   │   ├── slice.js
│   │   │   ├── snakeCase.js
│   │   │   ├── some.js
│   │   │   ├── sortBy.js
│   │   │   ├── sortedIndex.js
│   │   │   ├── sortedIndexBy.js
│   │   │   ├── sortedIndexOf.js
│   │   │   ├── sortedLastIndex.js
│   │   │   ├── sortedLastIndexBy.js
│   │   │   ├── sortedLastIndexOf.js
│   │   │   ├── sortedUniq.js
│   │   │   ├── sortedUniqBy.js
│   │   │   ├── split.js
│   │   │   ├── spread.js
│   │   │   ├── spreadFrom.js
│   │   │   ├── startCase.js
│   │   │   ├── startsWith.js
│   │   │   ├── string.js
│   │   │   ├── stubArray.js
│   │   │   ├── stubFalse.js
│   │   │   ├── stubObject.js
│   │   │   ├── stubString.js
│   │   │   ├── stubTrue.js
│   │   │   ├── subtract.js
│   │   │   ├── sum.js
│   │   │   ├── sumBy.js
│   │   │   ├── symmetricDifference.js
│   │   │   ├── symmetricDifferenceBy.js
│   │   │   ├── symmetricDifferenceWith.js
│   │   │   ├── tail.js
│   │   │   ├── take.js
│   │   │   ├── takeLast.js
│   │   │   ├── takeLastWhile.js
│   │   │   ├── takeRight.js
│   │   │   ├── takeRightWhile.js
│   │   │   ├── takeWhile.js
│   │   │   ├── tap.js
│   │   │   ├── template.js
│   │   │   ├── templateSettings.js
│   │   │   ├── throttle.js
│   │   │   ├── thru.js
│   │   │   ├── times.js
│   │   │   ├── toArray.js
│   │   │   ├── toFinite.js
│   │   │   ├── toInteger.js
│   │   │   ├── toIterator.js
│   │   │   ├── toJSON.js
│   │   │   ├── toLength.js
│   │   │   ├── toLower.js
│   │   │   ├── toNumber.js
│   │   │   ├── toPairs.js
│   │   │   ├── toPairsIn.js
│   │   │   ├── toPath.js
│   │   │   ├── toPlainObject.js
│   │   │   ├── toSafeInteger.js
│   │   │   ├── toString.js
│   │   │   ├── toUpper.js
│   │   │   ├── transform.js
│   │   │   ├── trim.js
│   │   │   ├── trimChars.js
│   │   │   ├── trimCharsEnd.js
│   │   │   ├── trimCharsStart.js
│   │   │   ├── trimEnd.js
│   │   │   ├── trimStart.js
│   │   │   ├── truncate.js
│   │   │   ├── unapply.js
│   │   │   ├── unary.js
│   │   │   ├── unescape.js
│   │   │   ├── union.js
│   │   │   ├── unionBy.js
│   │   │   ├── unionWith.js
│   │   │   ├── uniq.js
│   │   │   ├── uniqBy.js
│   │   │   ├── uniqWith.js
│   │   │   ├── uniqueId.js
│   │   │   ├── unnest.js
│   │   │   ├── unset.js
│   │   │   ├── unzip.js
│   │   │   ├── unzipWith.js
│   │   │   ├── update.js
│   │   │   ├── updateWith.js
│   │   │   ├── upperCase.js
│   │   │   ├── upperFirst.js
│   │   │   ├── useWith.js
│   │   │   ├── util.js
│   │   │   ├── value.js
│   │   │   ├── valueOf.js
│   │   │   ├── values.js
│   │   │   ├── valuesIn.js
│   │   │   ├── where.js
│   │   │   ├── whereEq.js
│   │   │   ├── without.js
│   │   │   ├── words.js
│   │   │   ├── wrap.js
│   │   │   ├── wrapperAt.js
│   │   │   ├── wrapperChain.js
│   │   │   ├── wrapperLodash.js
│   │   │   ├── wrapperReverse.js
│   │   │   ├── wrapperValue.js
│   │   │   ├── xor.js
│   │   │   ├── xorBy.js
│   │   │   ├── xorWith.js
│   │   │   ├── zip.js
│   │   │   ├── zipAll.js
│   │   │   ├── zipObj.js
│   │   │   ├── zipObject.js
│   │   │   ├── zipObjectDeep.js
│   │   │   └── zipWith.js
│   │   ├── fp.js
│   │   ├── fromPairs.js
│   │   ├── function.js
│   │   ├── functions.js
│   │   ├── functionsIn.js
│   │   ├── get.js
│   │   ├── groupBy.js
│   │   ├── gt.js
│   │   ├── gte.js
│   │   ├── has.js
│   │   ├── hasIn.js
│   │   ├── head.js
│   │   ├── identity.js
│   │   ├── inRange.js
│   │   ├── includes.js
│   │   ├── index.js
│   │   ├── indexOf.js
│   │   ├── initial.js
│   │   ├── intersection.js
│   │   ├── intersectionBy.js
│   │   ├── intersectionWith.js
│   │   ├── invert.js
│   │   ├── invertBy.js
│   │   ├── invoke.js
│   │   ├── invokeMap.js
│   │   ├── isArguments.js
│   │   ├── isArray.js
│   │   ├── isArrayBuffer.js
│   │   ├── isArrayLike.js
│   │   ├── isArrayLikeObject.js
│   │   ├── isBoolean.js
│   │   ├── isBuffer.js
│   │   ├── isDate.js
│   │   ├── isElement.js
│   │   ├── isEmpty.js
│   │   ├── isEqual.js
│   │   ├── isEqualWith.js
│   │   ├── isError.js
│   │   ├── isFinite.js
│   │   ├── isFunction.js
│   │   ├── isInteger.js
│   │   ├── isLength.js
│   │   ├── isMap.js
│   │   ├── isMatch.js
│   │   ├── isMatchWith.js
│   │   ├── isNaN.js
│   │   ├── isNative.js
│   │   ├── isNil.js
│   │   ├── isNull.js
│   │   ├── isNumber.js
│   │   ├── isObject.js
│   │   ├── isObjectLike.js
│   │   ├── isPlainObject.js
│   │   ├── isRegExp.js
│   │   ├── isSafeInteger.js
│   │   ├── isSet.js
│   │   ├── isString.js
│   │   ├── isSymbol.js
│   │   ├── isTypedArray.js
│   │   ├── isUndefined.js
│   │   ├── isWeakMap.js
│   │   ├── isWeakSet.js
│   │   ├── iteratee.js
│   │   ├── join.js
│   │   ├── kebabCase.js
│   │   ├── keyBy.js
│   │   ├── keys.js
│   │   ├── keysIn.js
│   │   ├── lang.js
│   │   ├── last.js
│   │   ├── lastIndexOf.js
│   │   ├── lodash.js
│   │   ├── lodash.min.js
│   │   ├── lowerCase.js
│   │   ├── lowerFirst.js
│   │   ├── lt.js
│   │   ├── lte.js
│   │   ├── map.js
│   │   ├── mapKeys.js
│   │   ├── mapValues.js
│   │   ├── matches.js
│   │   ├── matchesProperty.js
│   │   ├── math.js
│   │   ├── max.js
│   │   ├── maxBy.js
│   │   ├── mean.js
│   │   ├── meanBy.js
│   │   ├── memoize.js
│   │   ├── merge.js
│   │   ├── mergeWith.js
│   │   ├── method.js
│   │   ├── methodOf.js
│   │   ├── min.js
│   │   ├── minBy.js
│   │   ├── mixin.js
│   │   ├── multiply.js
│   │   ├── negate.js
│   │   ├── next.js
│   │   ├── noop.js
│   │   ├── now.js
│   │   ├── nth.js
│   │   ├── nthArg.js
│   │   ├── number.js
│   │   ├── object.js
│   │   ├── omit.js
│   │   ├── omitBy.js
│   │   ├── once.js
│   │   ├── orderBy.js
│   │   ├── over.js
│   │   ├── overArgs.js
│   │   ├── overEvery.js
│   │   ├── overSome.js
│   │   ├── package.json
│   │   ├── pad.js
│   │   ├── padEnd.js
│   │   ├── padStart.js
│   │   ├── parseInt.js
│   │   ├── partial.js
│   │   ├── partialRight.js
│   │   ├── partition.js
│   │   ├── pick.js
│   │   ├── pickBy.js
│   │   ├── plant.js
│   │   ├── property.js
│   │   ├── propertyOf.js
│   │   ├── pull.js
│   │   ├── pullAll.js
│   │   ├── pullAllBy.js
│   │   ├── pullAllWith.js
│   │   ├── pullAt.js
│   │   ├── random.js
│   │   ├── range.js
│   │   ├── rangeRight.js
│   │   ├── rearg.js
│   │   ├── reduce.js
│   │   ├── reduceRight.js
│   │   ├── reject.js
│   │   ├── release.md
│   │   ├── remove.js
│   │   ├── repeat.js
│   │   ├── replace.js
│   │   ├── rest.js
│   │   ├── result.js
│   │   ├── reverse.js
│   │   ├── round.js
│   │   ├── sample.js
│   │   ├── sampleSize.js
│   │   ├── seq.js
│   │   ├── set.js
│   │   ├── setWith.js
│   │   ├── shuffle.js
│   │   ├── size.js
│   │   ├── slice.js
│   │   ├── snakeCase.js
│   │   ├── some.js
│   │   ├── sortBy.js
│   │   ├── sortedIndex.js
│   │   ├── sortedIndexBy.js
│   │   ├── sortedIndexOf.js
│   │   ├── sortedLastIndex.js
│   │   ├── sortedLastIndexBy.js
│   │   ├── sortedLastIndexOf.js
│   │   ├── sortedUniq.js
│   │   ├── sortedUniqBy.js
│   │   ├── split.js
│   │   ├── spread.js
│   │   ├── startCase.js
│   │   ├── startsWith.js
│   │   ├── string.js
│   │   ├── stubArray.js
│   │   ├── stubFalse.js
│   │   ├── stubObject.js
│   │   ├── stubString.js
│   │   ├── stubTrue.js
│   │   ├── subtract.js
│   │   ├── sum.js
│   │   ├── sumBy.js
│   │   ├── tail.js
│   │   ├── take.js
│   │   ├── takeRight.js
│   │   ├── takeRightWhile.js
│   │   ├── takeWhile.js
│   │   ├── tap.js
│   │   ├── template.js
│   │   ├── templateSettings.js
│   │   ├── throttle.js
│   │   ├── thru.js
│   │   ├── times.js
│   │   ├── toArray.js
│   │   ├── toFinite.js
│   │   ├── toInteger.js
│   │   ├── toIterator.js
│   │   ├── toJSON.js
│   │   ├── toLength.js
│   │   ├── toLower.js
│   │   ├── toNumber.js
│   │   ├── toPairs.js
│   │   ├── toPairsIn.js
│   │   ├── toPath.js
│   │   ├── toPlainObject.js
│   │   ├── toSafeInteger.js
│   │   ├── toString.js
│   │   ├── toUpper.js
│   │   ├── transform.js
│   │   ├── trim.js
│   │   ├── trimEnd.js
│   │   ├── trimStart.js
│   │   ├── truncate.js
│   │   ├── unary.js
│   │   ├── unescape.js
│   │   ├── union.js
│   │   ├── unionBy.js
│   │   ├── unionWith.js
│   │   ├── uniq.js
│   │   ├── uniqBy.js
│   │   ├── uniqWith.js
│   │   ├── uniqueId.js
│   │   ├── unset.js
│   │   ├── unzip.js
│   │   ├── unzipWith.js
│   │   ├── update.js
│   │   ├── updateWith.js
│   │   ├── upperCase.js
│   │   ├── upperFirst.js
│   │   ├── util.js
│   │   ├── value.js
│   │   ├── valueOf.js
│   │   ├── values.js
│   │   ├── valuesIn.js
│   │   ├── without.js
│   │   ├── words.js
│   │   ├── wrap.js
│   │   ├── wrapperAt.js
│   │   ├── wrapperChain.js
│   │   ├── wrapperLodash.js
│   │   ├── wrapperReverse.js
│   │   ├── wrapperValue.js
│   │   ├── xor.js
│   │   ├── xorBy.js
│   │   ├── xorWith.js
│   │   ├── zip.js
│   │   ├── zipObject.js
│   │   ├── zipObjectDeep.js
│   │   └── zipWith.js
│   ├── lodash.merge
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── lodash.snakecase
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── magic-bytes.js
│   │   ├── .gitattributes
│   │   ├── .github
│   │   │   └── workflows
│   │   │       ├── build-and-test.yml
│   │   │       └── static-webapp.yml
│   │   ├── .prettierignore
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── commitlint.config.js
│   │   ├── dist
│   │   │   ├── index.d.ts
│   │   │   ├── index.d.ts.map
│   │   │   ├── index.js
│   │   │   ├── index.spec.d.ts
│   │   │   ├── index.spec.d.ts.map
│   │   │   └── model
│   │   │       ├── pattern-tree.d.ts
│   │   │       ├── pattern-tree.d.ts.map
│   │   │       ├── pattern-tree.js
│   │   │       ├── toHex.d.ts
│   │   │       ├── toHex.d.ts.map
│   │   │       ├── toHex.js
│   │   │       ├── tree.d.ts
│   │   │       ├── tree.d.ts.map
│   │   │       ├── tree.js
│   │   │       ├── tree.spec.d.ts
│   │   │       └── tree.spec.d.ts.map
│   │   ├── jest.config.js
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── make-dir
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── node_modules
│   │   │   ├── .bin
│   │   │   │   └── semver
│   │   │   └── semver
│   │   │       ├── LICENSE
│   │   │       ├── README.md
│   │   │       ├── bin
│   │   │       │   └── semver.js
│   │   │       ├── package.json
│   │   │       ├── range.bnf
│   │   │       └── semver.js
│   │   ├── package.json
│   │   └── readme.md
│   ├── make-error
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── dist
│   │   │   └── make-error.js
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   └── package.json
│   ├── merge2
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── micromatch
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── minimatch
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── minimatch.js
│   │   └── package.json
│   ├── minipass
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── index.mjs
│   │   └── package.json
│   ├── minizlib
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── constants.js
│   │   ├── index.js
│   │   ├── node_modules
│   │   │   └── minipass
│   │   │       ├── LICENSE
│   │   │       ├── README.md
│   │   │       ├── index.d.ts
│   │   │       ├── index.js
│   │   │       └── package.json
│   │   └── package.json
│   ├── mkdirp
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── bin
│   │   │   └── cmd.js
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── find-made.js
│   │   │   ├── mkdirp-manual.js
│   │   │   ├── mkdirp-native.js
│   │   │   ├── opts-arg.js
│   │   │   ├── path-arg.js
│   │   │   └── use-native.js
│   │   ├── package.json
│   │   └── readme.markdown
│   ├── ms
│   │   ├── index.js
│   │   ├── license.md
│   │   ├── package.json
│   │   └── readme.md
│   ├── natural-compare
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── natural-compare-lite
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── node-addon-api
│   │   ├── LICENSE.md
│   │   ├── README.md
│   │   ├── common.gypi
│   │   ├── except.gypi
│   │   ├── index.js
│   │   ├── napi-inl.deprecated.h
│   │   ├── napi-inl.h
│   │   ├── napi.h
│   │   ├── node_addon_api.gyp
│   │   ├── node_api.gyp
│   │   ├── noexcept.gypi
│   │   ├── nothing.c
│   │   ├── package-support.json
│   │   ├── package.json
│   │   └── tools
│   │       ├── README.md
│   │       ├── check-napi.js
│   │       ├── clang-format.js
│   │       └── conversion.js
│   ├── node-fetch
│   │   ├── LICENSE.md
│   │   ├── README.md
│   │   ├── browser.js
│   │   ├── lib
│   │   │   ├── index.es.js
│   │   │   ├── index.js
│   │   │   └── index.mjs
│   │   └── package.json
│   ├── node-gyp-build
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   ├── bin.js
│   │   ├── build-test.js
│   │   ├── index.js
│   │   ├── node-gyp-build.js
│   │   ├── optional.js
│   │   └── package.json
│   ├── node-lame
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── lib
│   │   │   └── build
│   │   │       ├── Lame.js
│   │   │       ├── Lame.js.map
│   │   │       ├── LameOptions.js
│   │   │       ├── LameOptions.js.map
│   │   │       ├── LameTypings.js
│   │   │       └── LameTypings.js.map
│   │   ├── package.json
│   │   └── temp
│   │       ├── encoded
│   │       │   └── .keep
│   │       └── raw
│   │           └── .keep
│   ├── nopt
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── bin
│   │   │   └── nopt.js
│   │   ├── lib
│   │   │   └── nopt.js
│   │   └── package.json
│   ├── npmlog
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── log.js
│   │   └── package.json
│   ├── object-assign
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── once
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── once.js
│   │   └── package.json
│   ├── optionator
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── lib
│   │   │   ├── help.js
│   │   │   ├── index.js
│   │   │   └── util.js
│   │   └── package.json
│   ├── p-limit
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── p-locate
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── parent-module
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── parse-cache-control
│   │   ├── .npmignore
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test.js
│   ├── path-exists
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── path-is-absolute
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── path-key
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── path-type
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── picomatch
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── constants.js
│   │   │   ├── parse.js
│   │   │   ├── picomatch.js
│   │   │   ├── scan.js
│   │   │   └── utils.js
│   │   └── package.json
│   ├── prelude-ls
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── lib
│   │   │   ├── Func.js
│   │   │   ├── List.js
│   │   │   ├── Num.js
│   │   │   ├── Obj.js
│   │   │   ├── Str.js
│   │   │   └── index.js
│   │   └── package.json
│   ├── prettier
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── bin-prettier.js
│   │   ├── cli.js
│   │   ├── doc.js
│   │   ├── esm
│   │   │   ├── parser-angular.mjs
│   │   │   ├── parser-babel.mjs
│   │   │   ├── parser-espree.mjs
│   │   │   ├── parser-flow.mjs
│   │   │   ├── parser-glimmer.mjs
│   │   │   ├── parser-graphql.mjs
│   │   │   ├── parser-html.mjs
│   │   │   ├── parser-markdown.mjs
│   │   │   ├── parser-meriyah.mjs
│   │   │   ├── parser-postcss.mjs
│   │   │   ├── parser-typescript.mjs
│   │   │   ├── parser-yaml.mjs
│   │   │   └── standalone.mjs
│   │   ├── index.js
│   │   ├── package.json
│   │   ├── parser-angular.js
│   │   ├── parser-babel.js
│   │   ├── parser-espree.js
│   │   ├── parser-flow.js
│   │   ├── parser-glimmer.js
│   │   ├── parser-graphql.js
│   │   ├── parser-html.js
│   │   ├── parser-markdown.js
│   │   ├── parser-meriyah.js
│   │   ├── parser-postcss.js
│   │   ├── parser-typescript.js
│   │   ├── parser-yaml.js
│   │   ├── standalone.js
│   │   └── third-party.js
│   ├── prism-media
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── core
│   │   │   │   ├── FFmpeg.js
│   │   │   │   ├── VolumeTransformer.js
│   │   │   │   ├── WebmBase.js
│   │   │   │   └── index.js
│   │   │   ├── index.js
│   │   │   ├── opus
│   │   │   │   ├── OggDemuxer.js
│   │   │   │   ├── Opus.js
│   │   │   │   ├── WebmDemuxer.js
│   │   │   │   └── index.js
│   │   │   ├── util
│   │   │   │   └── loader.js
│   │   │   └── vorbis
│   │   │       ├── WebmDemuxer.js
│   │   │       └── index.js
│   │   └── typings
│   │       ├── index.d.ts
│   │       ├── opus.d.ts
│   │       └── vorbis.d.ts
│   ├── progress
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── Makefile
│   │   ├── Readme.md
│   │   ├── index.js
│   │   ├── lib
│   │   │   └── node-progress.js
│   │   └── package.json
│   ├── punycode
│   │   ├── LICENSE-MIT.txt
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── punycode.es6.js
│   │   └── punycode.js
│   ├── queue-microtask
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   └── package.json
│   ├── readable-stream
│   │   ├── CONTRIBUTING.md
│   │   ├── GOVERNANCE.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── errors-browser.js
│   │   ├── errors.js
│   │   ├── experimentalWarning.js
│   │   ├── lib
│   │   │   ├── _stream_duplex.js
│   │   │   ├── _stream_passthrough.js
│   │   │   ├── _stream_readable.js
│   │   │   ├── _stream_transform.js
│   │   │   ├── _stream_writable.js
│   │   │   └── internal
│   │   │       └── streams
│   │   │           ├── async_iterator.js
│   │   │           ├── buffer_list.js
│   │   │           ├── destroy.js
│   │   │           ├── end-of-stream.js
│   │   │           ├── from-browser.js
│   │   │           ├── from.js
│   │   │           ├── pipeline.js
│   │   │           ├── state.js
│   │   │           ├── stream-browser.js
│   │   │           └── stream.js
│   │   ├── package.json
│   │   ├── readable-browser.js
│   │   └── readable.js
│   ├── resolve-from
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── reusify
│   │   ├── .coveralls.yml
│   │   ├── .travis.yml
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── benchmarks
│   │   │   ├── createNoCodeFunction.js
│   │   │   ├── fib.js
│   │   │   └── reuseNoCodeFunction.js
│   │   ├── package.json
│   │   ├── reusify.js
│   │   └── test.js
│   ├── rimraf
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── bin.js
│   │   ├── package.json
│   │   └── rimraf.js
│   ├── run-parallel
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── safe-buffer
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   └── package.json
│   ├── semver
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── bin
│   │   │   └── semver.js
│   │   ├── classes
│   │   │   ├── comparator.js
│   │   │   ├── index.js
│   │   │   ├── range.js
│   │   │   └── semver.js
│   │   ├── functions
│   │   │   ├── clean.js
│   │   │   ├── cmp.js
│   │   │   ├── coerce.js
│   │   │   ├── compare-build.js
│   │   │   ├── compare-loose.js
│   │   │   ├── compare.js
│   │   │   ├── diff.js
│   │   │   ├── eq.js
│   │   │   ├── gt.js
│   │   │   ├── gte.js
│   │   │   ├── inc.js
│   │   │   ├── lt.js
│   │   │   ├── lte.js
│   │   │   ├── major.js
│   │   │   ├── minor.js
│   │   │   ├── neq.js
│   │   │   ├── parse.js
│   │   │   ├── patch.js
│   │   │   ├── prerelease.js
│   │   │   ├── rcompare.js
│   │   │   ├── rsort.js
│   │   │   ├── satisfies.js
│   │   │   ├── sort.js
│   │   │   └── valid.js
│   │   ├── index.js
│   │   ├── internal
│   │   │   ├── constants.js
│   │   │   ├── debug.js
│   │   │   ├── identifiers.js
│   │   │   ├── lrucache.js
│   │   │   ├── parse-options.js
│   │   │   └── re.js
│   │   ├── package.json
│   │   ├── preload.js
│   │   ├── range.bnf
│   │   └── ranges
│   │       ├── gtr.js
│   │       ├── intersects.js
│   │       ├── ltr.js
│   │       ├── max-satisfying.js
│   │       ├── min-satisfying.js
│   │       ├── min-version.js
│   │       ├── outside.js
│   │       ├── simplify.js
│   │       ├── subset.js
│   │       ├── to-comparators.js
│   │       └── valid.js
│   ├── set-blocking
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE.txt
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── shebang-command
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── shebang-regex
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── signal-exit
│   │   ├── LICENSE.txt
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── package.json
│   │   └── signals.js
│   ├── slash
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── sodium-native
│   │   ├── CMakeLists.txt
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── binding.c
│   │   ├── extensions
│   │   │   ├── pbkdf2
│   │   │   │   ├── pbkdf2.c
│   │   │   │   └── pbkdf2.h
│   │   │   └── tweak
│   │   │       ├── tweak.c
│   │   │       └── tweak.h
│   │   ├── index.js
│   │   ├── macros.h
│   │   ├── package.json
│   │   └── prebuilds
│   │       ├── android-arm
│   │       │   └── sodium-native.bare
│   │       ├── android-arm64
│   │       │   └── sodium-native.bare
│   │       ├── android-ia32
│   │       │   └── sodium-native.bare
│   │       ├── android-x64
│   │       │   └── sodium-native.bare
│   │       ├── darwin-arm64
│   │       │   ├── sodium-native.bare
│   │       │   └── sodium-native.node
│   │       ├── darwin-x64
│   │       │   ├── sodium-native.bare
│   │       │   └── sodium-native.node
│   │       ├── ios-arm64
│   │       │   └── sodium-native.bare
│   │       ├── ios-arm64-simulator
│   │       │   └── sodium-native.bare
│   │       ├── ios-x64-simulator
│   │       │   └── sodium-native.bare
│   │       ├── linux-arm64
│   │       │   ├── sodium-native.bare
│   │       │   └── sodium-native.node
│   │       ├── linux-x64
│   │       │   ├── sodium-native.bare
│   │       │   └── sodium-native.node
│   │       ├── win32-arm64
│   │       │   ├── sodium-native.bare
│   │       │   └── sodium-native.node
│   │       └── win32-x64
│   │           ├── sodium-native.bare
│   │           └── sodium-native.node
│   ├── string-width
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── string_decoder
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── lib
│   │   │   └── string_decoder.js
│   │   └── package.json
│   ├── strip-ansi
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── strip-json-comments
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── strnum
│   │   ├── .vscode
│   │   │   └── launch.json
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── strnum.js
│   │   └── strnum.test.js
│   ├── supports-color
│   │   ├── browser.js
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── tar
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── create.js
│   │   │   ├── extract.js
│   │   │   ├── get-write-flag.js
│   │   │   ├── header.js
│   │   │   ├── high-level-opt.js
│   │   │   ├── large-numbers.js
│   │   │   ├── list.js
│   │   │   ├── mkdir.js
│   │   │   ├── mode-fix.js
│   │   │   ├── normalize-unicode.js
│   │   │   ├── normalize-windows-path.js
│   │   │   ├── pack.js
│   │   │   ├── parse.js
│   │   │   ├── path-reservations.js
│   │   │   ├── pax.js
│   │   │   ├── read-entry.js
│   │   │   ├── replace.js
│   │   │   ├── strip-absolute-path.js
│   │   │   ├── strip-trailing-slashes.js
│   │   │   ├── types.js
│   │   │   ├── unpack.js
│   │   │   ├── update.js
│   │   │   ├── warn-mixin.js
│   │   │   ├── winchars.js
│   │   │   └── write-entry.js
│   │   └── package.json
│   ├── text-table
│   │   ├── .travis.yml
│   │   ├── LICENSE
│   │   ├── example
│   │   │   ├── align.js
│   │   │   ├── center.js
│   │   │   ├── dotalign.js
│   │   │   ├── doubledot.js
│   │   │   └── table.js
│   │   ├── index.js
│   │   ├── package.json
│   │   ├── readme.markdown
│   │   └── test
│   │       ├── align.js
│   │       ├── ansi-colors.js
│   │       ├── center.js
│   │       ├── dotalign.js
│   │       ├── doubledot.js
│   │       └── table.js
│   ├── to-regex-range
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── tr46
│   │   ├── .npmignore
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── .gitkeep
│   │   │   └── mappingTable.json
│   │   └── package.json
│   ├── ts-mixer
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── dist
│   │   │   ├── cjs
│   │   │   │   ├── decorator.js
│   │   │   │   ├── index.js
│   │   │   │   ├── mixin-tracking.js
│   │   │   │   ├── mixins.js
│   │   │   │   ├── proxy.js
│   │   │   │   ├── settings.js
│   │   │   │   ├── types.js
│   │   │   │   └── util.js
│   │   │   ├── esm
│   │   │   │   ├── decorator.d.ts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.js
│   │   │   │   ├── index.min.js
│   │   │   │   ├── mixin-tracking.d.ts
│   │   │   │   ├── mixins.d.ts
│   │   │   │   ├── proxy.d.ts
│   │   │   │   ├── settings.d.ts
│   │   │   │   ├── types.d.ts
│   │   │   │   └── util.d.ts
│   │   │   └── types
│   │   │       ├── decorator.d.ts
│   │   │       ├── index.d.ts
│   │   │       ├── mixin-tracking.d.ts
│   │   │       ├── mixins.d.ts
│   │   │       ├── proxy.d.ts
│   │   │       ├── settings.d.ts
│   │   │       ├── types.d.ts
│   │   │       └── util.d.ts
│   │   └── package.json
│   ├── ts-node
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── child-loader.mjs
│   │   ├── dist
│   │   │   ├── bin-cwd.d.ts
│   │   │   ├── bin-cwd.js
│   │   │   ├── bin-cwd.js.map
│   │   │   ├── bin-esm.d.ts
│   │   │   ├── bin-esm.js
│   │   │   ├── bin-esm.js.map
│   │   │   ├── bin-script-deprecated.d.ts
│   │   │   ├── bin-script-deprecated.js
│   │   │   ├── bin-script-deprecated.js.map
│   │   │   ├── bin-script.d.ts
│   │   │   ├── bin-script.js
│   │   │   ├── bin-script.js.map
│   │   │   ├── bin-transpile.d.ts
│   │   │   ├── bin-transpile.js
│   │   │   ├── bin-transpile.js.map
│   │   │   ├── bin.d.ts
│   │   │   ├── bin.js
│   │   │   ├── bin.js.map
│   │   │   ├── child
│   │   │   │   ├── argv-payload.d.ts
│   │   │   │   ├── argv-payload.js
│   │   │   │   ├── argv-payload.js.map
│   │   │   │   ├── child-entrypoint.d.ts
│   │   │   │   ├── child-entrypoint.js
│   │   │   │   ├── child-entrypoint.js.map
│   │   │   │   ├── child-loader.d.ts
│   │   │   │   ├── child-loader.js
│   │   │   │   ├── child-loader.js.map
│   │   │   │   ├── child-require.d.ts
│   │   │   │   ├── child-require.js
│   │   │   │   ├── child-require.js.map
│   │   │   │   ├── spawn-child.d.ts
│   │   │   │   ├── spawn-child.js
│   │   │   │   └── spawn-child.js.map
│   │   │   ├── cjs-resolve-hooks.d.ts
│   │   │   ├── cjs-resolve-hooks.js
│   │   │   ├── cjs-resolve-hooks.js.map
│   │   │   ├── configuration.d.ts
│   │   │   ├── configuration.js
│   │   │   ├── configuration.js.map
│   │   │   ├── esm.d.ts
│   │   │   ├── esm.js
│   │   │   ├── esm.js.map
│   │   │   ├── file-extensions.d.ts
│   │   │   ├── file-extensions.js
│   │   │   ├── file-extensions.js.map
│   │   │   ├── index.d.ts
│   │   │   ├── index.js
│   │   │   ├── index.js.map
│   │   │   ├── module-type-classifier.d.ts
│   │   │   ├── module-type-classifier.js
│   │   │   ├── module-type-classifier.js.map
│   │   │   ├── node-module-type-classifier.d.ts
│   │   │   ├── node-module-type-classifier.js
│   │   │   ├── node-module-type-classifier.js.map
│   │   │   ├── repl.d.ts
│   │   │   ├── repl.js
│   │   │   ├── repl.js.map
│   │   │   ├── resolver-functions.d.ts
│   │   │   ├── resolver-functions.js
│   │   │   ├── resolver-functions.js.map
│   │   │   ├── transpilers
│   │   │   │   ├── swc.d.ts
│   │   │   │   ├── swc.js
│   │   │   │   ├── swc.js.map
│   │   │   │   ├── types.d.ts
│   │   │   │   ├── types.js
│   │   │   │   └── types.js.map
│   │   │   ├── ts-compiler-types.d.ts
│   │   │   ├── ts-compiler-types.js
│   │   │   ├── ts-compiler-types.js.map
│   │   │   ├── ts-internals.d.ts
│   │   │   ├── ts-internals.js
│   │   │   ├── ts-internals.js.map
│   │   │   ├── ts-transpile-module.d.ts
│   │   │   ├── ts-transpile-module.js
│   │   │   ├── ts-transpile-module.js.map
│   │   │   ├── tsconfig-schema.d.ts
│   │   │   ├── tsconfig-schema.js
│   │   │   ├── tsconfig-schema.js.map
│   │   │   ├── tsconfigs.d.ts
│   │   │   ├── tsconfigs.js
│   │   │   ├── tsconfigs.js.map
│   │   │   ├── util.d.ts
│   │   │   ├── util.js
│   │   │   └── util.js.map
│   │   ├── dist-raw
│   │   │   ├── NODE-LICENSE.md
│   │   │   ├── README.md
│   │   │   ├── node-internal-constants.js
│   │   │   ├── node-internal-errors.js
│   │   │   ├── node-internal-modules-cjs-helpers.js
│   │   │   ├── node-internal-modules-cjs-loader.js
│   │   │   ├── node-internal-modules-esm-get_format.js
│   │   │   ├── node-internal-modules-esm-resolve.js
│   │   │   ├── node-internal-modules-package_json_reader.js
│   │   │   ├── node-internal-repl-await.js
│   │   │   ├── node-internalBinding-fs.js
│   │   │   ├── node-nativemodule.js
│   │   │   ├── node-options.js
│   │   │   ├── node-primordials.js
│   │   │   └── runmain-hack.js
│   │   ├── esm
│   │   │   └── transpile-only.mjs
│   │   ├── esm.mjs
│   │   ├── node10
│   │   │   └── tsconfig.json
│   │   ├── node12
│   │   │   └── tsconfig.json
│   │   ├── node14
│   │   │   └── tsconfig.json
│   │   ├── node16
│   │   │   └── tsconfig.json
│   │   ├── package.json
│   │   ├── register
│   │   │   ├── files.js
│   │   │   ├── index.js
│   │   │   ├── transpile-only.js
│   │   │   └── type-check.js
│   │   ├── transpilers
│   │   │   ├── swc-experimental.js
│   │   │   └── swc.js
│   │   ├── tsconfig.schema.json
│   │   └── tsconfig.schemastore-schema.json
│   ├── tslib
│   │   ├── CopyrightNotice.txt
│   │   ├── LICENSE.txt
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   ├── modules
│   │   │   ├── index.d.ts
│   │   │   ├── index.js
│   │   │   └── package.json
│   │   ├── package.json
│   │   ├── tslib.d.ts
│   │   ├── tslib.es6.html
│   │   ├── tslib.es6.js
│   │   ├── tslib.es6.mjs
│   │   ├── tslib.html
│   │   └── tslib.js
│   ├── tsutils
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── index.js.map
│   │   ├── node_modules
│   │   │   └── tslib
│   │   │       ├── CopyrightNotice.txt
│   │   │       ├── LICENSE.txt
│   │   │       ├── README.md
│   │   │       ├── modules
│   │   │       │   ├── index.js
│   │   │       │   └── package.json
│   │   │       ├── package.json
│   │   │       ├── test
│   │   │       │   └── validateModuleExportsMatchCommonJS
│   │   │       │       ├── index.js
│   │   │       │       └── package.json
│   │   │       ├── tslib.d.ts
│   │   │       ├── tslib.es6.html
│   │   │       ├── tslib.es6.js
│   │   │       ├── tslib.html
│   │   │       └── tslib.js
│   │   ├── package.json
│   │   ├── typeguard
│   │   │   ├── 2.8
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── node.d.ts
│   │   │   │   ├── node.js
│   │   │   │   ├── node.js.map
│   │   │   │   ├── type.d.ts
│   │   │   │   ├── type.js
│   │   │   │   └── type.js.map
│   │   │   ├── 2.9
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── node.d.ts
│   │   │   │   ├── node.js
│   │   │   │   ├── node.js.map
│   │   │   │   ├── type.d.ts
│   │   │   │   ├── type.js
│   │   │   │   └── type.js.map
│   │   │   ├── 3.0
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── node.d.ts
│   │   │   │   ├── node.js
│   │   │   │   ├── node.js.map
│   │   │   │   ├── type.d.ts
│   │   │   │   ├── type.js
│   │   │   │   └── type.js.map
│   │   │   ├── 3.2
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── node.d.ts
│   │   │   │   ├── node.js
│   │   │   │   ├── node.js.map
│   │   │   │   ├── type.d.ts
│   │   │   │   ├── type.js
│   │   │   │   └── type.js.map
│   │   │   ├── index.d.ts
│   │   │   ├── index.js
│   │   │   ├── index.js.map
│   │   │   ├── next
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.js
│   │   │   │   ├── index.js.map
│   │   │   │   ├── node.d.ts
│   │   │   │   ├── node.js
│   │   │   │   ├── node.js.map
│   │   │   │   ├── type.d.ts
│   │   │   │   ├── type.js
│   │   │   │   └── type.js.map
│   │   │   ├── node.d.ts
│   │   │   ├── node.js
│   │   │   ├── node.js.map
│   │   │   ├── type.d.ts
│   │   │   ├── type.js
│   │   │   └── type.js.map
│   │   └── util
│   │       ├── control-flow.d.ts
│   │       ├── control-flow.js
│   │       ├── control-flow.js.map
│   │       ├── convert-ast.d.ts
│   │       ├── convert-ast.js
│   │       ├── convert-ast.js.map
│   │       ├── index.d.ts
│   │       ├── index.js
│   │       ├── index.js.map
│   │       ├── type.d.ts
│   │       ├── type.js
│   │       ├── type.js.map
│   │       ├── usage.d.ts
│   │       ├── usage.js
│   │       ├── usage.js.map
│   │       ├── util.d.ts
│   │       ├── util.js
│   │       └── util.js.map
│   ├── type-check
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── lib
│   │   │   ├── check.js
│   │   │   ├── index.js
│   │   │   └── parse-type.js
│   │   └── package.json
│   ├── type-fest
│   │   ├── base.d.ts
│   │   ├── index.d.ts
│   │   ├── license
│   │   ├── package.json
│   │   ├── readme.md
│   │   ├── source
│   │   │   ├── async-return-type.d.ts
│   │   │   ├── asyncify.d.ts
│   │   │   ├── basic.d.ts
│   │   │   ├── conditional-except.d.ts
│   │   │   ├── conditional-keys.d.ts
│   │   │   ├── conditional-pick.d.ts
│   │   │   ├── entries.d.ts
│   │   │   ├── entry.d.ts
│   │   │   ├── except.d.ts
│   │   │   ├── fixed-length-array.d.ts
│   │   │   ├── iterable-element.d.ts
│   │   │   ├── literal-union.d.ts
│   │   │   ├── merge-exclusive.d.ts
│   │   │   ├── merge.d.ts
│   │   │   ├── mutable.d.ts
│   │   │   ├── opaque.d.ts
│   │   │   ├── package-json.d.ts
│   │   │   ├── partial-deep.d.ts
│   │   │   ├── promisable.d.ts
│   │   │   ├── promise-value.d.ts
│   │   │   ├── readonly-deep.d.ts
│   │   │   ├── require-at-least-one.d.ts
│   │   │   ├── require-exactly-one.d.ts
│   │   │   ├── set-optional.d.ts
│   │   │   ├── set-required.d.ts
│   │   │   ├── set-return-type.d.ts
│   │   │   ├── stringified.d.ts
│   │   │   ├── tsconfig-json.d.ts
│   │   │   ├── union-to-intersection.d.ts
│   │   │   ├── utilities.d.ts
│   │   │   └── value-of.d.ts
│   │   └── ts41
│   │       ├── camel-case.d.ts
│   │       ├── delimiter-case.d.ts
│   │       ├── index.d.ts
│   │       ├── kebab-case.d.ts
│   │       ├── pascal-case.d.ts
│   │       └── snake-case.d.ts
│   ├── typedarray
│   │   ├── .travis.yml
│   │   ├── LICENSE
│   │   ├── example
│   │   │   └── tarray.js
│   │   ├── index.js
│   │   ├── package.json
│   │   ├── readme.markdown
│   │   └── test
│   │       ├── server
│   │       │   └── undef_globals.js
│   │       └── tarray.js
│   ├── typescript
│   │   ├── LICENSE.txt
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   ├── ThirdPartyNoticeText.txt
│   │   ├── bin
│   │   │   ├── tsc
│   │   │   └── tsserver
│   │   ├── lib
│   │   │   ├── _tsc.js
│   │   │   ├── _tsserver.js
│   │   │   ├── _typingsInstaller.js
│   │   │   ├── cancellationToken.js
│   │   │   ├── cs
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── de
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── es
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── fr
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── it
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── ja
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── ko
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── lib.d.ts
│   │   │   ├── lib.decorators.d.ts
│   │   │   ├── lib.decorators.legacy.d.ts
│   │   │   ├── lib.dom.asynciterable.d.ts
│   │   │   ├── lib.dom.d.ts
│   │   │   ├── lib.dom.iterable.d.ts
│   │   │   ├── lib.es2015.collection.d.ts
│   │   │   ├── lib.es2015.core.d.ts
│   │   │   ├── lib.es2015.d.ts
│   │   │   ├── lib.es2015.generator.d.ts
│   │   │   ├── lib.es2015.iterable.d.ts
│   │   │   ├── lib.es2015.promise.d.ts
│   │   │   ├── lib.es2015.proxy.d.ts
│   │   │   ├── lib.es2015.reflect.d.ts
│   │   │   ├── lib.es2015.symbol.d.ts
│   │   │   ├── lib.es2015.symbol.wellknown.d.ts
│   │   │   ├── lib.es2016.array.include.d.ts
│   │   │   ├── lib.es2016.d.ts
│   │   │   ├── lib.es2016.full.d.ts
│   │   │   ├── lib.es2016.intl.d.ts
│   │   │   ├── lib.es2017.arraybuffer.d.ts
│   │   │   ├── lib.es2017.d.ts
│   │   │   ├── lib.es2017.date.d.ts
│   │   │   ├── lib.es2017.full.d.ts
│   │   │   ├── lib.es2017.intl.d.ts
│   │   │   ├── lib.es2017.object.d.ts
│   │   │   ├── lib.es2017.sharedmemory.d.ts
│   │   │   ├── lib.es2017.string.d.ts
│   │   │   ├── lib.es2017.typedarrays.d.ts
│   │   │   ├── lib.es2018.asyncgenerator.d.ts
│   │   │   ├── lib.es2018.asynciterable.d.ts
│   │   │   ├── lib.es2018.d.ts
│   │   │   ├── lib.es2018.full.d.ts
│   │   │   ├── lib.es2018.intl.d.ts
│   │   │   ├── lib.es2018.promise.d.ts
│   │   │   ├── lib.es2018.regexp.d.ts
│   │   │   ├── lib.es2019.array.d.ts
│   │   │   ├── lib.es2019.d.ts
│   │   │   ├── lib.es2019.full.d.ts
│   │   │   ├── lib.es2019.intl.d.ts
│   │   │   ├── lib.es2019.object.d.ts
│   │   │   ├── lib.es2019.string.d.ts
│   │   │   ├── lib.es2019.symbol.d.ts
│   │   │   ├── lib.es2020.bigint.d.ts
│   │   │   ├── lib.es2020.d.ts
│   │   │   ├── lib.es2020.date.d.ts
│   │   │   ├── lib.es2020.full.d.ts
│   │   │   ├── lib.es2020.intl.d.ts
│   │   │   ├── lib.es2020.number.d.ts
│   │   │   ├── lib.es2020.promise.d.ts
│   │   │   ├── lib.es2020.sharedmemory.d.ts
│   │   │   ├── lib.es2020.string.d.ts
│   │   │   ├── lib.es2020.symbol.wellknown.d.ts
│   │   │   ├── lib.es2021.d.ts
│   │   │   ├── lib.es2021.full.d.ts
│   │   │   ├── lib.es2021.intl.d.ts
│   │   │   ├── lib.es2021.promise.d.ts
│   │   │   ├── lib.es2021.string.d.ts
│   │   │   ├── lib.es2021.weakref.d.ts
│   │   │   ├── lib.es2022.array.d.ts
│   │   │   ├── lib.es2022.d.ts
│   │   │   ├── lib.es2022.error.d.ts
│   │   │   ├── lib.es2022.full.d.ts
│   │   │   ├── lib.es2022.intl.d.ts
│   │   │   ├── lib.es2022.object.d.ts
│   │   │   ├── lib.es2022.regexp.d.ts
│   │   │   ├── lib.es2022.string.d.ts
│   │   │   ├── lib.es2023.array.d.ts
│   │   │   ├── lib.es2023.collection.d.ts
│   │   │   ├── lib.es2023.d.ts
│   │   │   ├── lib.es2023.full.d.ts
│   │   │   ├── lib.es2023.intl.d.ts
│   │   │   ├── lib.es2024.arraybuffer.d.ts
│   │   │   ├── lib.es2024.collection.d.ts
│   │   │   ├── lib.es2024.d.ts
│   │   │   ├── lib.es2024.full.d.ts
│   │   │   ├── lib.es2024.object.d.ts
│   │   │   ├── lib.es2024.promise.d.ts
│   │   │   ├── lib.es2024.regexp.d.ts
│   │   │   ├── lib.es2024.sharedmemory.d.ts
│   │   │   ├── lib.es2024.string.d.ts
│   │   │   ├── lib.es5.d.ts
│   │   │   ├── lib.es6.d.ts
│   │   │   ├── lib.esnext.array.d.ts
│   │   │   ├── lib.esnext.collection.d.ts
│   │   │   ├── lib.esnext.d.ts
│   │   │   ├── lib.esnext.decorators.d.ts
│   │   │   ├── lib.esnext.disposable.d.ts
│   │   │   ├── lib.esnext.full.d.ts
│   │   │   ├── lib.esnext.intl.d.ts
│   │   │   ├── lib.esnext.iterator.d.ts
│   │   │   ├── lib.scripthost.d.ts
│   │   │   ├── lib.webworker.asynciterable.d.ts
│   │   │   ├── lib.webworker.d.ts
│   │   │   ├── lib.webworker.importscripts.d.ts
│   │   │   ├── lib.webworker.iterable.d.ts
│   │   │   ├── pl
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── pt-br
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── ru
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── tr
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── tsc.js
│   │   │   ├── tsserver.js
│   │   │   ├── tsserverlibrary.d.ts
│   │   │   ├── tsserverlibrary.js
│   │   │   ├── typesMap.json
│   │   │   ├── typescript.d.ts
│   │   │   ├── typescript.js
│   │   │   ├── typingsInstaller.js
│   │   │   ├── watchGuard.js
│   │   │   ├── zh-cn
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   └── zh-tw
│   │   │       └── diagnosticMessages.generated.json
│   │   └── package.json
│   ├── undici
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── docs
│   │   │   └── docs
│   │   │       ├── api
│   │   │       │   ├── Agent.md
│   │   │       │   ├── BalancedPool.md
│   │   │       │   ├── CacheStorage.md
│   │   │       │   ├── Client.md
│   │   │       │   ├── Connector.md
│   │   │       │   ├── ContentType.md
│   │   │       │   ├── Cookies.md
│   │   │       │   ├── Debug.md
│   │   │       │   ├── DiagnosticsChannel.md
│   │   │       │   ├── DispatchInterceptor.md
│   │   │       │   ├── Dispatcher.md
│   │   │       │   ├── EnvHttpProxyAgent.md
│   │   │       │   ├── Errors.md
│   │   │       │   ├── EventSource.md
│   │   │       │   ├── Fetch.md
│   │   │       │   ├── MockAgent.md
│   │   │       │   ├── MockClient.md
│   │   │       │   ├── MockErrors.md
│   │   │       │   ├── MockPool.md
│   │   │       │   ├── Pool.md
│   │   │       │   ├── PoolStats.md
│   │   │       │   ├── ProxyAgent.md
│   │   │       │   ├── RedirectHandler.md
│   │   │       │   ├── RetryAgent.md
│   │   │       │   ├── RetryHandler.md
│   │   │       │   ├── Util.md
│   │   │       │   ├── WebSocket.md
│   │   │       │   └── api-lifecycle.md
│   │   │       └── best-practices
│   │   │           ├── client-certificate.md
│   │   │           ├── mocking-request.md
│   │   │           ├── proxy.md
│   │   │           └── writing-tests.md
│   │   ├── index-fetch.js
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── api
│   │   │   │   ├── abort-signal.js
│   │   │   │   ├── api-connect.js
│   │   │   │   ├── api-pipeline.js
│   │   │   │   ├── api-request.js
│   │   │   │   ├── api-stream.js
│   │   │   │   ├── api-upgrade.js
│   │   │   │   ├── index.js
│   │   │   │   ├── readable.js
│   │   │   │   └── util.js
│   │   │   ├── core
│   │   │   │   ├── connect.js
│   │   │   │   ├── constants.js
│   │   │   │   ├── diagnostics.js
│   │   │   │   ├── errors.js
│   │   │   │   ├── request.js
│   │   │   │   ├── symbols.js
│   │   │   │   ├── tree.js
│   │   │   │   └── util.js
│   │   │   ├── dispatcher
│   │   │   │   ├── agent.js
│   │   │   │   ├── balanced-pool.js
│   │   │   │   ├── client-h1.js
│   │   │   │   ├── client-h2.js
│   │   │   │   ├── client.js
│   │   │   │   ├── dispatcher-base.js
│   │   │   │   ├── dispatcher.js
│   │   │   │   ├── env-http-proxy-agent.js
│   │   │   │   ├── fixed-queue.js
│   │   │   │   ├── pool-base.js
│   │   │   │   ├── pool-stats.js
│   │   │   │   ├── pool.js
│   │   │   │   ├── proxy-agent.js
│   │   │   │   └── retry-agent.js
│   │   │   ├── global.js
│   │   │   ├── handler
│   │   │   │   ├── decorator-handler.js
│   │   │   │   ├── redirect-handler.js
│   │   │   │   └── retry-handler.js
│   │   │   ├── interceptor
│   │   │   │   ├── dump.js
│   │   │   │   ├── redirect-interceptor.js
│   │   │   │   ├── redirect.js
│   │   │   │   └── retry.js
│   │   │   ├── llhttp
│   │   │   │   ├── .gitkeep
│   │   │   │   ├── constants.js
│   │   │   │   ├── llhttp-wasm.js
│   │   │   │   ├── llhttp_simd-wasm.js
│   │   │   │   └── utils.js
│   │   │   ├── mock
│   │   │   │   ├── mock-agent.js
│   │   │   │   ├── mock-client.js
│   │   │   │   ├── mock-errors.js
│   │   │   │   ├── mock-interceptor.js
│   │   │   │   ├── mock-pool.js
│   │   │   │   ├── mock-symbols.js
│   │   │   │   ├── mock-utils.js
│   │   │   │   ├── pending-interceptors-formatter.js
│   │   │   │   └── pluralizer.js
│   │   │   ├── util
│   │   │   │   └── timers.js
│   │   │   └── web
│   │   │       ├── cache
│   │   │       │   ├── cache.js
│   │   │       │   ├── cachestorage.js
│   │   │       │   ├── symbols.js
│   │   │       │   └── util.js
│   │   │       ├── cookies
│   │   │       │   ├── constants.js
│   │   │       │   ├── index.js
│   │   │       │   ├── parse.js
│   │   │       │   └── util.js
│   │   │       ├── eventsource
│   │   │       │   ├── eventsource-stream.js
│   │   │       │   ├── eventsource.js
│   │   │       │   └── util.js
│   │   │       ├── fetch
│   │   │       │   ├── LICENSE
│   │   │       │   ├── body.js
│   │   │       │   ├── constants.js
│   │   │       │   ├── data-url.js
│   │   │       │   ├── dispatcher-weakref.js
│   │   │       │   ├── file.js
│   │   │       │   ├── formdata-parser.js
│   │   │       │   ├── formdata.js
│   │   │       │   ├── global.js
│   │   │       │   ├── headers.js
│   │   │       │   ├── index.js
│   │   │       │   ├── request.js
│   │   │       │   ├── response.js
│   │   │       │   ├── symbols.js
│   │   │       │   ├── util.js
│   │   │       │   └── webidl.js
│   │   │       ├── fileapi
│   │   │       │   ├── encoding.js
│   │   │       │   ├── filereader.js
│   │   │       │   ├── progressevent.js
│   │   │       │   ├── symbols.js
│   │   │       │   └── util.js
│   │   │       └── websocket
│   │   │           ├── connection.js
│   │   │           ├── constants.js
│   │   │           ├── events.js
│   │   │           ├── frame.js
│   │   │           ├── permessage-deflate.js
│   │   │           ├── receiver.js
│   │   │           ├── sender.js
│   │   │           ├── symbols.js
│   │   │           ├── util.js
│   │   │           └── websocket.js
│   │   ├── package.json
│   │   ├── scripts
│   │   │   └── strip-comments.js
│   │   └── types
│   │       ├── README.md
│   │       ├── agent.d.ts
│   │       ├── api.d.ts
│   │       ├── balanced-pool.d.ts
│   │       ├── cache.d.ts
│   │       ├── client.d.ts
│   │       ├── connector.d.ts
│   │       ├── content-type.d.ts
│   │       ├── cookies.d.ts
│   │       ├── diagnostics-channel.d.ts
│   │       ├── dispatcher.d.ts
│   │       ├── env-http-proxy-agent.d.ts
│   │       ├── errors.d.ts
│   │       ├── eventsource.d.ts
│   │       ├── fetch.d.ts
│   │       ├── file.d.ts
│   │       ├── filereader.d.ts
│   │       ├── formdata.d.ts
│   │       ├── global-dispatcher.d.ts
│   │       ├── global-origin.d.ts
│   │       ├── handlers.d.ts
│   │       ├── header.d.ts
│   │       ├── index.d.ts
│   │       ├── interceptors.d.ts
│   │       ├── mock-agent.d.ts
│   │       ├── mock-client.d.ts
│   │       ├── mock-errors.d.ts
│   │       ├── mock-interceptor.d.ts
│   │       ├── mock-pool.d.ts
│   │       ├── patch.d.ts
│   │       ├── pool-stats.d.ts
│   │       ├── pool.d.ts
│   │       ├── proxy-agent.d.ts
│   │       ├── readable.d.ts
│   │       ├── retry-agent.d.ts
│   │       ├── retry-handler.d.ts
│   │       ├── util.d.ts
│   │       ├── webidl.d.ts
│   │       └── websocket.d.ts
│   ├── undici-types
│   │   ├── README.md
│   │   ├── agent.d.ts
│   │   ├── api.d.ts
│   │   ├── balanced-pool.d.ts
│   │   ├── cache.d.ts
│   │   ├── client.d.ts
│   │   ├── connector.d.ts
│   │   ├── content-type.d.ts
│   │   ├── cookies.d.ts
│   │   ├── diagnostics-channel.d.ts
│   │   ├── dispatcher.d.ts
│   │   ├── errors.d.ts
│   │   ├── fetch.d.ts
│   │   ├── file.d.ts
│   │   ├── filereader.d.ts
│   │   ├── formdata.d.ts
│   │   ├── global-dispatcher.d.ts
│   │   ├── global-origin.d.ts
│   │   ├── handlers.d.ts
│   │   ├── header.d.ts
│   │   ├── index.d.ts
│   │   ├── interceptors.d.ts
│   │   ├── mock-agent.d.ts
│   │   ├── mock-client.d.ts
│   │   ├── mock-errors.d.ts
│   │   ├── mock-interceptor.d.ts
│   │   ├── mock-pool.d.ts
│   │   ├── package.json
│   │   ├── patch.d.ts
│   │   ├── pool-stats.d.ts
│   │   ├── pool.d.ts
│   │   ├── proxy-agent.d.ts
│   │   ├── readable.d.ts
│   │   ├── webidl.d.ts
│   │   └── websocket.d.ts
│   ├── uri-js
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── dist
│   │   │   ├── es5
│   │   │   │   ├── uri.all.d.ts
│   │   │   │   ├── uri.all.js
│   │   │   │   ├── uri.all.js.map
│   │   │   │   ├── uri.all.min.d.ts
│   │   │   │   ├── uri.all.min.js
│   │   │   │   └── uri.all.min.js.map
│   │   │   └── esnext
│   │   │       ├── index.d.ts
│   │   │       ├── index.js
│   │   │       ├── index.js.map
│   │   │       ├── regexps-iri.d.ts
│   │   │       ├── regexps-iri.js
│   │   │       ├── regexps-iri.js.map
│   │   │       ├── regexps-uri.d.ts
│   │   │       ├── regexps-uri.js
│   │   │       ├── regexps-uri.js.map
│   │   │       ├── schemes
│   │   │       │   ├── http.d.ts
│   │   │       │   ├── http.js
│   │   │       │   ├── http.js.map
│   │   │       │   ├── https.d.ts
│   │   │       │   ├── https.js
│   │   │       │   ├── https.js.map
│   │   │       │   ├── mailto.d.ts
│   │   │       │   ├── mailto.js
│   │   │       │   ├── mailto.js.map
│   │   │       │   ├── urn-uuid.d.ts
│   │   │       │   ├── urn-uuid.js
│   │   │       │   ├── urn-uuid.js.map
│   │   │       │   ├── urn.d.ts
│   │   │       │   ├── urn.js
│   │   │       │   ├── urn.js.map
│   │   │       │   ├── ws.d.ts
│   │   │       │   ├── ws.js
│   │   │       │   ├── ws.js.map
│   │   │       │   ├── wss.d.ts
│   │   │       │   ├── wss.js
│   │   │       │   └── wss.js.map
│   │   │       ├── uri.d.ts
│   │   │       ├── uri.js
│   │   │       ├── uri.js.map
│   │   │       ├── util.d.ts
│   │   │       ├── util.js
│   │   │       └── util.js.map
│   │   ├── package.json
│   │   └── yarn.lock
│   ├── util-deprecate
│   │   ├── History.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── browser.js
│   │   ├── node.js
│   │   └── package.json
│   ├── uuid
│   │   ├── CHANGELOG.md
│   │   ├── CONTRIBUTING.md
│   │   ├── LICENSE.md
│   │   ├── README.md
│   │   ├── dist
│   │   │   ├── bin
│   │   │   │   └── uuid
│   │   │   ├── commonjs-browser
│   │   │   │   ├── index.js
│   │   │   │   ├── md5.js
│   │   │   │   ├── native.js
│   │   │   │   ├── nil.js
│   │   │   │   ├── parse.js
│   │   │   │   ├── regex.js
│   │   │   │   ├── rng.js
│   │   │   │   ├── sha1.js
│   │   │   │   ├── stringify.js
│   │   │   │   ├── v1.js
│   │   │   │   ├── v3.js
│   │   │   │   ├── v35.js
│   │   │   │   ├── v4.js
│   │   │   │   ├── v5.js
│   │   │   │   ├── validate.js
│   │   │   │   └── version.js
│   │   │   ├── esm-browser
│   │   │   │   ├── index.js
│   │   │   │   ├── md5.js
│   │   │   │   ├── native.js
│   │   │   │   ├── nil.js
│   │   │   │   ├── parse.js
│   │   │   │   ├── regex.js
│   │   │   │   ├── rng.js
│   │   │   │   ├── sha1.js
│   │   │   │   ├── stringify.js
│   │   │   │   ├── v1.js
│   │   │   │   ├── v3.js
│   │   │   │   ├── v35.js
│   │   │   │   ├── v4.js
│   │   │   │   ├── v5.js
│   │   │   │   ├── validate.js
│   │   │   │   └── version.js
│   │   │   ├── esm-node
│   │   │   │   ├── index.js
│   │   │   │   ├── md5.js
│   │   │   │   ├── native.js
│   │   │   │   ├── nil.js
│   │   │   │   ├── parse.js
│   │   │   │   ├── regex.js
│   │   │   │   ├── rng.js
│   │   │   │   ├── sha1.js
│   │   │   │   ├── stringify.js
│   │   │   │   ├── v1.js
│   │   │   │   ├── v3.js
│   │   │   │   ├── v35.js
│   │   │   │   ├── v4.js
│   │   │   │   ├── v5.js
│   │   │   │   ├── validate.js
│   │   │   │   └── version.js
│   │   │   ├── index.js
│   │   │   ├── md5-browser.js
│   │   │   ├── md5.js
│   │   │   ├── native-browser.js
│   │   │   ├── native.js
│   │   │   ├── nil.js
│   │   │   ├── parse.js
│   │   │   ├── regex.js
│   │   │   ├── rng-browser.js
│   │   │   ├── rng.js
│   │   │   ├── sha1-browser.js
│   │   │   ├── sha1.js
│   │   │   ├── stringify.js
│   │   │   ├── uuid-bin.js
│   │   │   ├── v1.js
│   │   │   ├── v3.js
│   │   │   ├── v35.js
│   │   │   ├── v4.js
│   │   │   ├── v5.js
│   │   │   ├── validate.js
│   │   │   └── version.js
│   │   ├── package.json
│   │   └── wrapper.mjs
│   ├── v8-compile-cache-lib
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── v8-compile-cache.d.ts
│   │   └── v8-compile-cache.js
│   ├── webidl-conversions
│   │   ├── LICENSE.md
│   │   ├── README.md
│   │   ├── lib
│   │   │   └── index.js
│   │   └── package.json
│   ├── whatwg-url
│   │   ├── LICENSE.txt
│   │   ├── README.md
│   │   ├── lib
│   │   │   ├── URL-impl.js
│   │   │   ├── URL.js
│   │   │   ├── public-api.js
│   │   │   ├── url-state-machine.js
│   │   │   └── utils.js
│   │   └── package.json
│   ├── which
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── bin
│   │   │   └── node-which
│   │   ├── package.json
│   │   └── which.js
│   ├── wide-align
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── align.js
│   │   └── package.json
│   ├── word-wrap
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   └── package.json
│   ├── wrappy
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── package.json
│   │   └── wrappy.js
│   ├── ws
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── browser.js
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── buffer-util.js
│   │   │   ├── constants.js
│   │   │   ├── event-target.js
│   │   │   ├── extension.js
│   │   │   ├── limiter.js
│   │   │   ├── permessage-deflate.js
│   │   │   ├── receiver.js
│   │   │   ├── sender.js
│   │   │   ├── stream.js
│   │   │   ├── subprotocol.js
│   │   │   ├── validation.js
│   │   │   ├── websocket-server.js
│   │   │   └── websocket.js
│   │   ├── package.json
│   │   └── wrapper.mjs
│   ├── yallist
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── iterator.js
│   │   ├── package.json
│   │   └── yallist.js
│   ├── yn
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── lenient.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   └── yocto-queue
│       ├── index.d.ts
│       ├── index.js
│       ├── license
│       ├── package.json
│       └── readme.md
├── package-lock.json
├── package.json
├── recordings
│   ├── 1185983993842245723-1738426270147.pcm
│   ├── 1185983993842245723-1738426364085.pcm
│   ├── 1185983993842245723-1738426447460.pcm
│   ├── 1185983993842245723-1738427433296.pcm
│   ├── 1185983993842245723-1738427841345.pcm
│   ├── 1185983993842245723-1738427967044.pcm
│   ├── 1185983993842245723-1738428851109.pcm
│   ├── 1185983993842245723-1738429236368.pcm
│   ├── 1185983993842245723-1738429917874.pcm
│   ├── 1185983993842245723-1738430655376.pcm
│   ├── 1185983993842245723-1738430859319.pcm
│   ├── 1185983993842245723-1738431003217.pcm
│   └── 1185983993842245723-1738438593118.pcm
├── src
│   ├── commands
│   │   ├── join.ts
│   │   ├── leave.ts
│   │   └── ping.ts
│   ├── deploy-commands.ts
│   ├── index.ts
│   ├── services
│   │   ├── audioRecorder.ts
│   │   └── aws-setup.ts
│   ├── types
│   │   ├── commands.ts
│   │   ├── discord.ts
│   │   └── voice.ts
│   └── utils
│       ├── audioProcessor.ts
│       └── generateDocs.ts
└── tsconfig.json
```

## Package.json

```json
{
  "name": "dnd-scribe",
  "version": "1.0.0",
  "description": "A Discord bot that records and transcribes D&D sessions",
  "main": "dist/index.js",
  "type": "module",
  "scripts": {
    "docs": "node --loader ts-node/esm src/utils/generateDocs.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "node --loader ts-node/esm src/index.ts",
    "watch": "tsc -w",
    "lint": "eslint src --ext .ts",
    "format": "prettier --write \"src/**/*.ts\"",
    "deploy": "node --loader ts-node/esm src/deploy-commands.ts",
    "deploy-and-dev": "npm run deploy && sleep 5 && npm run dev"
  },
  "dependencies": {
    "@aws-sdk/client-iam": "^3.738.0",
    "@aws-sdk/client-s3": "^3.0.0",
    "@aws-sdk/client-transcribe": "^3.0.0",
    "@discordjs/opus": "^0.10.0",
    "@discordjs/voice": "^0.18.0",
    "@ffmpeg-installer/ffmpeg": "^1.1.0",
    "@types/ffmpeg-static": "^3.0.3",
    "discord.js": "^14.14.1",
    "dotenv": "^16.0.0",
    "ffmpeg-static": "^5.2.0",
    "node-lame": "^1.3.2",
    "prism-media": "^1.3.5",
    "sodium-native": "^4.0.1"
  },
  "devDependencies": {
    "@types/node": "^18.0.0",
    "@typescript-eslint/eslint-plugin": "^5.0.0",
    "@typescript-eslint/parser": "^5.0.0",
    "eslint": "^8.0.0",
    "prettier": "^2.0.0",
    "ts-node": "^10.9.2",
    "typescript": "^5.0.0"
  }
}

```

## Source Code

### src/commands/join.ts

```typescript
import { SlashCommandBuilder, ChatInputCommandInteraction, GuildMember } from 'discord.js';
import { AudioRecorder } from '../services/audioRecorder.js';

// Singleton instance of AudioRecorder
const audioRecorder = new AudioRecorder();

export const data = new SlashCommandBuilder()
  .setName('join')
  .setDescription('Joins your voice channel and starts recording')
  .setDMPermission(false) // Explicitly disable DM usage
  .addStringOption((option) =>
    option.setName('campaign').setDescription('The name of the D&D campaign').setRequired(false),
  );

export async function execute(interaction: ChatInputCommandInteraction) {
  console.log('Join command received');

  try {
    console.log('[Join Command] Starting execution...');

    if (!interaction.guild) {
      console.log('[Join Command] Error: Command used outside of guild');
      return interaction.reply({
        content: 'This command can only be used in a server!',
        flags: ['Ephemeral'],
      });
    }

    console.log('[Join Command] Deferring reply...');
    await interaction.deferReply();
    console.log('[Join Command] Reply deferred');

    // Check if the user is in a voice channel
    const member = interaction.member as GuildMember;
    const voiceChannel = member.voice.channel;

    console.log('[Join Command] User voice state:', {
      inVoiceChannel: !!voiceChannel,
      channelId: voiceChannel?.id,
      channelName: voiceChannel?.name,
      guildId: interaction.guild.id,
      guildName: interaction.guild.name,
      userId: member.id,
      userName: member.user.tag,
    });

    if (!voiceChannel) {
      console.log('[Join Command] Error: User not in a voice channel');
      return interaction.editReply('You need to be in a voice channel first!');
    }

    console.log('[Join Command] Checking for existing session...');
    // Check if there's already an active session
    const existingSession = audioRecorder.getActiveSession(voiceChannel.guild.id);
    if (existingSession) {
      console.log('[Join Command] Error: Active session already exists', {
        existingSessionId: existingSession.sessionId,
      });
      return interaction.editReply(
        'Already recording in a voice channel! Use /leave to stop the current recording first.',
      );
    }

    console.log('[Join Command] Getting campaign name...');
    // Get campaign name if provided
    const campaignName = interaction.options.getString('campaign') ?? undefined;

    console.log('[Join Command] Starting recording...', {
      channelId: voiceChannel.id,
      channelName: voiceChannel.name,
      campaignName,
    });

    // Start recording
    const session = await audioRecorder.startRecording(voiceChannel, campaignName);

    console.log('[Join Command] Recording started successfully:', {
      channelName: voiceChannel.name,
      sessionId: session.sessionId,
      campaignName: session.campaignName,
    });

    await interaction.editReply(
      `Joined ${voiceChannel.name} and started recording!${
        campaignName ? ` (Campaign: ${campaignName})` : ''
      }`,
    );
  } catch (error) {
    console.error('[Join Command] Error:', error);

    // If we haven't replied yet, defer the reply
    if (!interaction.deferred && !interaction.replied) {
      await interaction.deferReply();
    }

    await interaction.editReply('Failed to join the voice channel!');
  }
}

```

### src/commands/leave.ts

```typescript
import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import { getVoiceConnection } from '@discordjs/voice';
import { AudioRecorder } from '../services/audioRecorder.js';
import { uploadAudioToS3, startTranscriptionJob } from '../services/aws-setup.js';
import { convertPcmToMp3 } from '../utils/audioProcessor.js';

// Use the same singleton instance as join command
const audioRecorder = new AudioRecorder();

export const data = new SlashCommandBuilder()
  .setName('leave')
  .setDescription('Stops recording and leaves the voice channel');

export async function execute(interaction: ChatInputCommandInteraction) {
  if (!interaction.guild) {
    return interaction.reply({
      content: 'This command can only be used in a server!',
      ephemeral: true,
    });
  }

  try {
    console.log('[Leave Command] Checking voice connection and recording status...');

    const connection = getVoiceConnection(interaction.guild.id);
    const activeSession = audioRecorder.getActiveSession(interaction.guild.id);

    // If no connection and no session, nothing to do
    if (!connection && !activeSession) {
      return interaction.reply({
        content: "I'm not in any voice channel!",
        ephemeral: true,
      });
    }

    let response = '';

    // Handle active recording session if exists
    if (activeSession) {
      console.log('[Leave Command] Stopping active recording session...');
      const metadata = await audioRecorder.stopRecording(interaction.guild.id);

      if (metadata) {
        try {
          // Check if the PCM file exists and has content
          const fs = await import('fs/promises');
          const pcmPath = `./recordings/${metadata.sessionId}.pcm`;
          const mp3Path = `./recordings/${metadata.sessionId}.mp3`;

          const fileStats = await fs.stat(pcmPath).catch(() => null);
          if (!fileStats || fileStats.size === 0) {
            console.error('[Leave Command] No audio data recorded');
            response = 'No audio was recorded during the session.';
          } else {
            // Convert PCM to MP3
            console.log('[Leave Command] Converting PCM to MP3...');
            await convertPcmToMp3(pcmPath, mp3Path);

            // Upload MP3 to S3
            console.log('[Leave Command] Uploading MP3 to S3...');
            const s3Key = await uploadAudioToS3(
              mp3Path,
              `${metadata.sessionId}.mp3`,
              process.env.PROJECT_NAME + '-audio-input',
            );

            // Start transcription job
            console.log('[Leave Command] Starting transcription job...');
            await startTranscriptionJob(
              s3Key,
              process.env.PROJECT_NAME + '-audio-input',
              process.env.PROJECT_NAME + '-transcription-output',
              metadata.sessionId,
            );

            const duration = Math.round(metadata.duration);
            const minutes = Math.floor(duration / 60);
            const seconds = duration % 60;
            const participants = metadata.participants.length;

            response =
              `Recording stopped! Session details:\n` +
              `• Duration: ${minutes}m ${seconds}s\n` +
              `• Participants: ${participants}\n` +
              `• Campaign: ${metadata.campaignName || 'Not specified'}\n` +
              `• File size: ${Math.round((metadata.fileSize / 1024 / 1024) * 100) / 100}MB\n` +
              `• Transcription job started: session-${metadata.sessionId}`;
          }

          // Clean up local files
          await fs.unlink(pcmPath).catch((error) => {
            console.error('[Leave Command] Error deleting PCM file:', error);
          });
          if (await fs.stat(mp3Path).catch(() => null)) {
            await fs.unlink(mp3Path).catch((error) => {
              console.error('[Leave Command] Error deleting MP3 file:', error);
            });
          }
        } catch (error: unknown) {
          console.error('[Leave Command] Error processing recording:', error);
          if (error instanceof Error) {
            console.error('[Leave Command] Stack trace:', error.stack);
          }
          response = 'Failed to process recording. Please try again.';
        }
      }
    }

    // Handle voice connection if exists
    if (connection) {
      console.log('[Leave Command] Destroying voice connection...');
      connection.destroy();
      response = response || 'Left the voice channel!';
    }

    await interaction.reply(response);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: 'Failed to leave the voice channel!',
      ephemeral: true,
    });
  }
}

```

### src/commands/ping.ts

```typescript
import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Shows bot status and latency information');

export async function execute(interaction: ChatInputCommandInteraction) {
  const sent = await interaction
    .reply({
      content: 'Pinging...',
    })
    .then((response) => response.fetch());

  const latency = sent.createdTimestamp - interaction.createdTimestamp;
  const wsLatency = interaction.client.ws.ping;
  const uptime = Math.floor(process.uptime());
  const memoryUsage = process.memoryUsage();

  const statusEmbed = {
    color: 0x0099ff,
    title: '🤖 Bot Status',
    fields: [
      {
        name: '📡 Latency',
        value: `
          • API Latency: ${latency}ms
          • WebSocket Latency: ${wsLatency}ms
        `.trim(),
        inline: true,
      },
      {
        name: '⚙️ System',
        value: `
          • Uptime: ${(uptime / 3600).toFixed(2)}h
          • Memory: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB
        `.trim(),
        inline: true,
      },
      {
        name: '🎙️ Voice',
        value: `
          • Connected Servers: ${interaction.client.voice?.adapters.size || 0}
          • Current Server: ${interaction.guild?.name || 'N/A'}
        `.trim(),
        inline: true,
      },
    ],
    timestamp: new Date().toISOString(),
  };

  await interaction.editReply({ content: '', embeds: [statusEmbed] });
}

```

### src/deploy-commands.ts

```typescript
import { REST, Routes } from 'discord.js';
import { config } from 'dotenv';
import * as fs from 'fs';

config();

// Load command files
const commandsPath = new URL('commands', import.meta.url).pathname;
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));

const commands = [];

// Load all commands
for (const file of commandFiles) {
  const filePath = new URL(`commands/${file}`, import.meta.url).href;
  const command = await import(filePath);
  if ('data' in command) {
    commands.push(command.data.toJSON());
  }
}

const rest = new REST().setToken(process.env.DISCORD_TOKEN!);

// Deploy commands
try {
  console.log('Started refreshing application (/) commands.');

  // For development, register commands to a specific guild (server)
  // This updates instantly unlike global commands which can take up to an hour
  await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID!, process.env.GUILD_ID!), {
    body: commands,
  });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}

```

### src/index.ts

```typescript
import { Client, Collection, Events, GatewayIntentBits, Interaction } from 'discord.js';
import { config } from 'dotenv';
import * as fs from 'fs';
import { setupAWSInfrastructure } from './services/aws-setup.js';

// Initialize dotenv
config();

// Initialize AWS Infrastructure
try {
  const awsInfra = await setupAWSInfrastructure();
  console.log('AWS Infrastructure initialized:', awsInfra);
} catch (error) {
  console.error('Failed to initialize AWS infrastructure:', error);
  process.exit(1);
}

import { SlashCommand } from './types/commands.js';

// Extend the Client type to include commands
declare module 'discord.js' {
  interface Client {
    commands: Collection<string, SlashCommand>;
  }
}

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Initialize commands collection
client.commands = new Collection();

// Load command files
const commandsPath = new URL('commands', import.meta.url).pathname;
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));

// Load all commands
const loadCommands = async () => {
  for (const file of commandFiles) {
    const filePath = new URL(`commands/${file}`, import.meta.url).href;
    const command = await import(filePath);

    if ('data' in command && 'execute' in command) {
      // Set just the command data and execute function
      client.commands.set(command.data.name, {
        data: command.data,
        execute: command.execute,
      });
    }
  }
};

// Load commands before logging in
await loadCommands();

// Handle interactions
client.on(Events.InteractionCreate, async (interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  // Let the command handle its own errors
  await command.execute(interaction).catch((error) => {
    console.error(`Error executing command ${interaction.commandName}:`, error);
  });
});

client.login(process.env.DISCORD_TOKEN);

```

### src/services/audioRecorder.ts

```typescript
import {
  joinVoiceChannel,
  getVoiceConnection,
  EndBehaviorType,
  VoiceConnectionStatus,
  entersState,
} from '@discordjs/voice';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import * as prism from 'prism-media';
import type { VoiceBasedChannel } from 'discord.js';
import type { VoiceRecordingSession, RecordingMetadata } from '../types/voice.js';
import { convertPcmToMp3 } from '../utils/audioProcessor.js';
import { uploadAudioToS3 } from './aws-setup.js';

export class AudioRecorder {
  private activeSessions: Map<string, VoiceRecordingSession> = new Map();

  async startRecording(
    voiceChannel: VoiceBasedChannel,
    campaignName?: string,
  ): Promise<VoiceRecordingSession> {
    const guildId = voiceChannel.guild.id;
    const sessionId = `${guildId}-${Date.now()}`;
    const outputFile = `./recordings/${sessionId}.pcm`;

    // Create recordings directory if it doesn't exist
    await import('fs/promises').then((fs) => fs.mkdir('./recordings', { recursive: true }));

    try {
      console.log(`[AudioRecorder] Attempting to join voice channel:`, {
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        channelName: voiceChannel.name,
      });

      // Join the voice channel
      const connection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator,
        selfDeaf: false,
      });

      console.log('[AudioRecorder] Voice connection created, waiting for ready state...');

      // Wait for the connection to be ready
      await entersState(connection, VoiceConnectionStatus.Ready, 20_000);
      console.log('[AudioRecorder] Voice connection is ready');

      // Handle disconnection
      connection.on(VoiceConnectionStatus.Disconnected, async () => {
        try {
          await Promise.race([
            entersState(connection, VoiceConnectionStatus.Signalling, 5_000),
            entersState(connection, VoiceConnectionStatus.Connecting, 5_000),
          ]);
          // Seems to be reconnecting to a new channel
        } catch (error: unknown) {
          // Seems to be a real disconnection
          console.error('Voice Connection disconnected:', error);
          connection.destroy();
          await this.stopRecording(guildId);
        }
      });

      // Create an audio receiver
      const receiver = connection.receiver;

      console.log('[AudioRecorder] Creating audio receiver...');

      // Add speaking event handlers for better debugging
      receiver.speaking.on('start', (userId) => {
        const user = voiceChannel.members.get(userId)?.user;
        console.log(`[AudioRecorder] User started speaking:`, {
          userId,
          username: user?.username,
          tag: user?.tag,
          timestamp: new Date().toISOString(),
        });
      });

      receiver.speaking.on('end', (userId) => {
        const user = voiceChannel.members.get(userId)?.user;
        console.log(`[AudioRecorder] User stopped speaking:`, {
          userId,
          username: user?.username,
          tag: user?.tag,
          timestamp: new Date().toISOString(),
        });
      });

      console.log('[AudioRecorder] Creating audio streams...');

      // Create a PCM stream for better audio quality with more detailed configuration
      const opusStream = receiver.subscribe('all', {
        end: {
          behavior: EndBehaviorType.AfterSilence,
          duration: 200, // Increased silence duration before ending
        },
        autoDestroy: false, // Prevent automatic destruction
      });
      console.log('[AudioRecorder] Opus stream created');

      // Add detailed data event logging for opus stream
      let opusDataCount = 0;
      opusStream.on('data', (chunk) => {
        opusDataCount++;
        if (opusDataCount % 100 === 0) {
          // Log every 100th chunk to avoid spam
          console.log(`[AudioRecorder] Opus data stats:`, {
            chunkSize: chunk.length,
            totalChunks: opusDataCount,
            streamDestroyed: opusStream.destroyed,
          });
        }
      });

      // Create a PCM stream that combines all speaking users with more detailed configuration
      const pcmStream = new prism.opus.Decoder({
        rate: 48000,
        channels: 2,
        frameSize: 960,
      });

      // Add error recovery for PCM stream
      pcmStream.on('close', () => {
        console.log('[AudioRecorder] PCM stream closed');
        if (!pcmStream.destroyed) {
          console.log('[AudioRecorder] Attempting to recover PCM stream...');
          pcmStream.resume();
        }
      });

      // Add detailed data event logging for PCM stream
      let pcmDataCount = 0;
      pcmStream.on('data', (chunk) => {
        pcmDataCount++;
        if (pcmDataCount % 100 === 0) {
          // Log every 100th chunk to avoid spam
          console.log(`[AudioRecorder] PCM data stats:`, {
            chunkSize: chunk.length,
            totalChunks: pcmDataCount,
            streamDestroyed: pcmStream.destroyed,
          });
        }
      });

      // Create file stream
      const fileStream = createWriteStream(outputFile, { flags: 'w' });

      // Add write event logging for file stream
      fileStream.on('write', (chunk) => {
        console.log(`[AudioRecorder] Wrote ${chunk.length} bytes to file`);
      });

      // Handle stream errors with more detailed logging
      opusStream.on('error', (error: Error) => {
        console.error('[AudioRecorder] Opus stream error:', error);
        console.error('[AudioRecorder] Stack trace:', error.stack);
        this.stopRecording(guildId).catch(console.error);
      });

      pcmStream.on('error', (error: Error) => {
        console.error('[AudioRecorder] PCM stream error:', error);
        console.error('[AudioRecorder] Stack trace:', error.stack);
        this.stopRecording(guildId).catch(console.error);
      });

      fileStream.on('error', (error: Error) => {
        console.error('[AudioRecorder] File stream error:', error);
        console.error('[AudioRecorder] Stack trace:', error.stack);
        this.stopRecording(guildId).catch(console.error);
      });

      // Add end event handlers for better debugging
      opusStream.on('end', () => console.log('[AudioRecorder] Opus stream ended'));
      pcmStream.on('end', () => console.log('[AudioRecorder] PCM stream ended'));
      fileStream.on('finish', () => console.log('[AudioRecorder] File stream finished'));

      const session: VoiceRecordingSession = {
        guildId,
        channelId: voiceChannel.id,
        sessionId,
        campaignName,
        startTime: new Date(),
        participants: [],
        audioStream: opusStream,
        fileWriter: fileStream,
      };

      this.activeSessions.set(guildId, session);

      console.log('[AudioRecorder] Setting up audio pipeline...');
      // Set up pipeline with proper error handling for voice disconnection
      const pipelinePromise = pipeline(opusStream, pcmStream, fileStream);

      // Handle pipeline completion/errors without throwing
      pipelinePromise.catch((error: unknown) => {
        if (
          error instanceof Error &&
          (error as NodeJS.ErrnoException).code === 'ERR_STREAM_PREMATURE_CLOSE'
        ) {
          console.log('[AudioRecorder] Pipeline closed due to voice disconnection');
        } else {
          console.error('[AudioRecorder] Pipeline error:', error);
          if (error instanceof Error) {
            console.error('[AudioRecorder] Stack trace:', error.stack);
          }
          console.error('[AudioRecorder] Pipeline state:', {
            opusStreamDestroyed: opusStream.destroyed,
            pcmStreamDestroyed: pcmStream.destroyed,
            fileStreamClosed: fileStream.closed,
          });
        }
      });

      console.log('[AudioRecorder] Audio pipeline established');
      console.log('[AudioRecorder] Recording to file:', outputFile);

      // Add cleanup handler for voice connection
      connection.on(VoiceConnectionStatus.Destroyed, () => {
        console.log('[AudioRecorder] Voice connection destroyed, closing streams...');
        if (!fileStream.closed) {
          fileStream.end();
        }
      });

      // Listen for speaking events to track participants
      receiver.speaking.on('start', (userId) => {
        const session = this.activeSessions.get(guildId);
        if (session && !session.participants.includes(userId)) {
          const user = voiceChannel.members.get(userId)?.user;
          session.participants.push(userId);
          console.log(`[AudioRecorder] New participant speaking:`, {
            userId,
            username: user?.username,
            tag: user?.tag,
            timestamp: new Date().toISOString(),
          });
        }
      });

      console.log('[AudioRecorder] Recording session started:', {
        sessionId,
        channelName: voiceChannel.name,
        guildId: voiceChannel.guild.id,
        campaignName: campaignName || 'Not specified',
      });

      return session;
    } catch (error: unknown) {
      console.error('[AudioRecorder] Error starting recording:', error);
      if (error instanceof Error) {
        console.error('[AudioRecorder] Stack trace:', error.stack);
      }
      throw error;
    }
  }

  async stopRecording(guildId: string): Promise<RecordingMetadata | null> {
    const session = this.activeSessions.get(guildId);
    if (!session) return null;

    console.log(`[AudioRecorder] Stopping recording for session ${session.sessionId}`);

    try {
      // Gracefully close streams
      try {
        // First end the file writer if it's not closed
        if (!session.fileWriter.closed) {
          await new Promise<void>((resolve, reject) => {
            session.fileWriter.once('finish', () => {
              console.log('[AudioRecorder] File writer finished');
              resolve();
            });
            session.fileWriter.once('error', (err) => {
              console.error('[AudioRecorder] File writer error:', err);
              reject(err);
            });
            session.fileWriter.end();
          });
        }

        // Then destroy the voice connection
        const connection = getVoiceConnection(guildId);
        if (connection) {
          console.log('[AudioRecorder] Destroying voice connection');
          connection.destroy();
        }

        // Finally destroy the audio stream if needed
        if (!session.audioStream.destroyed) {
          session.audioStream.destroy();
          console.log('[AudioRecorder] Audio stream destroyed');
        }

        // Wait a moment for any cleanup to complete
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (error: unknown) {
        console.error('[AudioRecorder] Error during stream cleanup:', error);
        if (error instanceof Error) {
          console.error('[AudioRecorder] Stack trace:', error.stack);
        }
        // Continue with metadata collection even if stream cleanup fails
      }

      // Get file stats
      const stats = await import('fs/promises').then((fs) =>
        fs.stat(`./recordings/${session.sessionId}.pcm`),
      );

      // Convert PCM to MP3
      const pcmPath = `./recordings/${session.sessionId}.pcm`;
      const mp3Path = `./recordings/${session.sessionId}.mp3`;

      console.log('[AudioRecorder] Converting PCM to MP3...');
      await convertPcmToMp3(pcmPath, mp3Path);

      // Upload MP3 to S3
      console.log('[AudioRecorder] Uploading MP3 to S3...');
      const s3Key = await uploadAudioToS3(
        mp3Path,
        `${session.sessionId}.mp3`,
        process.env.PROJECT_NAME + '-audio-input',
      );

      // Clean up temporary files
      console.log('[AudioRecorder] Cleaning up temporary files...');
      await import('fs/promises').then(async (fs) => {
        try {
          await fs.unlink(pcmPath);
          await fs.unlink(mp3Path);
          console.log('[AudioRecorder] Temporary files cleaned up successfully');
        } catch (error) {
          console.error('[AudioRecorder] Error cleaning up temporary files:', error);
          // Continue even if cleanup fails
        }
      });

      const metadata: RecordingMetadata = {
        sessionId: session.sessionId,
        campaignName: session.campaignName,
        startTime: session.startTime,
        endTime: new Date(),
        participants: session.participants,
        fileSize: stats.size,
        duration: (new Date().getTime() - session.startTime.getTime()) / 1000,
        s3Key,
      };

      this.activeSessions.delete(guildId);
      console.log('[AudioRecorder] Recording stopped and uploaded successfully');

      return metadata;
    } catch (error: unknown) {
      console.error('[AudioRecorder] Error stopping recording:', error);
      if (error instanceof Error) {
        console.error('[AudioRecorder] Stack trace:', error.stack);
      }
      throw error;
    }
  }

  getActiveSession(guildId: string): VoiceRecordingSession | undefined {
    return this.activeSessions.get(guildId);
  }
}

```

### src/services/aws-setup.ts

```typescript
import {
  S3Client,
  CreateBucketCommand,
  PutBucketPolicyCommand,
  PutObjectCommand,
  BucketLocationConstraint,
} from '@aws-sdk/client-s3';
import { createReadStream } from 'fs';
import {
  TranscribeClient,
  StartTranscriptionJobCommand,
  LanguageCode,
} from '@aws-sdk/client-transcribe';

// Initialize AWS clients
const s3Client = new S3Client({ region: process.env.AWS_REGION });
const transcribeClient = new TranscribeClient({ region: process.env.AWS_REGION });

interface BucketNames {
  input: string;
  output: string;
}

// Helper function to create a single bucket with retries
async function createBucketWithRetry(bucketName: string, maxRetries = 5): Promise<void> {
  let attempt = 0;
  const baseDelay = 5000; // Start with 5 second delay

  while (attempt < maxRetries) {
    try {
      await s3Client.send(
        new CreateBucketCommand({
          Bucket: bucketName,
          CreateBucketConfiguration: {
            LocationConstraint: process.env.AWS_REGION as BucketLocationConstraint,
          },
        }),
      );
      console.log(`Created bucket: ${bucketName}`);
      return;
    } catch (error: any) {
      if (error.Code === 'BucketAlreadyOwnedByYou') {
        console.log(`Using existing bucket: ${bucketName}`);
        return;
      }

      if (error.Code === 'OperationAborted') {
        attempt++;
        if (attempt < maxRetries) {
          const delay = baseDelay * Math.pow(2, attempt - 1); // Exponential backoff
          console.log(
            `Bucket creation aborted, retrying in ${
              delay / 1000
            } seconds... (Attempt ${attempt}/${maxRetries})`,
          );
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }
      }

      throw error;
    }
  }

  throw new Error(`Failed to create bucket ${bucketName} after ${maxRetries} attempts`);
}

// Create S3 buckets for audio input and transcription output
async function createS3Buckets(): Promise<BucketNames> {
  const bucketNames = {
    input: `${process.env.PROJECT_NAME}-audio-input`,
    output: `${process.env.PROJECT_NAME}-transcription-output`,
  };

  try {
    // Create buckets with retry logic
    await createBucketWithRetry(bucketNames.input);
    await createBucketWithRetry(bucketNames.output);

    // Set bucket policies for Transcribe access
    const inputBucketPolicy = {
      Version: '2012-10-17',
      Statement: [
        {
          Sid: 'TranscribeGetAccess',
          Effect: 'Allow',
          Principal: {
            Service: 'transcribe.amazonaws.com',
          },
          Action: ['s3:GetObject'],
          Resource: [`arn:aws:s3:::${bucketNames.input}/*`],
        },
      ],
    };

    const outputBucketPolicy = {
      Version: '2012-10-17',
      Statement: [
        {
          Sid: 'TranscribePutAccess',
          Effect: 'Allow',
          Principal: {
            Service: 'transcribe.amazonaws.com',
          },
          Action: ['s3:PutObject'],
          Resource: [`arn:aws:s3:::${bucketNames.output}/*`],
        },
      ],
    };

    await s3Client.send(
      new PutBucketPolicyCommand({
        Bucket: bucketNames.input,
        Policy: JSON.stringify(inputBucketPolicy),
      }),
    );

    await s3Client.send(
      new PutBucketPolicyCommand({
        Bucket: bucketNames.output,
        Policy: JSON.stringify(outputBucketPolicy),
      }),
    );

    console.log('S3 buckets created successfully');
    return bucketNames;
  } catch (error) {
    console.error('Error creating S3 buckets:', error);
    throw error;
  }
}

// Get the current user's ARN
async function getCurrentUserArn(): Promise<string> {
  // Since we already have access to S3 and Transcribe, we'll use the credentials
  // that were provided in the environment variables
  return `arn:aws:iam::070195441517:user/dnd-scribe-bot`;
}

// Function to test transcription setup
async function testTranscriptionSetup(inputBucket: string, outputBucket: string): Promise<void> {
  try {
    // Create a dummy test file (1 second of silence in base64)
    const testAudioBase64 =
      'SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAFbgCenp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6e//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAYAAAAAAAAABW7gxbmvAAAAAAAAAAAAAAAAAAAA//sQZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
    const testAudioBuffer = Buffer.from(testAudioBase64, 'base64');

    // Upload test audio file to S3
    await s3Client.send(
      new PutObjectCommand({
        Bucket: inputBucket,
        Key: 'test-audio.mp3',
        Body: testAudioBuffer,
        ContentType: 'audio/mpeg',
      }),
    );
    console.log('Uploaded test audio file to S3');

    // Start transcription job
    const transcriptionJob = {
      TranscriptionJobName: `test-job-${Date.now()}`,
      LanguageCode: LanguageCode.EN_US,
      Media: {
        MediaFileUri: `s3://${inputBucket}/test-audio.mp3`,
      },
      OutputBucketName: outputBucket,
    };

    await transcribeClient.send(new StartTranscriptionJobCommand(transcriptionJob));
    console.log('Transcription test job started successfully');
  } catch (error) {
    console.error('Error testing transcription setup:', error);
    throw error;
  }
}

interface AWSInfrastructure {
  inputBucket: string;
  outputBucket: string;
  userArn: string;
}

// Main setup function
// Upload audio file to S3
export async function uploadAudioToS3(
  filePath: string,
  fileName: string,
  bucket: string,
): Promise<string> {
  try {
    console.log(`[AWS] Uploading audio file to S3: ${fileName}`);
    const fileStream = createReadStream(filePath);
    const s3Key = `recordings/${fileName}`;

    await s3Client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: s3Key,
        Body: fileStream,
        ContentType: 'audio/mpeg',
      }),
    );

    console.log(`[AWS] Successfully uploaded audio file to S3: ${s3Key}`);
    return s3Key;
  } catch (error) {
    console.error('[AWS] Error uploading audio file to S3:', error);
    throw error;
  }
}

// Start a transcription job
export async function startTranscriptionJob(
  s3Key: string,
  inputBucket: string,
  outputBucket: string,
  sessionId: string,
): Promise<void> {
  try {
    console.log(`[AWS] Starting transcription job for: ${s3Key}`);

    const transcriptionJob = {
      TranscriptionJobName: `session-${sessionId}`,
      LanguageCode: LanguageCode.EN_US,
      Media: {
        MediaFileUri: `s3://${inputBucket}/${s3Key}`,
      },
      OutputBucketName: outputBucket,
      Settings: {
        ShowSpeakerLabels: true,
        MaxSpeakerLabels: 10,
      },
    };

    await transcribeClient.send(new StartTranscriptionJobCommand(transcriptionJob));
    console.log(`[AWS] Transcription job started successfully: session-${sessionId}`);
  } catch (error) {
    console.error('[AWS] Error starting transcription job:', error);
    throw error;
  }
}

export async function setupAWSInfrastructure(): Promise<AWSInfrastructure> {
  try {
    const buckets = await createS3Buckets();
    const userArn = await getCurrentUserArn();
    await testTranscriptionSetup(buckets.input, buckets.output);

    return {
      inputBucket: buckets.input,
      outputBucket: buckets.output,
      userArn,
    };
  } catch (error) {
    console.error('Error setting up AWS infrastructure:', error);
    throw error;
  }
}

```

### src/types/commands.ts

```typescript
import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

export interface SlashCommand {
  data: SlashCommandBuilder;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}

```

### src/types/discord.ts

```typescript
import { Collection } from 'discord.js';
import { SlashCommand } from './commands.js';

declare module 'discord.js' {
  export interface Client {
    commands: Collection<string, SlashCommand>;
  }
}

```

### src/types/voice.ts

```typescript
export interface VoiceRecordingSession {
  guildId: string;
  channelId: string;
  sessionId: string;
  campaignName?: string;
  startTime: Date;
  participants: string[];
  audioStream: import('stream').Readable;
  fileWriter: import('fs').WriteStream;
}

export interface RecordingMetadata {
  sessionId: string;
  campaignName?: string;
  startTime: Date;
  endTime: Date;
  participants: string[];
  fileSize: number;
  duration: number;
  s3Key: string; // Location of the audio file in S3
}

```

### src/utils/audioProcessor.ts

```typescript
import { spawn } from 'child_process';
import ffmpeg from '@ffmpeg-installer/ffmpeg';

export async function convertPcmToMp3(inputPath: string, outputPath: string): Promise<void> {
  try {
    console.log('[AudioProcessor] Starting PCM to MP3 conversion...');

    // Create FFmpeg process for conversion
    const ffmpegProcess = spawn(ffmpeg.path, [
      '-f',
      's16le', // Input format: signed 16-bit little-endian
      '-ar',
      '48000', // Sample rate: 48kHz
      '-ac',
      '2', // Audio channels: 2 (stereo)
      '-i',
      inputPath, // Input file
      '-c:a',
      'libmp3lame', // MP3 codec
      '-b:a',
      '128k', // Bitrate: 128kbps
      outputPath, // Output file
    ]);

    // Add error handlers
    ffmpegProcess.stderr.on('data', (data) => {
      console.log(`[AudioProcessor] FFmpeg: ${data}`);
    });

    // Wait for FFmpeg to finish
    await new Promise<void>((resolve, reject) => {
      ffmpegProcess.on('close', (code) => {
        if (code === 0) {
          console.log('[AudioProcessor] PCM to MP3 conversion completed successfully');
          resolve();
        } else {
          reject(new Error(`FFmpeg process exited with code ${code}`));
        }
      });

      ffmpegProcess.on('error', (error) => {
        console.error('[AudioProcessor] FFmpeg process error:', error);
        reject(error);
      });
    });
  } catch (error) {
    console.error('[AudioProcessor] Error converting PCM to MP3:', error);
    throw error;
  }
}

```

### src/utils/generateDocs.ts

```typescript
import fs from 'fs';
import path from 'path';

// Function to create a file tree structure
function generateFileTree(dir: string, prefix = ''): string {
  let output = '';
  const items = fs.readdirSync(dir);

  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);

    // Add the current item to the tree
    output += `${prefix}${isLast ? '└── ' : '├── '}${item}\n`;

    // If it's a directory, recurse into it
    if (stats.isDirectory()) {
      output += generateFileTree(itemPath, prefix + (isLast ? '    ' : '│   '));
    }
  });

  return output;
}

// Function to read file contents
function readFileContents(filePath: string): string {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error: unknown) {
    if (error instanceof Error) {
      return `Error reading file: ${error.message}`;
    }
    return 'Error reading file: Unknown error occurred';
  }
}

// Function to recursively get all TypeScript files
function getTypeScriptFiles(dir: string): string[] {
  let files: string[] = [];
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      files = files.concat(getTypeScriptFiles(fullPath));
    } else if (item.endsWith('.ts')) {
      files.push(fullPath);
    }
  });

  return files;
}

// Main documentation generation function
async function generateDocumentation() {
  // Create docs directory if it doesn't exist
  const docsDir = path.join(process.cwd(), 'docs');
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir);
  }

  let documentation = '';

  // Add project name and description
  documentation += '# DND Scribe Documentation\n\n';

  // Add file tree
  documentation += '## Project Structure\n\n```\n';
  documentation += generateFileTree(process.cwd());
  documentation += '```\n\n';

  // Add package.json contents
  documentation += '## Package.json\n\n```json\n';
  documentation += readFileContents(path.join(process.cwd(), 'package.json'));
  documentation += '\n```\n\n';

  // Add source code files
  documentation += '## Source Code\n\n';
  const sourceFiles = getTypeScriptFiles(path.join(process.cwd(), 'src'));

  sourceFiles.forEach((file) => {
    const relativePath = path.relative(process.cwd(), file);
    documentation += `### ${relativePath}\n\n\`\`\`typescript\n`;
    documentation += readFileContents(file);
    documentation += '\n```\n\n';
  });

  // Write the documentation file
  fs.writeFileSync(path.join(docsDir, 'documentation.md'), documentation);

  console.log('Documentation generated successfully in docs/documentation.md');
}

// Execute the documentation generation
generateDocumentation().catch(console.error);

```

