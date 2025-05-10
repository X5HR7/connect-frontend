import { IServerMember, IServerRole } from '@shared/libs/interfaces';

export interface IGroupedMembers {
	[roleName: string]: IServerMember[];
}

export function getGroupedServerMembers(
	members: IServerMember[],
	allRoles: IServerRole[],
	everyoneRoleName: string = 'EVERYONE'
): IGroupedMembers {
	// 1. Подготовка и сортировка ролей
	const rolesMap = new Map<string, IServerRole>();
	const showSeparateRoles: IServerRole[] = [];

	allRoles.forEach(role => {
		rolesMap.set(role.id, role);
		if (role.showSeparately) {
			showSeparateRoles.push(role);
		}
	});

	// Сортируем роли по убыванию position
	showSeparateRoles.sort((a, b) => b.position - a.position);

	// 2. Группировка участников
	const roleGroups = new Map<string, IServerMember[]>();
	const everyoneGroup: IServerMember[] = [];

	members.forEach(member => {
		let highestRole: IServerRole | null = null;

		member.serverMemberRoles?.forEach(mr => {
			const role = rolesMap.get(mr.roleId);
			if (role?.showSeparately && (!highestRole || role.position > highestRole.position)) {
				highestRole = role;
			}
		});

		if (highestRole) {
			// @ts-ignore
			if (!roleGroups.has(highestRole.name)) {
				// @ts-ignore
				roleGroups.set(highestRole.name, []);
			}
			// @ts-ignore
			roleGroups.get(highestRole.name)?.push(member);
		} else {
			everyoneGroup.push(member);
		}
	});

	// 3. Создание отсортированного результата
	const sortedResult: IGroupedMembers = {};

	// Сначала добавляем роли в порядке убывания position
	showSeparateRoles.forEach(role => {
		if (roleGroups.has(role.name)) {
			sortedResult[role.name] = roleGroups.get(role.name)!;
		}
	});

	// Затем добавляем группу EVERYONE (если есть участники)
	if (everyoneGroup.length > 0) {
		sortedResult[everyoneRoleName] = everyoneGroup;
	}

	return sortedResult;
}
