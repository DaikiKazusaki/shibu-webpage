// import React from 'react'
// import { ScrollArea } from "../ui/scroll-area"
// import { Separator } from "../ui/separator"
// import Link from 'next/link'

{/*

type UpdateItem = {
  id: string
  date: string
  title: string
  description: string
}

const updates: UpdateItem[] = [
  {
    id: '1',
    date: '2025-02-08',
    title: 'New Feature: Dark Mode',
    description: 'Weve added a dark mode option for better nighttime viewing.'
  },
  {
    id: '2',
    date: '2025-02-05',
    title: 'Performance Improvements',
    description: 'Significant speed enhancements across the entire platform.'
  },
  {
    id: '3',
    date: '2025-02-01',
    title: 'Bug Fixes',
    description: 'Fixed several minor bugs reported by our users.'
  },
  // Add more update items as needed
]

export function UpdateSidebar() {
  return (
    <aside className="w-64 bg-background border-l border-border">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Recent Updates</h2>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          {updates.map((update, index) => (
            <React.Fragment key={update.id}>
              <UpdateItem update={update} />
              {index < updates.length - 1 && <Separator className="my-2" />}
            </React.Fragment>
          ))}
        </ScrollArea>
      </div>
    </aside>
  )
}

function UpdateItem({ update }: { update: UpdateItem }) {
  return (
    <Link href={`/updates/${update.id}`} className="block hover:bg-accent rounded-md transition-colors">
      <div className="p-2">
        <p className="text-sm text-muted-foreground">{update.date}</p>
        <h3 className="font-medium">{update.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{update.description}</p>
      </div>
    </Link>
  )
}

*/}