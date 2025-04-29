import Footer from "components/footer/FooterAuthDefault";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import routes from "routes.js";
import "../../index.css"
import logo from "assets/img/layout/logo.jpg"

export default function Auth() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  document.documentElement.dir = "ltr";
  return (
    <div>
      <div className="relative float-right h-full min-h-screen w-full !bg-pink-100 page-bg dark:!bg-navy-900 sgv-bg">

        <main className={`mx-auto min-h-screen`}>
          <div className="relative flex">
            <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%]  lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:min-h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
              <div className="mb-auto flex flex-col pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
                <Link to="/admin" className="w-max lg:pt-3">
                  <div className="mx-auto flex h-fit w-fit items-center hover:cursor-pointer">
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.70994 2.11997L2.82994 5.99997L6.70994 9.87997C7.09994 10.27 7.09994 10.9 6.70994 11.29C6.31994 11.68 5.68994 11.68 5.29994 11.29L0.709941 6.69997C0.319941 6.30997 0.319941 5.67997 0.709941 5.28997L5.29994 0.699971C5.68994 0.309971 6.31994 0.309971 6.70994 0.699971C7.08994 1.08997 7.09994 1.72997 6.70994 2.11997V2.11997Z"
                        fill="#9D174D"
                      />
                    </svg>
                    <p className="ml-3 text-sm text-pink-800">
                      volver a la página principal
                    </p>
                  </div>
                </Link>
                <div className='flex w-full items-center justify-center px-2 mx-0 px-0'>
                    <img 
                      className="h-40 w-40 rounded-full lg:h-40 lg:w-40 md:h-20 md:w-20 sm:h-20 sm:w-20"
                      src={logo} 
                      alt="logo de la página" />
                      <div className="ml-1 font-poppins text-[40px] font-bold uppercase text-pink-700 dark:text-white">
                      Caserito <span class="font-medium">Postres</span>
                    </div>
                  </div>
                <Routes>
                  {getRoutes(routes)}
                  <Route
                    path="/"
                    element={<Navigate to="/auth/sign-in" replace />}
                  />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
