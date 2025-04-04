import { IUserWithProfile } from '@shared/libs/interfaces/user.interface.ts';

export interface IChat {
	id: string;
	chatMembers: IChatMember[];
	messages: IMessage[];
}

export interface IChatMember {
	id: string;
	memberId: string;
	chatId: string;
	member: IUserWithProfile;
	messages?: IMessage[];
	lastReadMessageId: string;
}

export interface IMessage {
	id: string;
	userId: string;
	content: string;
	isPinned: boolean;
	createdAt: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}
