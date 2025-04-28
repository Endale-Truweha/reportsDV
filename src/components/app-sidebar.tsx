'use client';

import { BellIcon, Cookie, CreditCard, Inbox, MessageSquare, Plus, Settings, User } from "lucide-react";

import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command";
import UserItem from "./Logo";

export default function Sidebar() {
  const menuList = [
    {
      group: "Recently Viewed Documents",
      items: [
        {
          link: "/",
          icon: <Plus />,
          text: "with in 1 hour"
        },
        {
          link: "/",
          icon: <Plus />,
          text: "last week"
        },
        {
          link: "/",
          icon: <Plus />,
          text: "last month"
        },
       
      ]
    },
    {
      group: "Recently Viewed Pages",
      items: [
        {
          link: "/",
          icon: <Plus />,
          text: "with in 1 hour"
        },
        {
          link: "/",
          icon: <Plus />,
          text: "last week"
        },
        {
          link: "/",
          icon: <Plus />,
          text: "last month"
        }
      ]
    }
  ]

  return <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
    <div>
      <UserItem />
    </div>
    <div className="grow">
      <Command style={{ overflow: 'visible' }}>
        <CommandList style={{ overflow: 'visible' }}>
          {menuList.map((menu: any, key: number) => (
            <CommandGroup key={key} heading={menu.group}>
              {menu.items.map((option: any, optionKey: number) =>
                <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                  {option.icon}
                  {option.text}
                </CommandItem>
              )}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>

    </div>
    <div>Settings / Notifications</div>
  </div>;
}