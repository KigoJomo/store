import { FC } from 'react';
import Input from '@/shared/components/ui/Input';
import Button from '@/shared/components/ui/Button';
import ProfilePic from './ProfilePic';
import { getUserProfile } from '@/data/users';
import Signout from '@/app/auth/components/Signout';

const Profile: FC = async () => {
  const user = await getUserProfile();

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 md:gap-12">
      <div className="w-full md:w-1/5 md:h-full flex flex-row md:flex-col items-center gap-4">
        <ProfilePic
          src={user?.image as string}
          alt={user?.name as string}
          radius={64}
          className=""
        />
        <span>{user?.name}</span>

        <div className="sm:mt-auto ml-auto sm:ml-0">
          <Signout className="" />
        </div>
      </div>

      <div className="w-full md:w-4/5 flex flex-col gap-4">
        <h3>your profile</h3>
        <div className="flex flex-col gap-6">
          <Input label={'Full Name'} name="name" value={user?.name as string} />
          <Input
            label={'Email Address'}
            name="email"
            type="email"
            value={user?.email as string}
          />
          <Button className="w-fit">Update Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
