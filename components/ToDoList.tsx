"use client";

import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

const ToDoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">To Do List</h1>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full cursor-pointer">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setIsOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className="max-h-[400px] mt-4 overflow-auto">
        <div className="flex flex-col gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem Ipsum
              </label>
            </div>
          </Card>{" "}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem Ipsum
              </label>
            </div>
          </Card>{" "}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem Ipsum
              </label>
            </div>
          </Card>{" "}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem Ipsum
              </label>
            </div>
          </Card>{" "}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem Ipsum
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};
export default ToDoList;
