import { Fragment } from 'react';
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
  UserPlusIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import { Menu, Transition } from '@headlessui/react';

import styles from './InvitationRequest.module.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function InvitationRequest() {
  return (
    <>
      {/* <div className={`   ${styles['invitation-container']}`}>
        <h1>Med Amine Gdoura</h1>
        <div className="">
          <UserPlusIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
          sent you a friend request
        </div>

        <div className=" flex ">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Accept
          </button>

          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <XMarkIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Decline
          </button>
        </div>
      </div> */}

      <div
        className={` sidebar  ${styles['invitation-container']}`}
        // key={data.id}
      >
        <h2 className={`text-3xl font-bold leading-7 text-gray-900  ${styles['name']}`}>Med Amine Gdoura </h2>

        <div className="mt-2 flex items-center text-sm text-gray-500">
          <UserPlusIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
          sent you a friend request
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          <button
            type="button"
            className={`inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${styles['button']}`}
          >
            <CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Accept
          </button>

          <button
            type="button"
            className={`inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${styles['button']}`}
          >
            <XMarkIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Decline
          </button>
        </div>
      </div>
    </>
  );
}
