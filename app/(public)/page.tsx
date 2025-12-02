import Hero from "./_sections/hero";
import Features from "./_sections/features";
import PopularCourses from "./_sections/popular-courses";
import PopularCategories from "./_sections/popular-categories";
import Testimonials from "./_sections/testimonials";
import FAQ from "./_sections/faq";
async function HomePage() {
  // const session = await getServerSession();
  return (
    <div>
      <Hero />
      <Features />
      <PopularCourses />
      <PopularCategories />
      <Testimonials />
      <FAQ />

      {/* <p>{JSON.stringify(session?.user)}</p> */}
    </div>
  );
}

export default HomePage;

// Structure
/**
 * ************* Public Route ***********************
 * <public>
 *   <header></header> => client //--header fetches auth data on client side
 *   <main> => server
 *      <section></section> => client
 *   </main>
 *   <Footer></Footer> => client
 * </public>
 *
 * ************* Admin Route **************************
 *
 * <admin>
 *   <sidebarprovider>
 *     <sidebar></sidebar>
 *     <sidebarinset>
 *        {children}
 *     </sidebarinset>
 *   </sidebarprovider>
 * </admin>
 */
