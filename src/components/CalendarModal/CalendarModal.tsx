"use client";

import React, { FC } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Calendar,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { parseDate } from "@internationalized/date";
import { DateFormat, getTodaysDate } from "@/utilities/format-date";

type CalendarModalProps = {
    selectedDate: DateFormat;
};

const CalendarModal: FC<CalendarModalProps> = ({ selectedDate }) => {
    const router = useRouter();
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const today = getTodaysDate();

    const [day, month, year] = selectedDate.split("-");
    const selectedCalendarDate = parseDate(`${year}-${month}-${day}`);

    const [todayD, todayM, todayY] = today.split("-");
    const maxCalendarDate = parseDate(`${todayY}-${todayM}-${todayD}`);

    const handleConfirmationPress = () =>
        router.push(`/picture-of-the-day/03-01-2024`);

    return (
        <>
            <Button color="primary" onPress={onOpen}>
                Select date 📅
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    <>
                        <ModalHeader
                            className="flex flex-col gap-1"
                            id="calendar-title"
                        >
                            Select a date
                        </ModalHeader>
                        <ModalBody>
                            <Calendar
                                aria-describedby="calendar-title"
                                defaultValue={selectedCalendarDate}
                                maxValue={maxCalendarDate}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                color="primary"
                                onPress={handleConfirmationPress}
                            >
                                Update
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CalendarModal;
