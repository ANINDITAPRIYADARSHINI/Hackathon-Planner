import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function FindPage() {


  return (
    <Card className="w-[350px] m-64">
      <CardHeader>
        <CardTitle>Search Hackathons</CardTitle>
        <CardDescription>Find Hackathons based on your skills.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">React.js</SelectItem>
                  <SelectItem value="astro">Python</SelectItem>
                  <SelectItem value="nuxt">JavaScript</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">React.js</SelectItem>
                  <SelectItem value="astro">Python</SelectItem>
                  <SelectItem value="nuxt">JavaScript</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">React.js</SelectItem>
                  <SelectItem value="astro">TypeScript</SelectItem>
                  <SelectItem value="nuxt">JavaScript</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Search</Button>
      </CardFooter>
    </Card>
  )
}
