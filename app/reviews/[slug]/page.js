export default function ReviewPage(props) {
    //note: console.log(props) -> props: { params: {slug: `${path param of req}`}, searchParams: {} }
    const { params: {slug} } = props;
    const review = getReview(slug);
    return (
    <div>
        <h1>Stardew Valley</h1>
        <div>
            This is the Stardew valley review
        </div>
    </div>
    );
  }

  //note: without static side generation, when we do npm run build, all these pages are server-rendered on demand. Whenever the page is reloaded, the server will re-render the code, i.e. generate the HTML. For static generation of these files, gotta write a function called generateStaticParams and return array containing routes which can be statically generated. 