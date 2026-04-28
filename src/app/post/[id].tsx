import PostNavigation from "@/components/PostNavigation";

export default function Page() {
  return (
    <>
      <section className="w-full max-w-2xl mx-auto px-4 mb-20">
        <h2 className="mb-12 text-3xl text-center md:text-5xl">Título do Post</h2>

        <p className="mb-6 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus alias eum facere quo dolor blanditiis velit commodi obcaecati et.</p>

        <article className="flex flex-col gap-4 font-light text-wrapper">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente eius nobis non, aspernatur inventore sequi magni quibusdam officia aliquid, veniam vero facilis nihil, obcaecati doloremque nam praesentium vel odit.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente eius nobis non, aspernatur inventore sequi magni quibusdam officia aliquid, veniam vero facilis nihil, <a href="#">obcaecati doloremque</a> nam praesentium vel odit.</p>
          <ul>
            <li>Topic</li>
            <li>Topic</li>
            <li>Topic</li>
            <li>Topic</li>
          </ul>
          <ol>
            <li>Topic</li>
            <li>Topic</li>
            <li>Topic</li>
            <li>Topic</li>
          </ol>
        </article>
      </section>

      <section className="w-full max-w-216 mx-auto px-4 mb-20 grid md:grid-cols-2">

        <PostNavigation
          title="Lorem ipsum dolor sit amet."
          navDirection="previous" />

        <PostNavigation
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eos accusantium. Non."
          navDirection="next" />
      </section>
    </>
  );
}
