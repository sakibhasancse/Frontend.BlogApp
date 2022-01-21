import React from 'react';
import { ArrowRight } from 'react-feather';
import { Link } from 'react-router-dom';

const Pagination = () => (
  <div>
    {/* <div className="w-full flex pt-6">
                <a className="w-1/2 bg-white shadow hover:shadow-md text-left p-6">
                    <p className="text-lg text-blue-800 font-bold flex items-center"><ArrowLeft /> Previous</p>
                    <p class="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
              </a>
                 <a className="w-1/2 bg-white shadow hover:shadow-md text-right p-6">
                    <p class="text-lg text-blue-800 font-bold flex items-center justify-end"><ArrowRight /> Next</p>
                    <p class="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
              </a>

            </div> */}
    <div className="flex items-center py-8">
      <Link
        to="/"
        className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"
      >
        1
      </Link>
      <Link
        to="/"
        className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
      >
        2
      </Link>
      <Link
        to="/"
        className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
      >
        Next <ArrowRight />
      </Link>
    </div>
  </div>
);

export default Pagination