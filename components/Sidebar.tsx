import React from 'react'
import ListIn from '../public/listin.svg'
import Advertise from '../public/advertise.svg'
import Wallet from '../public/wallet.svg'
import LastUpdated from '../public/lastupadted.svg'
import NewPairs from '../public/newpairs.svg'


interface SidebarListItemProps {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color?: string;
}
const SidebatListItem : React.FC<SidebarListItemProps> = ({name, Icon, color}) => {
  return(
    <div className='flex w-full justify-start gap-2 items-center'>
      <Icon className={`w-6 h-6`} color={color}/>
      <p className='opacity-80 text-sm'>{name}</p>
    </div>
  )
}

const SidebarListItems = [{name: 'Advertise', Icon: Advertise, color: "#d0d1d2"}, {name: 'Wallet', Icon: Wallet, color: "#d0d1d2"}, {name: 'Last Updated', Icon: LastUpdated, color: "#d0d1d2"}, {name: 'New Pairs', Icon: NewPairs, color: "#0ecb81"}, {name: 'Etherium Mainnet', Icon: Wallet, color: "#0ecb81"}]
const Sidebar = () => {
  return (
    <div className='flex flex-col bg-[#1e2025] text-white w-[15%] mt-3 py-1 items-center gap-3'>
        <div className="flex w-[95%] border-b-[1px] border-[rgb(39,42,42)] py-2 items-center">
            <p className='flex-1 opacity-80 text-sm'>Chains</p>
            <ListIn />
        </div>
        <div className='flex w-full px-3 flex-col gap-3'>
          {SidebarListItems.map((item, index) => (
            <SidebatListItem key={index} name={item.name} Icon={item.Icon} color={item.color}/>
          ))}
        </div>
    </div>
  )
}

export default Sidebar