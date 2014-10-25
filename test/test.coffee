describe "test", ->

  describe "one", ->
    it "should be awesome", ->
      console.log "one"
      expect("foo").to.be.a "string"

  describe "two", ->
    it "should be equally awesome", ->
      console.log "two"
      expect("woot").to.be.a "string"
