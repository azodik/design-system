import React, { useState } from "react";
import { Button, Modal, ModalFooter, Tooltip, Popover, Card } from "@azodik/ui";

export const ModalPreview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <>
      <div className="space-y-6">
        <Card 
          className="p-6"
          style={{ 
            width: '100%',
            minWidth: '400px',
            maxWidth: '500px'
          }}
        >
          <div className="space-y-4">
            <div className="flex gap-4 flex-wrap">
              <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
              <Button 
                variant="secondary" 
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
        <p>Are you sure you want to proceed with this action?</p>
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
        title="Delete Item"
        size="sm"
      >
        <p>This action cannot be undone. Are you sure you want to delete this item?</p>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setIsDeleteModalOpen(false)}>
            Cancel
          </Button>
          <Button 
            variant="primary" 
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
      <div className="space-y-6">
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex gap-4 flex-wrap">
              <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
              <Button 
                variant="secondary" 
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
        <p>Are you sure you want to proceed with this action?</p>
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
        title="Delete Item"
        size="sm"
      >
        <p>This action cannot be undone. Are you sure you want to delete this item?</p>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setIsDeleteModalOpen(false)}>
            Cancel
          </Button>
          <Button 
            variant="primary" 
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
