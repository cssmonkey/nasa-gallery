"use client";

import { DateValue, DatePicker as NextUiDatePicker } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { DateFormat, getFormattedDate } from "@/utilities/format-date";
import { FC } from "react";
import { useRouter } from "next/navigation";

type DatePickerProps = {
    date: DateFormat;
};

const DatePicker: FC<DatePickerProps> = ({ date }) => {
    const router = useRouter();
    const [day, month, year] = date.split("-");
    let calendarDate = parseDate(`${year}-${month}-${day}`);

    const onDatePickerChange = (value: DateValue) => {
        const { day, month, year } = value;
        const newDate = getFormattedDate(new Date(`${year}-${month}-${day}`));

        router.push(`/picture-of-the-day/${newDate}`);
    };

    return (
        <div className="py-4">
            <NextUiDatePicker
                labelPlacement="outside-left"
                label="Selected date"
                className="max-w-[284px]"
                onChange={onDatePickerChange}
                defaultValue={calendarDate}
                hideTimeZone
            />
        </div>
    );
};

export default DatePicker;
