'use client'

const ShareLinkButton = () => {
    const copyPageUrl = () => {
        const linkToShare = window.location.href;
        navigator.clipboard.writeText(linkToShare);
    }
    //note: event handlers is a client component thing.
    return (
        <button onClick={copyPageUrl}>
            Share Link
        </button>
    )
}

export default { ShareLinkButton }

//note: hydration is merging the component on the server-side HTML after the client-side rendering with JS code.

//note: SSR AND CSR:
    //SSR: The server generates the HTML content for the page on each request.
    //This fully rendered HTML is sent to the browser.
    //The browser displays the HTML to the user as soon as it receives it.
    //JavaScript can be loaded and executed afterward to add interactivity (hydration).

    //CSR: The server sends a minimal HTML shell and JavaScript bundles to the browser.
    //The browser downloads and executes the JavaScript, which generates the HTML content dynamically on the client side.
    //This often involves fetching additional data and updating the DOM as needed.