import React from "react";

function UserList() {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-screen-md px-10 py-6 mx-4 mt-20 bg-white rounded-lg shadow md:mx-auto border-1">
        <div className="flex flex-col items-start w-full m-auto md:flex-row">
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <div className="flex justify-between items-center pb-4 bg-white dark:bg-gray-900">

              <label for="table-search" className="sr-only ">
                Search
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search-users"
                  className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 /dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for users"
                />
              </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Position
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Status
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                    />
                    <div className="pl-3">
                      <div className="text-base font-semibold">Neil Sims</div>
                      <div className="font-normal text-gray-500">
                        neil.sims@flowbite.com
                      </div>
                    </div>
                  </th>
                  <td className="py-4 px-6">React Developer</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                      Online
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit user
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-2"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-2" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="/docs/images/people/profile-picture-3.jpg"
                      alt="Jese image"
                    />
                    <div className="pl-3">
                      <div className="text-base font-semibold">Bonnie Green</div>
                      <div className="font-normal text-gray-500">
                        bonnie@flowbite.com
                      </div>
                    </div>
                  </th>
                  <td className="py-4 px-6">Designer</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                      Online
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit user
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-2"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-2" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="/docs/images/people/profile-picture-2.jpg"
                      alt="Jese image"
                    />
                    <div className="pl-3">
                      <div className="text-base font-semibold">Jese Leos</div>
                      <div className="font-normal text-gray-500">
                        jese@flowbite.com
                      </div>
                    </div>
                  </th>
                  <td className="py-4 px-6">Vue JS Developer</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                      Online
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit user
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-2"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-2" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="/docs/images/people/profile-picture-5.jpg"
                      alt="Jese image"
                    />
                    <div className="pl-3">
                      <div className="text-base font-semibold">Thomas Lean</div>
                      <div className="font-normal text-gray-500">
                        thomes@flowbite.com
                      </div>
                    </div>
                  </th>
                  <td className="py-4 px-6">UI/UX Engineer</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                      Online
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit user
                    </a>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-3"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-3" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="/docs/images/people/profile-picture-4.jpg"
                      alt="Jese image"
                    />
                    <div className="pl-3">
                      <div className="text-base font-semibold">
                        Leslie Livingston
                      </div>
                      <div className="font-normal text-gray-500">
                        leslie@flowbite.com
                      </div>
                    </div>
                  </th>
                  <td className="py-4 px-6">SEO Specialist</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>{" "}
                      Offline
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit user
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
