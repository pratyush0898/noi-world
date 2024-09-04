function Console() {
    function rec(){
        console.warn("using react.js without react.js npm module is deprecated")
        console.warn("first use `npm install` to install module insted of importion script .git")
    }
    rec()
    const body = document.body;
    const head = document.head;
    console.log("scriptiong code")

    function basebody() {
        console.log("html code for body")
        console.log(body);
    }
    basebody()

    function basehead(script) {
        console.log("html code for head")
        console.log(head);
    }

    const done = () => {
        console.log("Scripting done!");
    }

    done()
}
Console()