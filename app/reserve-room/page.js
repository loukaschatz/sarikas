import { Suspense } from "react";
import ReserveRoomContent from "../components/ReserveRoomContent";

export default function ReserveRoom() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ReserveRoomContent />
        </Suspense>
    );
}