"use client";
import TimeAgo from "react-timeago";

export default function PublishedAt({ date }) {
	return (
		<p className="text-[10px] text-gray-700">
			Published <TimeAgo date={date} />
		</p>
	);
}
