"use client";
import TimeAgo from "react-timeago";

interface PublishedAtProps {
	date: string;
}

export default function PublishedAt({ date }: PublishedAtProps) {
	return (
		<p className="text-[10px] text-gray-700">
			Published <TimeAgo date={date} />
		</p>
	);
}
