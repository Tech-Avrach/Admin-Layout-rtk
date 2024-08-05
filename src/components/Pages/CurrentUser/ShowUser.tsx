import PageContainer from '@/components/Layout/PageContainer'
import ContaierCard from '@/components/ui/containerCard'
import { User } from 'lucide-react'
import ShowUserInfo from './ShowUserInfo'

function ShowUser() {
  return (
    <>
      <PageContainer
        pageTitleIcon={<User size={24} />}
        pageHeading="Edit Profile"
        pageSubTitle="Edit your profile information"
      >
        <ContaierCard>
            <ShowUserInfo />
        </ContaierCard>
      </PageContainer>
    </>
  )
}

export default ShowUser