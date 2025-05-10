import { IUserWithProfile } from '@shared/libs/interfaces/user.interface.ts';

export interface IServer {
	id: string;
	name: string;
	image?: string;
	description?: string;
	createdAt: Date;
	creatorId: string;

	roles?: IServerRole[];
	serverCategories?: IServerCategory[];
	serverMembers?: IServerMember[];
}

export interface IFServer extends IServer {
	roles: IServerRole[];
	serverCategories: IServerCategory[];
	serverMembers: IServerMember[];
}

export interface IServerRole {
	id: string;
	name: string;
	color: string;
	position: number;
	showSeparately: boolean;
	mayBeMentioned: boolean;
	serverId: string;
	serverRoleRule?: IServerRoleRule;
	serverCategoryRoleRule?: IServerCategoryRoleRule[];
	serverMembersRole?: any;
	serverChannelRoleRule?: any;
}

export interface IServerRoleRule {
	id: string;
	roleId: string;

	//TODO: Do role rules
}

export interface IServerCategory {
	id: string;
	name: string;
	isPrivate: boolean;
	position: number;
	serverId: string;
	serverCategoryRoleRules?: IServerCategoryRoleRule[];
	serverChannels?: IServerChannel[];
}

export interface IServerCategoryRoleRule {
	id: string;
	rule: Rule;
	value: boolean;
	categoryId: string;
	roleId: string;
}

export type TServerChannelTypes = 'TEXT' | 'VOICE' | 'ANNOUNCEMENTS' | 'MEETING';

export interface IServerChannel {
	id: string;
	name: string;
	type: TServerChannelTypes;
	isPrivate: boolean;
	position: number;
	categoryId: string;
	serverChannelRoleRules?: IServerChannelRoleRule[];
}

export interface IServerChannelRoleRule {
	id: string;
	rule: Rule;
	value: boolean;
	channelId: string;
	roleId: string;
}

export interface IServerMember {
	id: string;
	displayName?: string;
	joinAt: Date;
	isMicroMuted: boolean;
	isVoiceMuted: boolean;
	serverId: string;
	userId: string;
	user: IUserWithProfile;
	serverMemberRoles?: IServerMemberRoles[];
}

export interface IServerMemberRoles {
	memberId: string;
	roleId: string;
}

export interface IServerMessage {
	id: string;
	userId: string;
	user?: IUserWithProfile;
	chatId: string;
	parentId: string;
	parent: IServerMessage | null;
	content: string;
	isPinned: boolean;
	createdAt: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}

export interface IServerTextChannel {
	id: string;
	channelId: string;
	channel: IServerChannel;
	messages: IServerMessage[];
	channelMembers: IServerTextChannelMember[];
}

export interface IServerTextChannelMember {
	id: string;
	memberId: string;
	member: IServerMember;
	channelId: string;
	lastMessageReadId?: string;
}

export enum Rule {
	'CAN_MANAGE_CHANNELS',
	'HAS_AUDIT_LOG_ACCESS',
	'CAN_MANAGE_SERVER_SETTINGS',

	//member rules
	'CAN_CREATE_INVITE',
	'CAN_CHANGE_DISPLAY_NAME',
	'CAN_MANAGE_DISPLAY_NAMES',
	'CAN_KICK_MEMBERS',

	//text channel rules
	'CAN_SEND_MESSAGES',
	'CAN_SEND_LINKS',
	'CAN_ATTACH_FILES',
	'CAN_ADD_REACTION',
	'CAN_MENTION_ROLES',
	'CAN_MANAGE_MESSAGES',

	//voice channel rules
	'CAN_JOIN',
	'CAN_SPEAK',
	'CAN_TRANSLATE_VIDEO',
	'CAN_USE_AUTO_VOICE_ACTIVATION',
	'CAN_MUTE_MICRO_TO_MEMBERS',
	'CAN_MUTE_VOICE_TO_MEMBERS',
	'CAN_MOVE_MEMBERS',

	//additional rules
	'IS_ADMINISTRATOR'
}
