import { assert } from "@dmail/assert"
import { generateImportMapForProjectPackage } from "../../../index.js"
import { importMetaURLToFolderPath } from "../../importMetaUrlToFolderPath.js"

const testFolderPath = importMetaURLToFolderPath(import.meta.url)
const importMap = await generateImportMapForProjectPackage({
  projectPath: testFolderPath,
})

const actual = importMap
const expected = {
  imports: {
    "foo/": "./node_modules/foo/",
    foo: "./node_modules/foo/index.js",
  },
  scopes: {},
}
assert({ actual, expected })