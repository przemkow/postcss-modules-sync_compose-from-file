# postcss-modules-sync compose from file issue:

**Step to reproduce:** 
1. Go to index.js
2. Uncomment line `3 const postcssModules = require("postcss-modules-sync").default`
3. Comment out line `4 const postcssModules = require("postcss-modules")`
4. Try to compile styles `npm run build`

**Expected behaviour:**   
Styles are compiled correctly when `composes` use class from separate file.

**Current behaviour:**   
CssSyntaxError: _path_in_filesystem_  referenced class name "title" in composes not found

**Additional info:**   
Styles are compiled correctly when `postcss-modules` (async compilation) is used.
