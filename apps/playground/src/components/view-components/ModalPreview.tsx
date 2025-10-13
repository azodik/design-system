import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalFooter, Card, Input } from "@azodik/ui";

export const ModalPreview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <>
      <div className="flex-vertical-lg">
        <Card className="p-4">
          <div className="flex-vertical">
            <div className="flex gap-sm flex-wrap">
              <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
              <Button 
                variant="destructive" 
                onClick={() => setIsDeleteModalOpen(true)}
              >
                Delete Item
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="md"
      >
        <ModalHeader onClose={() => setIsModalOpen(false)}>
          <h2 className="modal-title">Confirm Action</h2>
        </ModalHeader>
        <p>This is the modal of size="md". Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit illum qui, voluptatibus mollitia sed perferendis in eligendi. Ea tempore ex voluptatibus dolorem dignissimos quam soluta tempora nisi, enim adipisci dicta.</p>
        <ModalFooter className="items-center justify-center">
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setIsModalOpen(false)}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Delete Item"
        size="sm"
      >
        <p>This is the modal of size="sm"</p>
        <ModalFooter className="items-center justify-center">
          <Button variant="secondary" onClick={() => setIsDeleteModalOpen(false)}>
            Cancel
          </Button>
          <Button 
            variant="destructive" 
            onClick={() => setIsDeleteModalOpen(false)}
            style={{ backgroundColor: '#dc2626' }}
          >
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const ModalCode = `import React, { useState } from "react";
import { Button, Modal, ModalFooter, Card } from "@azodik/ui";

export const ModalExample = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <>
      <div className="flex-vertical-lg">
        <Card className="p-4">
          <div className="flex-vertical">
            <div className="flex gap-md flex-wrap">
              <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
              <Button 
                variant="destructive" 
                onClick={() => setIsDeleteModalOpen(true)}
              >
                Delete Item
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirm Action"
        size="md"
      >
        <p>This is the modal of size="md"</p>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setIsModalOpen(false)}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        size="sm"
      >
        <ModalHeader onClose={() => setIsDeleteModalOpen(false)}>
          <h2 className="modal-title">Delete Item</h2>
        </ModalHeader>
        <p>This is the modal of size="sm"</p>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setIsDeleteModalOpen(false)}>
            Cancel
          </Button>
          <Button 
            variant="destructive" 
            onClick={() => setIsDeleteModalOpen(false)}
            style={{ backgroundColor: '#dc2626' }}
          >
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};`;

export const FormModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Add User</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader onClose={() => setIsOpen(false)}>
          <h2 className="modal-title">Add New User</h2>
        </ModalHeader>
        <form onSubmit={handleSubmit} className="p-6 flex-vertical">
          <div>
            <label htmlFor="name">Name</label>
            <Input 
              id="name"
              value={formData.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Input 
              id="email-preview"
              type="email"
              value={formData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="flex justify-center items-center gap-lg">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">
              Add User
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export const ModalHeaderExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal with Custom Header</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader onClose={() => setIsOpen(false)}>
          <h2 className="modal-title">Custom Header</h2>
        </ModalHeader>
        <div className="p-6">
          <p>Modal content goes here.</p>
        </div>
      </Modal>
    </>
  );
};
