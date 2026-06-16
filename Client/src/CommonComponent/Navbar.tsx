import { useState } from "react";
import { motion } from "framer-motion";

import {
  CreditCard,
  Briefcase,
  CalendarDays,
  Ticket,
  User,
} from "lucide-react";

type NavItem = {
  label: string;
  icon: any;
};

const navItems: NavItem[] = [
  {
    label: "Bill",
    icon: CreditCard,
  },

  {
    label: "List",
    icon: Briefcase,
  },

  {
    label: "Calendar",
    icon: CalendarDays,
  },

  {
    label: "Bag",
    icon: Ticket,
  },

  {
    label: "My",
    icon: User,
  },
];

export default function Navbar() {
  const [active, setActive] = useState(2);

  const bubblePosition = [
    "10%",
    "30%",
    "50%",
    "70%",
    "90%",
  ];

  return (
    <div className="min-h-screen bg-[#f3f3f3] flex items-center justify-center">

      <div className="relative">

        {/* NAVBAR */}

        <div
          className="
          relative
          w-[380px]
          h-[80px]
          bg-[#fafafa]
          rounded-[32px]
          shadow-[0_20px_40px_rgba(0,0,0,0.08)]
          flex
          items-center
          justify-between
          px-8
          overflow-visible
        "
        >

          {/* Floating Bubble */}

          <motion.div
            animate={{
              left: bubblePosition[active],
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 25,
            }}
            className="
            absolute
            -top-7
            w-[58px]
            h-[58px]
            rounded-full
            bg-[#1e1e1e]
            shadow-[0_15px_30px_rgba(0,0,0,0.25)]
            flex
            items-center
            justify-center
            -translate-x-1/2
            z-50
          "
          >
            {(() => {
              const Icon = navItems[active].icon;

              return (
                <motion.div
                  key={active}
                  initial={{
                    scale: 0.5,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <Icon
                    size={24}
                    className="text-white"
                  />
                </motion.div>
              );
            })()}
          </motion.div>

          {/* ITEMS */}

          {navItems.map((item, index) => {
            const Icon = item.icon;

            const isActive = active === index;

            return (

              <button
                key={index}
                onClick={() => setActive(index)}
                className={`
                relative
                flex
                flex-col
                items-center
                justify-center
                w-14
                z-10
              `}
              >

                {/* Hide center icon */}

                {index !== active && (

                  <motion.div

                    animate={{
                      opacity: isActive ? 0 : 1,
                      y: isActive ? -10 : 0,
                    }}

                    transition={{
                      duration: 0.25,
                    }}

                  >

                    <Icon

                      size={22}

                      className="
                      text-gray-400
                    "

                    />

                  </motion.div>

                )}

                {/* Text */}

                <motion.span

                  animate={{

                    color: isActive
                      ? "#111111"
                      : "#A3A3A3",

                    y: isActive ? 2 : 0,

                  }}

                  transition={{

                    duration: 0.25,

                  }}

                  className={`
                  text-xs
                  mt-2
                  ${isActive ? "font-semibold" : ""}
                `}
                >

                  {item.label}

                </motion.span>

              </button>

            );
          })}

          {/* Bottom Bar */}

          <div
            className="
            absolute
            bottom-3
            left-1/2
            -translate-x-1/2
            w-[120px]
            h-[5px]
            rounded-full
            bg-[#ededed]
          "
          />

        </div>

      </div>

    </div>
  );
}