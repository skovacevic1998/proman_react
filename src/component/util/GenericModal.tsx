import { Image } from "antd";

interface availabilityListProps {
  name: string;
  description: string;
  isLink: boolean;
}

interface GenericModalProps {
  imagePath: string;
  description: string;
  availability: availabilityListProps[];
  updated: string;
}

export const GenericModal: React.FC<GenericModalProps> = (
  modalProps: GenericModalProps
) => {
  return (
    <>
      <div className="modal_main">
        <div style={{ marginBottom: 10 }}>
          <Image width={"auto"} src={modalProps.imagePath} />
        </div>
        <div>
          <h3>Description:</h3>
        </div>
        <div>
          <p>{modalProps.description}</p>
        </div>
        <div>
          <h3>Availability:</h3>
        </div>
        <div>
          {modalProps.availability.map((item, index) => (
            <>
              {item.isLink ? (
                <p>
                  {item.name}:{" "}
                  <a key={index} href={item.description}>
                    {item.description}
                  </a>
                </p>
              ) : (
                <p key={index}>
                  {item.name}: {item.description}
                </p>
              )}
            </>
          ))}
        </div>
        <div>
          <h3>Last updated:</h3>
        </div>
        <div>
          <p>{modalProps.updated}</p>
        </div>
      </div>
    </>
  );
};
