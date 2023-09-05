import {useInjection} from "brandi-react";
import {Tokens} from "../utils/DI/tokens";
import {useEffect, useState} from "react";
import {People} from "../utils/Types";

export const PeopleList = () => {
  const logger = useInjection(Tokens.logger)
  const apiServiceFactory = useInjection(Tokens.apiServiceFactory);

  const [list, setList] = useState<People[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    logger.log('Getting people')
    apiServiceFactory(logger).getPeople().then(data => {
      setIsLoading(false)
      setList(data)
    })
  }, [apiServiceFactory, logger])

  return isLoading ? (<div>Loading people...</div>) : (
    <>
      <ul>
        {
          list.map(man => <li key={man.url}>{man.name}</li>)
        }
      </ul>
    </>
  )
}
