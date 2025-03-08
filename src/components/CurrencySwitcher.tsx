import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { currencies } from '../config/currencies';
import { useStore } from '../store/useStore';
import { clsx } from 'clsx';

export function CurrencySwitcher() {
  const { currency, setCurrency } = useStore();
  
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <CurrencyDollarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        {currency}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {currencies.map((curr) => (
              <Menu.Item key={curr.code}>
                {({ active }) => (
                  <button
                    onClick={() => setCurrency(curr.code)}
                    className={clsx(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    {`${curr.symbol} ${curr.code}`}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}