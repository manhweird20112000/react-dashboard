import { Collapse } from 'components';
import { CollapseItem } from 'components/collapse/collapse-item';
import { menu } from 'configs';
import './styles.scss';

export function Sidebar() {
	return (
		<div id="sidebar" style={{ backgroundColor: '#0061F7' }}>
			<div className="logo"></div>
			<div>
				{menu.map((item) => (
					<Collapse
						icon={item.icon}
						to={item.to}
						label={item.label}
						key={item.id}
						type={item.type}>
						{item.type === 'COLLAPSE' &&
						item.hasChild &&
						item.child.length > 0 ? (
							item.child.map((child) => (
								<CollapseItem
									key={child.id}
									label={child.label}
									icon={child.icon}
									to={child.to}
								/>
							))
						) : (
							<></>
						)}
					</Collapse>
				))}
			</div>
		</div>
	);
}
