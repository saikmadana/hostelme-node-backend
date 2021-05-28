**Dev guidelines:**
- HTML block-level comments must be there
- For new component, the parent element must be `section` tag with component representing the class name
- For CSS, we must follow BEM styling guidelines
- Common styles, place in common.scss
- For CSS common style values, use variables
- In TS, function level comments must
- In TS, for code whenever there is a need for comments we must write
- When we take/copy code from external resources, we must provide a reference link as
    ref: `http://referenceurl` in the comments
- Whenever we write TODO, we must include our name with it as TODO@sai
- constants names should be the upper case with `_` as a delimiter
- wrap :ng-deep in a class

**GIT guidelines:**
- Every morning before starting work, we must rebase with dev/master branch
- We should do small and frequent commits
- Every commit must have commit message along with type and module name
    {feature/fixes/common} / {modules/build} / {intent}
- Before leaving we must commit and push the code(If work is in progress, commit with inprogress trail message)
- Before pushing the code to any branch, we must run `ng build --prod`
- Never push directly to dev/master branch
- Branch naming:
    `{feature/fixes/common} / {modules/build} / {intent}`