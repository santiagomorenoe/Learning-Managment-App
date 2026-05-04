import SharedNotificationsSettings from '@/components/SharedNotificationsSettings';
import React from 'react'

const UserSettings = () => {
    return (
        <div className="w-3/5">
            <SharedNotificationsSettings
                title="User Settings"
                subtitle="Manage your user settings"
            />
        </div>
    )
}

export default UserSettings;