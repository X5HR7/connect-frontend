import { IUserWithProfile } from '@shared/libs/interfaces/user.interface.ts';

export interface IChat {
	id: string;
	chatMembers: IChatMember[];
	messages: IMessage[];
}

export interface IChatMember {
	id: string;
	userId: string;
	chatId: string;
	user: IUserWithProfile;
	messages?: IMessage[];
	lastReadMessageId: string;
}

export interface IMessage {
	id: string;
	userId: string;
	chatId: string;
	parentId: string;
	parent: IMessage | null;
	content: string;
	isPinned: boolean;
	createdAt: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}
