interface Props {
	uri: string;
	size?: number;
}
export function Avatar(props: Props) {
	const { uri, size  = 40} = props;
	return (
		<div className="avatar">
			<div style={{width: `${size}px`, height: `${size}px`}} className="overflow-hidden">
        <img className="object-center object-cover" src={uri} alt="" /> 
      </div>
		</div>
	);
}
