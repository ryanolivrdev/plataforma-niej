import { useSidebar } from "@/hooks/useSidebar";
import { Transition } from "@headlessui/react";
import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import clsx from "clsx";
import {
  Apple,
  Dumbbell,
  FileText,
  HeartPulse,
  PenSquare,
  Stethoscope,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Text } from "../elements/Text";

export function Sidebar() {
  const router = useRouter();
  const { toggleSidebar, isSidebarOpen } = useSidebar();

  return (
    <>
      <Transition
        show={isSidebarOpen}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={
            isSidebarOpen
              ? "fixed inset-0 top-[64px] z-20 h-full w-full bg-black/50 md:top-[80px]"
              : ""
          }
          onClick={() => (isSidebarOpen ? toggleSidebar() : "")}
          onMouseEnter={() => toggleSidebar()}
        />
      </Transition>

      <aside
        className={clsx(
          "fixed left-0 top-[64px] z-40 h-screen w-64 -translate-x-full border-r border-gray-200 bg-gray-100 pt-16 transition-transform md:top-[80px]",
          {
            "translate-x-0": isSidebarOpen,
          },
        )}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto px-3 pb-4">
          <ul className="space-y-2 font-medium">
            {/* <li>
              <Link
                href="/dashboard"
                onClick={() => toggleSidebar()}
                className={clsx(
                  "flex items-center rounded-lg p-2 transition duration-75 hover:bg-green-300",
                  {
                    "bg-green-400": router.pathname === "/dashboard",
                  },
                )}
              >
                <ChartBarIcon className="h-6 w-6" />
                <Text className="ml-3 font-bold">Dashboard</Text>
              </Link>
            </li> */}
            <li>
              <Link
                href="/residente"
                onClick={() => toggleSidebar()}
                className={clsx(
                  "flex items-center rounded-lg p-2 transition duration-75 hover:bg-purple-300",
                  {
                    "bg-purple-400": router.pathname.includes("/residente"),
                  },
                )}
              >
                <Users className="h-6 w-6" />
                <Text className="ml-3 font-bold">Residentes</Text>
              </Link>
            </li>
            <li>
              <Link
                href="/ficha-em-branco"
                onClick={() => toggleSidebar()}
                className={clsx(
                  "flex items-center rounded-lg p-2 transition duration-75 hover:bg-purple-300",
                  {
                    "bg-purple-400":
                      router.pathname.includes("/ficha-em-branco"),
                  },
                )}
              >
                <PenSquare className="h-6 w-6" />
                <Text className="ml-3 font-bold">Ficha em branco</Text>
              </Link>
            </li>
            <li>
              <CollapsiblePrimitive.Root>
                <CollapsiblePrimitive.Trigger
                  className={clsx(
                    "flex w-full items-center rounded-lg p-2 transition duration-75 hover:bg-purple-300",
                    {
                      "bg-purple-400": router.pathname.includes("/fichas"),
                    },
                  )}
                >
                  <FileText className="h-6 w-6" />
                  <Text className="ml-3 font-bold">Fichas</Text>
                  <ArrowSmallDownIcon className="ml-auto h-5 w-5" />
                </CollapsiblePrimitive.Trigger>
                <CollapsiblePrimitive.Content>
                  <ul className="ml-4 space-y-2 py-2">
                    <li>
                      <Link
                        href="/fichas/nutricao"
                        onClick={() => toggleSidebar()}
                        className={clsx(
                          "flex items-center rounded-lg p-2 transition duration-75 hover:bg-purple-300",
                          {
                            "bg-purple-400":
                              router.pathname === "/fichas/nutricao",
                          },
                        )}
                      >
                        <Apple className="h-6 w-6" />
                        <Text className="ml-3 font-bold">Nutrição</Text>
                      </Link>
{/* 
                      <Link
                        href="/fichas/medicina"
                        onClick={() => toggleSidebar()}
                        className={clsx(
                          "flex items-center rounded-lg p-2 transition duration-75 hover:bg-purple-300",
                          {
                            "bg-purple-400":
                              router.pathname === "/fichas/medicina",
                          },
                        )}
                      >
                        <Stethoscope className="h-6 w-6" />
                        <Text className="ml-3 font-bold">Medicina</Text>
                      </Link> */}

                      <Link
                        href="/fichas/fisioterapia"
                        onClick={() => toggleSidebar()}
                        className={clsx(
                          "flex items-center rounded-lg p-2 transition duration-75 hover:bg-purple-300",
                          {
                            "bg-purple-400":
                              router.pathname === "/fichas/fisioterapia",
                          },
                        )}
                      >
                        <Dumbbell className="h-6 w-6" />
                        <Text className="ml-3 font-bold">Fisioterapia</Text>
                      </Link>

                      <Link
                        href="/fichas/odontologia"
                        onClick={() => toggleSidebar()}
                        className={clsx(
                          "flex items-center rounded-lg p-2 transition duration-75 hover:bg-purple-300",
                          {
                            "bg-purple-400":
                              router.pathname === "/fichas/odontologia",
                          },
                        )}
                      >
                        <HeartPulse className="h-6 w-6" />
                        <Text className="ml-3 font-bold">Odontologia</Text>
                      </Link>

                      <Link
                        href="/fichas/psicologia"
                        onClick={() => toggleSidebar()}
                        className={clsx(
                          "flex items-center rounded-lg p-2 transition duration-75 hover:bg-purple-300",
                          {
                            "bg-purple-400":
                              router.pathname === "/fichas/psicologia",
                          },
                        )}
                      >
                        <Apple className="h-6 w-6" />
                        <Text className="ml-3 font-bold">Psicologia</Text>
                      </Link>

                      <Link
                        href="/fichas/direito"
                        onClick={() => toggleSidebar()}
                        className={clsx(
                          "flex items-center rounded-lg p-2 transition duration-75 hover:bg-purple-300",
                          {
                            "bg-purple-400":
                              router.pathname === "/fichas/direito",
                          },
                        )}
                      >
                        <Apple className="h-6 w-6" />
                        <Text className="ml-3 font-bold">Direito</Text>
                      </Link>
                    </li>
                  </ul>
                </CollapsiblePrimitive.Content>
              </CollapsiblePrimitive.Root>
            </li>
            {/* <li>
              <Link
                href="/database"
                onClick={() => toggleSidebar()}
                className={clsx(
                  "flex items-center rounded-lg p-2 transition duration-75 hover:bg-green-300",
                  {
                    "bg-green-400": router.pathname === "/database",
                  }
                )}
              >
                <MagnifyingGlassIcon className="h-6 w-6" />
                <Text className="ml-3 font-bold">Banco de dados</Text>
              </Link>
            </li> */}
            {/* <li>

              <Collapse title="Cadastros" defaultOpen>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/dashboard/clients"
                      className={clsx(
                        "flex items-center rounded-lg p-2 transition duration-75 hover:bg-green-300",
                        {
                          "bg-green-400": router.pathname === "/dashboard/clients",
                        }
                      )}
                    >
                      <ChartBarIcon className="h-6 w-6" />
                      <Text className="ml-3 font-bold">Clientes</Text>
                    </Link>
                    </li>
                    </ul>
                    </Collapse>
            </li> */}
            {/* <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Kanban</span>
                <span className="ml-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </a>
            </li> */}
            {/* <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Inbox</span>
                <span className="ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li> */}
            {/* <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Users</span>
              </a>
            </li> */}
            {/* <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Products</span>
              </a>
            </li> */}
            {/* <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Sign In</span>
              </a>
            </li> */}
            {/* <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Sign Up</span>
              </a>
            </li> */}
          </ul>
        </div>
      </aside>
    </>
  );
}
