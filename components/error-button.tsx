export default function ErrorButton({
	text,
	callBack,
}: { text: string; callBack: () => void }) {
	return (
		<button
			type="button"
			className="px-5 py-2 text-lg font-medium text-center rounded-lg transition-colors duration-300 text-white/80 hover:bg-neutral-800/70 hover:text-white lg:text-xl"
			onClick={() => callBack()}
		>
			{text}
		</button>
	);
}
