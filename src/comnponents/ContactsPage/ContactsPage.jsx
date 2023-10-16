import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ColorRing } from 'react-loader-spinner';
import { Form } from 'comnponents/Form/Form';
import { Section } from 'comnponents/Section/Section';
import { SectionMain } from 'comnponents/SectionMain/SectionMain';
import { Contacts } from 'comnponents/Contacts/Contacts';
import { Search } from 'comnponents/Search/Search';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export function ContactsPage() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <SectionMain title="Phonebook">
        <Form />
        <Section title="Contacts">
          <Search />

          <Contacts>
            {isLoading && !error && (
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#000']}
              />
            )}
          </Contacts>
        </Section>
      </SectionMain>
    </>
  );
}
