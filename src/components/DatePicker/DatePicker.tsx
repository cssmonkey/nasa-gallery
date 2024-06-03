"use client";

import { DatePicker as NextUiDatePicker } from "@nextui-org/react";
import { CalendarDate } from "@internationalized/date";

const DatePicker = () => {
    let date = new CalendarDate(2024, 6, 3);
    return (
        <div className="py-4">
            <NextUiDatePicker
                label="Selected date"
                className="max-w-[284px]"
                maxValue={date}
            />
        </div>
    );
};

export default DatePicker;
