import React from "react";

interface Notification {
  id?: string;
  title: string;
  message: string;
  type: "success" | "error" | "info";
  delay?: number;
}

interface NotificationContext {
  addNotification: (notification: Notification) => void;
  removeNotification: (id: string) => void;
}

const NotificationContext = React.createContext<NotificationContext>({
  addNotification: () => {},
  removeNotification: () => {},
});

export const NotificationProvider: React.FC = ({ children }) => {
  const [notifications, setNotifications] = React.useState<Notification[]>([]);

  const addNotification = (notification: Notification) => {
    const id = Math.random().toString(36).substr(2, 9);
    const delay = notification.delay || 5000;
    setNotifications((prev) => [...prev, { ...notification, id, delay }]);

    if (notification.delay) {
      setTimeout(() => {
        removeNotification(id);
      }, notification.delay);
    }
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const getBackgroundColor = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return "border-green-500";
      case "error":
        return "border-red-500";
      case "info":
        return "border-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        addNotification,
        removeNotification,
      }}
    >
      <div className="relative">
        {children}
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`fixed bottom-0 right-0 bg-color-2 border-l-4 text-color-1 p-4 m-4 shadow-md ${getBackgroundColor(
              n.type
            )}`}
          >
            <p className="text-lg">{n.title}</p>
            <p className="text-sm text-gray">{n.message}</p>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => React.useContext(NotificationContext);
