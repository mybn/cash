
// @require ./variables.ts

function find ( selector: string, context: Ele ): ArrayLike<Element> {

  return !selector || ( !isDocument ( context ) && !isElement ( context ) )
           ? []
           : classRe.test ( selector )
             ? context.getElementsByClassName ( selector.slice ( 1 ) )
             : tagRe.test ( selector )
               ? context.getElementsByTagName ( selector )
               : context.querySelectorAll ( selector );

}
