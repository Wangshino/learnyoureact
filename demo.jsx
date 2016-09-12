

var ProductRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.keyword.value}</td>
      </tr>
    );
  }
});

var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    this.props.keywords.forEach(function(keyword) {
      if (keyword.option.indexOf(this.props.filterText) === -1 ) {
        return;
      }
      rows.push(<ProductRow keyword={keyword} />);
    }.bind(this));
    return (
      <table>
        <thead>
          <tr>
            <th>keywords</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var SearchBar = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.value
    );
  },
  render: function() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
        />
      </form>
    );
  }
});

var FilterableProductTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: ''
    };
  },

  handleUserInput: function(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render: function() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <ProductTable
          keywords={this.props.keywords}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
});
