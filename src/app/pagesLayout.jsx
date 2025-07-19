import "@/app/globals.css"; // Import global styles

const pagesLayout = ({ children }) => {
  return (
    <section className="flex justify-center flex-col items-center w-full p-5 pt-32 pb-20">
      <article className="flex justify-center flex-col items-center w-[100%] min-[1150px]:w-[1100px] min-[450px]:w-[80%] min-[768px]:w-full">
        {children}
      </article>
    </section>
  );
};

export default pagesLayout;
