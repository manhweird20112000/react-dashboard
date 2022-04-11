import { IconBell } from 'assets/icons';
import { Avatar } from 'components/avatar/avatar';
import './styles.scss';

export function Navbar() {
	return (
		<div id="navbar">
			<div className="flex items-center">
				<div className="cursor-pointer">
					<div className="relative w-[40px] h-[40px] rounded-full bg-gray-100 flex items-center justify-center mx-3">
						<IconBell size={30} />
						{/* <div
							id="badge"
							className="bg-red-500 text-white font-medium text-sm w-[20px] h-[20px] flex items-center justify-center rounded-full absolute top-0 right-0">
							2
						</div> */}
					</div>
				</div>
				<div className="cursor-pointer">
					<Avatar uri="https://i.pinimg.com/originals/df/0b/f0/df0bf041371ccf6b1e29290790e463dd.jpg" />
				</div>
			</div>
		</div>
	);
}
