import { ReactNode } from 'react';
import { useModalStore } from '@shared/store';
import { ErrorModal, ErrorModalProps } from '@shared/ui/global-modal';

class ModalService {
	private open(content: ReactNode) {
		useModalStore.getState().openModal(content);
	}

	close() {
		useModalStore.getState().closeModal();
	}

	openErrorModal = (options?: Omit<ErrorModalProps, 'onClose'>) => {
		this.open(<ErrorModal {...options} onClose={this.close} />);
	};

	openDefaultModal = (content: ReactNode) => {
		this.open(content);
	};
}

export const modalService = new ModalService();
