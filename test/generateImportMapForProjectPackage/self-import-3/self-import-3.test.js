import { assert } from "@jsenv/assert"
import { resolveUrl } from "@jsenv/util"
import { generateImportMapForProjectPackage } from "../../../index.js"

const testDirectoryUrl = resolveUrl("./", import.meta.url)

const actual = await generateImportMapForProjectPackage({
  projectDirectoryUrl: testDirectoryUrl,
  selfImport: true,
})
const expected = {
  imports: {
    "root/boo": "./lib/boo.js",
    "foo/bar": "./node_modules/foo/src/bar.js",
    "root/": "./",
    "foo/": "./node_modules/foo/",
    "foo": "./node_modules/foo/index",
  },
  scopes: {},
}
assert({ actual, expected })
