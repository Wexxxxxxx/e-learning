import { useState, useEffect } from "react";
import axios from "axios";
import API_LINK from "../API";

function Temporary() {
  const [all, setAll] = useState([]);

  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(API_LINK);

      setAll(res.data);
    };

    fetchData();
  }, []);

  const handleSearch = async (e) => {
    try {
      e.preventDefault();

      const id = info._id;

      const result = await axios.get(`${API_LINK}/${id}`);

      setInfo(result.data);
    } catch (e) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();

      const id = info._id;

      const result = await axios.patch(`${API_LINK}/${id}`, info);

      console.log(result);
    } catch (e) {
      console.log(err);
    }
  };

  const handleDelete = async (e) => {
    try {
      e.preventDefault();

      const id = info._id;

      const result = await axios.delete(`${API_LINK}/${id}`);

      console.log(result);
    } catch (e) {
      console.log(err);
    }
  };

  const handleAdd = async (e) => {
    try {
      const result = await axios.post(API_LINK, info);

      console.log(result);
    } catch (e) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,

      [e.target.name]: e.target.value,
    }));
  };

  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <div className="bg-[url('/official.png')] h-screen bg-cover bg-no-repeat">
      <div className="flex flex-col justify-center items-center text-center p-2 bg-cyan-600 text-2 text-black tracking-widest">
        <h1>WELCOME TO OUR DATABASE WE ARE HAPPY TO TEACH YOU {currentTime}</h1>
      </div>

      {/* SIDEBAR  */}
      <div>
        <>
          {/* Navigation Toggle */}
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#docs-sidebar"
            aria-controls="docs-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="flex-shrink-0 w-4 h-4"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          {/* End Navigation Toggle */}
          <div
            id="docs-sidebar"
            className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-cyan-600 border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 "
          >
            <div className="px-16">
              <a
                className="flex-none text-xl font-semibold dark:text-white"
                href="#"
                aria-label="Brand"
              >
                E-Learning
              </a>
            </div>
            <nav
              className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open=""
            >
              <ul className="space-y-1.5">
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-slate-700 rounded-lg hover:bg-amber-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Dashboard
                  </a>
                </li>
                {/* END OF DASHBOARD */}

                {/* USER */}
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-slate-700 rounded-lg hover:bg-amber-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx={9} cy={7} r={4} />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    User
                  </a>
                </li>

                {/* EBND OF USER */}

                {/* START OF ACCOUNT */}

                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-slate-700 rounded-lg hover:bg-amber-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={18} cy={15} r={3} />
                      <circle cx={9} cy={7} r={4} />
                      <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                      <path d="m21.7 16.4-.9-.3" />
                      <path d="m15.2 13.9-.9-.3" />
                      <path d="m16.6 18.7.3-.9" />
                      <path d="m19.1 12.2.3-.9" />
                      <path d="m19.6 18.7-.4-1" />
                      <path d="m16.8 12.3-.4-1" />
                      <path d="m14.3 16.6 1-.4" />
                      <path d="m20.7 13.8 1-.4" />
                    </svg>
                    Account
                  </a>
                </li>
                {/* END OF ACCOUNT */}

                {/* START OF  */}

                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-slate-700 rounded-lg hover:bg-amber-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx={9} cy={7} r={4} />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    User
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </>
        {/* END OF SIDEBAR */}

        <div className="flex flex-col sm:ml-[20px] sm:mr-[20px] md:ml-[20px] md:mr-[20px] lg:ml-[270px] lg:mr-3 xl:ml-[270px] xl:mr-4 ml-[20px] mr-[20px] mt-52 py-12 px-5 rounded-xl bg-cyan-600">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <div className="flex-flex-col justify-center items-center py-3  mt-2 rounded-lg  bg-cyan-500 ">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Age
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Address
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          John Brown
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          45
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          New York No. 1 Lake Park
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Jim Green
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          27
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          London No. 1 Lake Park
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Joe Black
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          31
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          Sidney No. 1 Lake Park
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Edward King
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          16
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          LA No. 1 Lake Park
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Jim Red
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          45
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          Melbourne No. 1 Lake Park
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END OF TABLE */}
      </div>
    </div>
  );
}

export default Temporary;
